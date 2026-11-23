
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://amamchukwu-portfolio.vercel.app"),

  title: {
    default: "Amamchukwu Emmanuel | Full-Stack Developer",
    template: "%s | Amamchukwu Emmanuel",
  },

  description:
    "Amamchukwu Emmanuel is a Full-Stack Developer building modern web applications with JavaScript, React, Next.js, Node.js, Express.js, and database technologies.",

  keywords: [
    "Amamchukwu Emmanuel",
    "Full-Stack Developer",
    "Full-Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Express.js",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Web Developer in Nigeria",
  ],

  authors: [{ name: "Amamchukwu Emmanuel" }],

  openGraph: {
    title: "Amamchukwu Emmanuel | Full-Stack Developer",
    description:
      "Explore my portfolio, technical skills, and web applications built with modern frontend and backend technologies.",
    url: "https://amamchukwu-portfolio.vercel.app",
    siteName: "Amamchukwu Emmanuel Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amamchukwu Emmanuel | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern, responsive, and database-powered web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
