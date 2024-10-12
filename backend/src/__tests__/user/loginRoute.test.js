const request = require("supertest");
const userModel = require("../../models/userModel");
const { comparePassword } = require("../../utils/password");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/token");
const { getUserInitialData } = require("../../utils/utils");
const login = require("../../controllers/userController").login;
const app = require("../../index");

jest.mock("../../models/userModel");
jest.mock("../../utils/password");
jest.mock("../../utils/token");
jest.mock("../../utils/utils");

describe("POST /user/login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 404 if the user is not found", async () => {
    userModel.findOne.mockReturnValue({
      lean: jest.fn().mockResolvedValue(null),
    });

    const response = await request(app)
      .post("/user/login")
      .send({ email: "test@example.com", password: "password123" });

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("User not found");
  });

  it("should return 401 if the password is incorrect", async () => {
    const mockUser = {
      email: "test@example.com",
      passwordHash: "hashed_password",
    };
    userModel.findOne.mockReturnValue({
      lean: jest.fn().mockResolvedValue(mockUser),
    });
    comparePassword.mockResolvedValue(false);

    const response = await request(app)
      .post("/user/login")
      .send({ email: "test@example.com", password: "wrong_password" });

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Incorrect password");
  });

  it("should return 200 and the tokens if login is successful", async () => {
    const mockUser = {
      _id: "userId",
      fullName: "John Doe",
      email: "test@example.com",
      passwordHash: "hashed_password",
      isVerified: true,
    };

    userModel.findOne.mockReturnValue({
      lean: jest.fn().mockResolvedValue(mockUser),
    });
    comparePassword.mockResolvedValue(true);
    generateAccessToken.mockReturnValue("accessToken");
    generateRefreshToken.mockReturnValue("refreshToken");
    getUserInitialData.mockResolvedValue([[], []]);

    const response = await request(app)
      .post("/user/login")
      .send({ email: "test@example.com", password: "password123" });

    expect(response.statusCode).toBe(200);
    expect(response.body.accessToken).toBe("accessToken");
    expect(response.body.user).toEqual({
      fullName: "John Doe",
      email: "test@example.com",
      _id: "userId",
      isVerified: true,
      workspaceInvitations: [],
      workspaces: [],
    });
    expect(response.headers["set-cookie"]).toBeDefined();
  });

  it("should handle errors and call next with error", async () => {
    const error = new Error("Something went wrong");

    userModel.findOne.mockReturnValue({
      lean: jest.fn().mockRejectedValue(error),
    });
    const next = jest.fn();
    const req = {
      body: { email: "test@example.com", password: "password123" },
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await login(req, res, next);

    expect(next).toHaveBeenCalledWith(expect.any(Error));
  });
});
