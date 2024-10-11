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

