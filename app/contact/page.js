"use client";

import Navigation from "../components/Navigation";
import AppLayout from "../../components/AppLayout";
import ContactForm from "../../components/ContactForm";
import { useTheme } from "../../components/ThemeContext";

export default function ContactPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <AppLayout>
      <main
        style={{
          backgroundColor: isDark ? "#111827" : "#ffffff",
          color: isDark ? "#e5e7eb" : "#0f172a",
          padding: "1rem",
          borderRadius: "0.75rem",
        }}
      >
        <Navigation />
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="mt-2">Send us your name and message using the form below.</p>
        <ContactForm />
      </main>
    </AppLayout>
  );
}
