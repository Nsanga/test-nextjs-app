import Link from "next/link";
import { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
};

const useFetchPosts = (url: string) => {
    // const [posts, setPosts] = useState<Post[]>([]);

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then((data: Post[]) => setPosts(data));
    // }, [url]);

    // return posts;
};

const Blog = ({ posts }: { posts: Post[] }) => {
    //const url = "http://localhost:3000/api/getPosts";
    // const posts = useFetchPosts(url);

    return (
        <>
            <h1 className='blue'>
                Blog
            </h1><br />
            {posts?.map((post) => (

                <Link href={`/blog/${post.id}`} key={post.id}>
                    <h2 >{post.title}</h2><br />
                </Link>

            ))}
            <hr />
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </>
    )
}

export default Blog

// export async function getStaticProps() {
//     const url = "http://localhost:3000/api/getPosts";

//     const res = await fetch(url);
//     const posts = await res.json();

//     return {
//         props: { posts }
//     }

// }
export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/getPosts");
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  }