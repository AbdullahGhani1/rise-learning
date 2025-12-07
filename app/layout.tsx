import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rise School Pakistan | Quality Education for a Brighter Future",
  description:
    "Rise School Pakistan provides high-quality education with modern teaching methods, experienced faculty, and a safe, nurturing environment. Admissions open for Playgroup to Matric. Empowering students with knowledge, confidence, and character.",
  keywords: [
    "Rise School Pakistan",
    "best school in Pakistan",
    "top schools Lahore",
    "playgroup to matric school",
    "Pakistani school education",
    "modern education Pakistan",
    "admission open",
    "quality education Pakistan",
    "private school Pakistan",
  ],
  robots: "index, follow",
  authors: [{ name: "Rise School Pakistan" }],
  openGraph: {
    title: "Rise School Pakistan | Quality Education for a Brighter Future",
    description:
      "Providing modern, student-centered education with dedicated faculty and a strong academic foundation. Admissions now open.",
    url: "https://riseschool.edu.pk/",
    siteName: "Rise School Pakistan",
    locale: "en_PK",
    type: "website",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`,
          poppins.className
        )}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
