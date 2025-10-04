// app/blog/[slug]/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {MDXRemote} from 'next-mdx-remote/rsc'

interface BlogPostPageProps {
    params: { slug: string }
}

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export async function generateStaticFilePaths() {
    const files = fs.readdirSync(BLOG_DIR)
    return files.map((file) => ({
        slug: file.replace(/\.mdx?$/, "")
    }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`)

    if (!fs.existsSync(filePath)) {
        return <div className="p-6">Post not found.</div>
    }

    const raw = fs.readFileSync(filePath, 'utf8')
    const { content, data } = matter(raw)

    return (
        <article className="prose lg:prose-xl max-w-3xl mx-auto p-6">
            <h1 className="mb-2">{data.title}</h1>
            <p className="text-sm text-redgrays-arsenicgray mb-8">{data.date}</p>
            <MDXRemote source={content} />
        </article>
    )
}