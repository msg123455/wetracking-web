"use client"
import dynamic from "next/dynamic"

const Home = dynamic(() => import("@/app/_pages/Home"), { ssr: false })

export default function Page() {
  return <Home />
}