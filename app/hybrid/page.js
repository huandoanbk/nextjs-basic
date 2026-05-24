export const revalidate = 30;

export default async function HybridPage() {
  const [postsResponse, userResponse] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
      next: { revalidate: 30 },
    }),
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      cache: "no-store",
    }),
  ]);

  if (!postsResponse.ok) {
    throw new Error("Failed to fetch latest posts");
  }

  if (!userResponse.ok) {
    throw new Error("Failed to fetch user stats");
  }

  const posts = await postsResponse.json();
  const user = await userResponse.json();

  return (
    <main>
      <h1>Hybrid Rendering Demo</h1>

      <section>
        <h2>Latest Posts (Cached / ISR)</h2>
        <p>This section is cached and revalidated every 30 seconds.</p>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>User Dashboard (SSR / No Store)</h2>
        <p>This section is fetched on every request.</p>
        <p>
          Welcome back, <strong>{user.name}</strong>.
        </p>
        <p>
          Contact: {user.email} | City: {user.address?.city}
        </p>
      </section>
    </main>
  );
}
