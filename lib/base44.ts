const API = "https://api.base44.com/api/apps"
const APP_ID = process.env.BASE44_API_ID!
const API_KEY = process.env.BASE44_API_KEY!

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
}

export async function getPage(slug: string) {
  try {
    const res = await fetch(`${API}/${APP_ID}/entities/Pages?slug=${slug}`, {
      headers,
      next: { tags: [`page:${slug}`] },
    })
    if (!res.ok) return null
    const data = await res.json()
    return data[0] || null
  } catch { return null }
}

export async function getAllPages() {
  try {
    const res = await fetch(`${API}/${APP_ID}/entities/Pages`, {
      headers,
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

export async function getBlogPosts() {
  try {
    const res = await fetch(`${API}/${APP_ID}/entities/BlogPosts?published=true`, {
      headers,
      next: { tags: ["blog"] },
    })
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

export async function getBlogPost(slug: string) {
  try {
    const res = await fetch(`${API}/${APP_ID}/entities/BlogPosts?slug=${slug}`, {
      headers,
      next: { tags: [`blog:${slug}`] },
    })
    if (!res.ok) return null
    const data = await res.json()
    return data[0] || null
  } catch { return null }
}