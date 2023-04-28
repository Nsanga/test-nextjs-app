import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostProps = {
  post: Post;
};

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <Link href='/blog'>Retour</Link>
      <hr />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const url = 'http://localhost:3000/api/getPosts';

  const res = await fetch(url);
  const posts = await res.json();

  const paths = posts.map((post: { id: number }) => ({ params: { id: post.id.toString() } }))

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }: { params?: { id: string } }) {

    if (!params) {
        // Handle the case where `params` is `undefined`
        return { notFound: true };
    }

  const url = `http://localhost:3000/api/getPosts/${params.id}`;

  const res = await fetch(url);
  const post = await res.json();

  return {
    props: { post },
    revalidate: 1,
  };
};
