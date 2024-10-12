const request = require("supertest");
const app = require("../../index");
const userModel = require("../../models/userModel");
const { verifyToken } = require("../../utils/token");
const { getUserInitialData } = require("../../utils/utils");
const { getUser } = require("../../controllers/userController");

jest.mock("../../models/userModel");
jest.mock("../../utils/token");
jest.mock("../../utils/utils");

describe("GET /user", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 401 if the token is invalid", async () => {
    verifyToken.mockImplementation((token, secret, callback) => {
      callback(new Error("Invalid token"), null);
    });

    const response = await request(app)
      .get("/user")
      .set("Authorization", "Bearer mockValidToken");

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Unauthorized, Invalid token");
  });

  it("should return 401 if There is no token provided", async () => {
    const response = await request(app).get("/user");

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Unauthorized, No token provided");
  });

  it("should return 404 if the user is not found", async () => {
    // Pass the authrization check.
    verifyToken.mockImplementation((token, secret, callback) => {
      callback(null, { _id: "mockUserId" });
    });

    userModel.findById.mockResolvedValue(null);

    const response = await request(app)
      .get("/user")
      .set("Authorization", "Bearer mockValidToken");

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("User not found");
  });

  it("should return 200 if the user is found", async () => {
    // Pass the authrization check.
    verifyToken.mockImplementation((token, secret, callback) => {
      callback(null, { _id: "mockUserId" });
    });

    userModel.findById.mockResolvedValue({
      fullName: "mockFullName",
      email: "mockEmail",
      _id: "mockUserId",
      isVerified: true,
    });

    getUserInitialData.mockResolvedValue([[], []]);

    const response = await request(app)
      .get("/user")
      .set("Authorization", "Bearer mockValidToken");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      fullName: "mockFullName",
      email: "mockEmail",
      _id: "mockUserId",
      isVerified: true,
      workspaceInvitations: [],
      workspaces: [],
    });
  });

  it("should handle errors and call next with an error", async () => {
    // Pass the authorization check.
    verifyToken.mockImplementation((token, secret, callback) => {
      callback(null, { _id: "mockUserId" });
    });

    // Simulate an error in `getUserInitialData`.
    const mockError = new Error("Database error");
    getUserInitialData.mockRejectedValue(mockError);

    const response = await request(app)
      .get("/user")
      .set("Authorization", "Bearer mockValidToken");

    expect(response.statusCode).toBe(500);
    expect(response.body.message).toBe("Database error");
  });
});
