import styles from "../../styles/posts.module.css";
import Link from "next/link";
export default function Posts({ posts }) {
  return (
    <>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h5>
                <span>Title</span> {post.title}
              </h5>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();
  return {
    props: {
      posts: result,
    },
  };
}
