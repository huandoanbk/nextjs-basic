export const revalidate = 10;

export default async function BlogPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const posts = await response.json();
  const featuredPost = posts[Math.floor(Math.random() * posts.length)];
  const lastUpdated = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  return (
    <main>
      <h1>Blog</h1>
      <p>Last updated: {lastUpdated}</p>
      <p>
        Featured post now: <strong>{featuredPost.title}</strong>
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
