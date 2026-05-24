export async function POST(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return Response.json(
      { error: "Unauthorized. Missing authorization header." },
      { status: 401 }
    );
  }

  const { name, message } = await request.json();

  if (
    !name ||
    !message ||
    typeof name !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim()
  ) {
    return Response.json(
      { error: "Both name and message are required." },
      { status: 400 }
    );
  }

  return Response.json(
    {
      success: true,
      message: "Contact message received.",
      data: {
        name: name.trim(),
        message: message.trim(),
      },
    },
    { status: 201 }
  );
}
