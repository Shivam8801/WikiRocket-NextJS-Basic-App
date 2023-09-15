import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Wikirocket App",
  description: "Wikirocket App built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
