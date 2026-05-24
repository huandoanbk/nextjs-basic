import { users } from "./data";

export async function GET() {
  return Response.json({ users });
}

export async function POST(request) {
  const body = await request.json();
  const { name, email } = body;

  if (
    !name ||
    !email ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    !name.trim() ||
    !email.trim()
  ) {
    return Response.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name: name.trim(),
    email: email.trim(),
  };

  users.push(newUser);

  return Response.json({ user: newUser }, { status: 201 });
}
