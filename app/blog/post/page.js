import Navigation from "../../components/Navigation";

export default function BlogPostPage() {
  return (
    <main>
      <Navigation />
      <h1>My First Nested Blog Post</h1>
      <p>
        <strong>Published:</strong> May 24, 2026
      </p>
      <p>
        Welcome to this demo page. This route is built with the Next.js App
        Router at <code>/blog/post</code>.
      </p>
      <h2>What This Page Shows</h2>
      <ul>
        <li>A nested route inside the <code>app/</code> directory</li>
        <li>Basic semantic HTML structure for readable content</li>
        <li>A clean example you can extend into a real blog post</li>
      </ul>
    </main>
  );
}
