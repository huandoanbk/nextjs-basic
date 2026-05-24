import { users } from "../data";

export async function GET(_request, { params }) {
  const { id } = await params;
  const userId = Number(id);

  if (!Number.isInteger(userId) || userId < 1) {
    return Response.json({ error: "Invalid user id." }, { status: 400 });
  }

  const user = users.find((item) => item.id === userId);

  if (!user) {
    return Response.json({ error: "User not found." }, { status: 404 });
  }

  return Response.json({ user });
}
