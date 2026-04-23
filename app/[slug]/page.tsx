import { cache } from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Section = { title: string; content: string }
type FaqItem = { question: string; answer: string }
type Cta = { label: string; href: string }

type PageEntity = {
  _id: string
  slug: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  sections?: Section[]
  faq?: FaqItem[]
  cta?: Cta
}

const getPage = cache(async (slug: string): Promise<PageEntity | null> => {
  const appId = process.env.BASE44_APP_ID
  const apiKey = process.env.BASE44_API_KEY

  const res = await fetch(
    `https://api.base44.com/api/apps/${appId}/entities/Pages?slug=${encodeURIComponent(slug)}`,
    {
      headers: { "x-api-key": apiKey ?? "" },
      cache: "force-cache",
      next: { tags: [`page:${slug}`] },
    }
  )

  if (!res.ok) return null

  const data: unknown = await res.json()
  const pages: PageEntity[] = Array.isArray(data)
    ? (data as PageEntity[])
    : ((data as { data?: PageEntity[] }).data ?? [])

  return pages.find((p) => p.slug === slug) ?? null
})

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://wetracking.co/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://wetracking.co/${slug}`,
      type: "website",
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) notFound()

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#0b194f" }}>
      {/* h1 + intro */}
      <section
        style={{
          background: "#0b194f",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#00ffd7",
            fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {page.h1}
        </h1>
        {page.intro && (
          <p
            style={{
              color: "#e0e7ff",
              maxWidth: "680px",
              margin: "1.5rem auto 0",
              fontSize: "1.125rem",
              lineHeight: 1.75,
            }}
          >
            {page.intro}
          </p>
        )}
      </section>

      {/* Secciones H2 */}
      {page.sections && page.sections.length > 0 && (
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
          }}
        >
          {page.sections.map((section, i) => (
            <section key={i} style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  color: "#007aed",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  borderLeft: "4px solid #00ffd7",
                  paddingLeft: "0.875rem",
                  margin: "0 0 0.75rem",
                }}
              >
                {section.title}
              </h2>
              <p style={{ lineHeight: 1.8, color: "#1e293b", margin: 0 }}>
                {section.content}
              </p>
            </section>
          ))}
        </div>
      )}

      {/* FAQ */}
      {page.faq && page.faq.length > 0 && (
        <section style={{ background: "#f0f4ff", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2
              style={{
                color: "#0b194f",
                fontSize: "1.75rem",
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              Preguntas frecuentes
            </h2>
            <dl style={{ margin: 0 }}>
              {page.faq.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid #c7d2fe",
                    padding: "1.25rem 0",
                  }}
                >
                  <dt
                    style={{
                      fontWeight: 700,
                      color: "#0b194f",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.question}
                  </dt>
                  <dd style={{ margin: 0, color: "#374151", lineHeight: 1.75 }}>
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* CTA */}
      {page.cta && (
        <section
          style={{
            background: "linear-gradient(135deg, #0b194f 0%, #007aed 100%)",
            padding: "5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <a
            href={page.cta.href}
            style={{
              display: "inline-block",
              background: "#00ffd7",
              color: "#0b194f",
              fontWeight: 800,
              padding: "1rem 2.5rem",
              borderRadius: "0.625rem",
              fontSize: "1.125rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            {page.cta.label}
          </a>
        </section>
      )}
    </main>
  )
}
