import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wetracking.co"),
  title: { default: "WeTracking", template: "%s | WeTracking" },
  description: "Plataforma de tracking de activos con RFID y tecnología IoT.",
  openGraph: {
    siteName: "WeTracking",
    locale: "es_CO",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={nunito.variable}>
      <body style={{ fontFamily: "var(--font-nunito), sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
