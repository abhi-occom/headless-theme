// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/style.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Occom — Home",
  description: "Occom homepage converted to Next.js + TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
 