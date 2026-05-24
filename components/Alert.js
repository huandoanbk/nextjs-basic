export default function Alert({ message = "This is a Tailwind alert component." }) {
  return (
    <div
      className="mt-4 rounded-md border border-amber-300 bg-amber-100 px-4 py-3 text-amber-900 shadow-sm"
      role="alert"
    >
      <p className="font-semibold">Alert</p>
      <p className="text-sm">{message}</p>
    </div>
  );
}
