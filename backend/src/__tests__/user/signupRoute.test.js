const request = require("supertest");
const app = require("../../index");
const userModel = require("../../models/userModel");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/token");
const { hashPassword } = require("../../utils/password");
const { getUserInitialData } = require("../../utils/utils");
const { generateAndSendVerificationCode } = require("../../utils/utils");

jest.mock("../../models/userModel");
jest.mock("../../utils/token");
jest.mock("../../utils/password");
jest.mock("../../utils/utils");

describe("POST /user/signup", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should return 400 if the fullName is empty", async () => {
    const response = await request(app).post("/user/signup").send({
      fullName: "",
      email: "shady@gmail.com",
      password: "password123",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(
      "Full name name must be more than 1 characters long."
    );
  });

  it("Should return 400 if the email isn't valid", async () => {
    const response = await request(app).post("/user/signup").send({
      fullName: "shady",
      email: "shady@gmail",
      password: "password123",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Email must be valid.");
  });

  it("Should return 400 if the password is less than 8 chars", async () => {
    const response = await request(app).post("/user/signup").send({
      fullName: "shady",
      email: "shady@gmail.com",
      password: "passw",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(
      "Password must be at least 8 characters long"
    );
  });

  it("Should return 403 if the entered email is already registered", async () => {
    userModel.findOne.mockResolvedValue({
      fullName: "shady2",
      email: "shady@gmail.com",
      password: "123456789",
    });

    const response = await request(app).post("/user/signup").send({
      fullName: "shady",
      email: "shady@gmail.com",
      password: "123456789",
    });

    expect(response.statusCode).toBe(403);
    expect(response.body.message).toBe("Email is already registered!");
  });

  it("Should return 200 if user signin successfully", async () => {
    userModel.mockImplementation((data) => ({
      ...data,
      save: jest.fn().mockResolvedValue({}),
      _id: "newUserId",
      isVerified: false,
    }));

    userModel.findOne.mockResolvedValue(null);
    hashPassword.mockResolvedValue("hashedPassword");
    generateAccessToken.mockReturnValue("accessToken");
    generateRefreshToken.mockReturnValue("refreshToken");
    generateAndSendVerificationCode.mockResolvedValue();
    getUserInitialData.mockResolvedValue([[], []]);

    const response = await request(app).post("/user/signup").send({
      fullName: "shady",
      email: "shady@gmail.com",
      password: "123456789",
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers["set-cookie"]).toBeDefined();
    expect(response.body.accessToken).toBe("accessToken");
    expect(response.body.message).toBe("Registered successfully");
    expect(response.body.user).toEqual({
      fullName: "shady",
      email: "shady@gmail.com",
      _id: "newUserId",
      isVerified: false,
      workspaceInvitations: [],
      workspaces: [],
    });
    expect(getUserInitialData).toHaveBeenCalledWith(expect.any(Object));
    expect(generateAndSendVerificationCode).toHaveBeenCalledWith(
      expect.any(Object)
    );
  });
});
