import "./globals.css";
import Navbar from "./components/Navbar";

// To zostawiamy - to jest ważne dla Google i nazwy karty w przeglądarce
export const metadata = {
  title: "THE NITE GROUP",
  description: "Ekskluzywne wydarzenia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-black text-white antialiased">
        {/* Navbar będzie teraz nad każdym tekstem ze strony */}
        <Navbar />
        
        {/* Tutaj "wskakuje" treść z page.tsx */}
        {children}
      </body>
    </html>
  );
}