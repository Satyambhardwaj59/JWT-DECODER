import { jwtDecode } from "jwt-decode";

/**
 * Decodes a JWT token and returns both header and payload
 * @param {string} token - JWT string
 * @returns {{header: object, payload: object} | null}
 */
export const decodeJWT = (token) => {
  try {
    if (!token) return null;

    // decode payload using jwt-decode
    const payload = jwtDecode(token);

    // decode header manually (first part of JWT)
    const [headerPart] = token.split(".");
    const header = JSON.parse(atob(headerPart));

    return { header, payload };
  } catch (err) {
    console.error("Invalid JWT:", err.message);
    return null;
  }
};
