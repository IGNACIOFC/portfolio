import PostCard from "../../components/PostCard/PostCard"
import { getAllFilesMetadata } from "../../lib/mdx"

export default function Blog ({posts}) {
  return(
    <>
      {posts && posts.map((post) => (
        <PostCard post={post}/>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  console.log(posts)

  return{
    props: {posts}
  }
}