import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "La Ferme d'Orthe",
  description: "Restaurant traditionnel à Ortheville",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-ivory text-taupe`}
      >
        <div className="flex min-h-screen flex-col">
          {/* Header global */}
          <Header />

          {/* Contenu des pages */}
          <main className="flex-1">{children}</main>

          {/* Footer global */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
