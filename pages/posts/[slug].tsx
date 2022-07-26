
import Custom404 from "../404";
import {getClient} from '../../lib/sanity.server';

const Post = ({post}) => {
  if(post === null){
    return (
    <Custom404/>
  )
  }
  return (
    <article>
      <h1>{post?.slug?.current}</h1>
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await getClient().fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
  return {
    props: {
      post
    }
  }
}

export default Post