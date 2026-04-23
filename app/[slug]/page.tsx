import { notFound } from "next/navigation"
import dynamic from "next/dynamic"
import type { Metadata } from "next"
import { getPage } from "@/lib/base44"

const pageMap: Record<string, React.ComponentType> = {
  academia:            dynamic(() => import("@/app/_pages/Academia")),
  activos:             dynamic(() => import("@/app/_pages/Activos")),
  bodegas:             dynamic(() => import("@/app/_pages/Bodegas")),
  clubes:              dynamic(() => import("@/app/_pages/Clubes")),
  "industria-petrolera": dynamic(() => import("@/app/_pages/IndustriaPetrolera")),
  inventarios:         dynamic(() => import("@/app/_pages/Inventarios")),
  locativos:           dynamic(() => import("@/app/_pages/Locativos")),
  manufactura:         dynamic(() => import("@/app/_pages/Manufactura")),
  nosotros:            dynamic(() => import("@/app/_pages/Nosotros")),
  "politica-datos":    dynamic(() => import("@/app/_pages/PoliticaDatos")),
  "tecnologia-rfid":   dynamic(() => import("@/app/_pages/TecnologiaRFID")),
  "trazabilidad-rfid": dynamic(() => import("@/app/_pages/TrazabilidadRFID")),
}

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return Object.keys(pageMap).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) return {}
  return {
    title: page.metaTitle ?? page.title ?? undefined,
    description: page.metaDescription ?? page.meta_description ?? undefined,
    alternates: { canonical: `https://wetracking.co/${slug}` },
    openGraph: {
      title: page.metaTitle ?? page.title ?? undefined,
      description: page.metaDescription ?? page.meta_description ?? undefined,
      url: `https://wetracking.co/${slug}`,
      type: "website",
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const Component = pageMap[slug]
  if (!Component) notFound()
  return <Component />
}
