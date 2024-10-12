const request = require("supertest");
const app = require("../../index");
const { verifyToken } = require("../../utils/token");

jest.mock("../../utils/token");

describe("POST /user/logout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should clear the refreshToken cookie and return success message", async () => {
    // Pass the authrization check.
    verifyToken.mockImplementation((token, secret, callback) => {
      callback(null, { _id: "mockUserId" });
    });

    const response = await request(app)
      .post("/user/logout")
      .set("Authorization", "Bearer mockValidToken");

    expect(response.headers["set-cookie"]).toBeDefined();
    expect(response.headers["set-cookie"][0]).toContain("refreshToken=;");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Logged out successfully");
  });
});
