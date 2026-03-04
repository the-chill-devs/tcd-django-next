import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tcd-django-next template",
  description: "Created by the TCD team to make it easier to start a new project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
