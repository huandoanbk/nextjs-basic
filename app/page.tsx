"use client";

import Image from "next/image";
import Navigation from "../components/Navigation";
import AppLayout from "../components/AppLayout";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Card from "../components/Card";
import ProfileCard from "../components/ProfileCard";
import { useTheme } from "../components/ThemeContext";
import styles from "./home/home.module.css";

export default function HomePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <AppLayout>
      <main
        style={{
          backgroundColor: isDark ? "#0f172a" : "#f8fafc",
          color: isDark ? "#e2e8f0" : "#0f172a",
          padding: "1rem",
          borderRadius: "0.75rem",
        }}
      >
        <Navigation />
        <h1 className={styles.heading}>Welcome to My Next.js Learning Journey 🚀</h1>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />
        <p className={styles.paragraph}>
          This app is a simple project built with Next.js App Router.
          It demonstrates routing, navigation, and how to build modern
          React-based web applications step by step.
        </p>
        <Button>Read More</Button>
        <Alert message="Tailwind is active. This alert is styled only with utility classes." />
        <Card backgroundColor="#dbeafe" title="Blue Card">
          This card uses a light blue background from props.
        </Card>
        <Card backgroundColor="#dcfce7" title="Green Card">
          This card uses a light green background from props.
        </Card>
        <Card backgroundColor="#fef3c7" title="Yellow Card">
          This card uses a light yellow background from props.
        </Card>
        <ProfileCard
          name="Alex Johnson"
          role="Frontend Developer"
          bio="Focused on building accessible UI components and scalable design systems."
          accentColor="#2563eb"
          availability="Open to collaboration"
        />
        <ProfileCard
          name="Maya Chen"
          role="Product Designer"
          bio="Designs thoughtful user experiences with attention to typography and motion."
          accentColor="#16a34a"
          availability="In a design sprint"
        />
      </main>
    </AppLayout>
  );
}
