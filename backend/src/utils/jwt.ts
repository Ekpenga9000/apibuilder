import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;

export const signAccessToken = (payload: object) => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

export const signRefreshToken = (payload: object) => {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "30d" });
};

export const verifyAccessToken = (token: string) => {
  if (!token) {
    throw new Error("No token provided");
  }

  const authToken = token.split(" ")[1];
  jwt.verify(authToken, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      throw new Error("Invalid token");
    }
  });
  return true;
};
