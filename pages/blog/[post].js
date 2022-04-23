import { getFilesBySlug, getFiles } from "../../lib/mdx"
import { MDXRemote } from "next-mdx-remote"

export default function Post ({source, frontmatter}) {
  console.log(source)
  return(
    <>
      <h1>Post</h1>
      <MDXRemote {...source}/>
    </>
  )
}

export async function getStaticProps({params}) {
  const {source, frontmatter} = await getFilesBySlug(params.post)

  return {
    props: {
      source,
      frontmatter
    }
  }
}

export async function getStaticPaths () {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      post: post.replace(/\.mdx/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}