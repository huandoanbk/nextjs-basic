/**
 * @jest-environment node
 */

import { GET } from "../app/api/hello/route";

describe("GET /api/hello", () => {
  test("returns hello message", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ message: "Hello, world!" });
  });
});
