import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nobel Smith | Full-Stack Developer",
  description: "Portfolio website of Nobel Smith, a full-stack developer specializing in React, Next.js, Python, and Golang. Explore projects, skills, and experience in web development and software engineering.",
  keywords: ["Nobel Smith", "Full-Stack Developer", "React", "Next.js", "Python", "Golang", "Web Development", "Software Engineering", "Portfolio"],
  authors: [{ name: "Nobel Smith" }],
  openGraph: {
    title: "Nobel Smith | Full-Stack Developer",
    description: "Portfolio website of Nobel Smith, a full-stack developer specializing in React, Next.js, Python, and Golang. Explore projects, skills, and experience in web development and software engineering.",
    type: "website",
    url: "https://nobelsmith.com",
  },
  twitter: {
    card: "summary_large_image",  
    title: "Nobel Smith | Full-Stack Developer",
    description: "Portfolio website of Nobel Smith, a full-stack developer specializing in React, Next.js, Python, and Golang.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
