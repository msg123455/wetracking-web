import { revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-webhook-secret")

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const body = await req.json()
  const type: string = body.type
  const slug: string = body.slug

  if (type === "page" && slug) revalidateTag("page-" + slug, { expire: 0 })
  if (type === "blog" && slug) revalidateTag("blog-" + slug, { expire: 0 })
  if (type === "blog") revalidateTag("blog", { expire: 0 })

  return NextResponse.json({ revalidated: true, timestamp: Date.now() })
}