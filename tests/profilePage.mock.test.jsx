import { render, screen } from "@testing-library/react";
import ProfilePage from "../app/profile/page";

describe("ProfilePage with mocked fetch", () => {
  test("renders mocked user name without calling real API", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ name: "Mock User" }),
    });

    const page = await ProfilePage();
    render(page);

    expect(screen.getByText(/welcome, mock user!/i)).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
