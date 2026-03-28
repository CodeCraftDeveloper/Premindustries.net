import BlogDetailPage from "@/components/blogs/BlogDetailPage";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogs/blogData";

export default function BlogPostPage({ post }) {
  if (!post) {
    return null;
  }

  return <BlogDetailPage post={post} />;
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}
