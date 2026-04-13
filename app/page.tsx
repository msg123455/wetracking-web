import dynamic from "next/dynamic"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WeTracking — Tracking de activos con RFID",
  description: "Plataforma inteligente de tracking de activos con tecnología RFID e IoT para retail, manufactura y logística.",
}

const Home = dynamic(() => import("@/app/_pages/Home"), { ssr: false })

export default function Page() {
  return <Home />
}