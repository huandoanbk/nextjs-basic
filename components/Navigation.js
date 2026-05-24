import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          padding: 0,
          flexWrap: "wrap",
        }}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/blog/post">Blog Post</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/hybrid">Hybrid</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li style={{ marginLeft: "auto" }}>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
