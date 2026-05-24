export default async function ProfilePage() {
  console.log("Rendering profile on server");

  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  const user = await response.json();

  return (
    <main>
      <h1>Profile</h1>
      <p>Welcome, {user.name}!</p>
    </main>
  );
}
