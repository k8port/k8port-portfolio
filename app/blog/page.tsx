// app/blog/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { P } from 'node_modules/framer-motion/dist/types.d-Cjd591yU';

interface PostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
}

function getPosts(): PostMeta[] {
    const blogDir = path.join(process.cwd(), 'content/blog')
    const files  = fs.readdirSync(blogDir)

    return files.map((file) => {
        const slug = file.replace(/\.mdx?$/, '')
        const raw = fs.readFileSync(path.join(blogDir, file), "utf-8")
        const { data } = matter(raw)

        return {
            slug,
            title: data.title ?? slug,
            date: data.date ?? "",
            excerpt: data.excerpt ?? "",
            tags: data.tags ?? [],
        }
    })
}

export default function BlogIndex() {
    const posts = getPosts().sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6">Kiki with Kiki</h1>
            <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-xl font-semibold text-darkquaternaryvar hover:underline"
                        >
                            {post.title}
                        </Link>
                        <p className="text-sm text-redgrays-arsenicgray">{post.date}</p>
                        {post.excerpt && (
                            <p className="text-redblacks-blackstrapmolasses mt-1">{post.excerpt}</p>
                        )}
                        {post.tags && post.tags.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs bg-bluegrays-brightgray px-2 py-1 rounded-full">
                                            {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </main>
    )
}