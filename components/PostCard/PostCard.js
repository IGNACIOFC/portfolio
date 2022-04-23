import Link from "next/link"

export default function PostCard ({post}) {
  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <a>
          <div>
            <h1>{post.title}</h1>
          </div>
        </a>
      </Link>
      {post.title}
    </div>
  )
}