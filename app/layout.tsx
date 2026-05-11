import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Week 4 React Project",
  description: "React component architecture project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="min-h-screen p-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
