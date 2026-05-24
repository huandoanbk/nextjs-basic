export async function GET(_request, { params }) {
  const { id } = await params;

  const product = {
    id,
    name: `Product ${id}`,
    price: 49.99,
    description: `This is a mock description for product ${id}.`,
  };

  return Response.json(product);
}
