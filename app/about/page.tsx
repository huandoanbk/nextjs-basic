import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <h1>About this course</h1>
      <p>
        This course introduces modern web development using Next.js and React.
      </p>

      <Link href="/">Back to Home</Link>
    </main>
  );
}