import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";


const root = process.cwd();

export function getFiles () {
  return fs.readdirSync(path.join(root, 'posts'))
}

export async function getFilesBySlug (slug) {
  const mdxSource = fs.readFileSync(path.join( root, 'posts', `${slug}.mdx`), "utf-8");
  
  const {posts, content} = await matter(mdxSource)
  const source = await serialize(content)

  return {
    source,
    frontmatter: {
      slug,
      ...posts,
    }
  }
}

export function getAllFilesMetadata() {
  const files = getFiles()

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(path.join(root, "posts", postSlug))
    const {data} = matter(mdxSource) 

    return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPosts]
  }, [])
}
 