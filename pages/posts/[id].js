// import { useRouter } from "next/router";
import styles from "../../styles/postItem.module.css";
export default function Post({ post }) {
  // when we're gonna set fallback to true and we need to use a loading because in this example post.id and so on are undefined
  //   const router = useRouter();
  //   if (router.isFallback) {
  //     return <h1>loading...</h1>;
  //   }
  return (
    <>
      <div className={styles.postContainer}>
        <h2> POST ITEM (SSG) </h2>
        <p>
          <div className={styles.item}>
            <span className={styles.title}>title:</span>
            <span className={styles.value}> {post?.title}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>body:</span>
            <span className={styles.value}> {post?.body}</span>
          </div>
        </p>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();

  const paths = result.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,

    /*
    fallback: false
    1. the paths returned from getStaticPaths will be renedered to Html at build time by getStaticProps
    2. any paths not returned by getStaticPaths will result in a 404 page, so if you need to see the new post that have just been added you have to rebuild again.
    the false value is most suitable if you have an application with a small number of paths to pre-render
    when new pages are not added often
    */

    /*
    fallback: true,
    1. the paths returned from getStaticPaths will be renedered to Html at build time by getStaticProps
    2. the paths that have not been generated at build time will not result in 404 page, instead, Next js will serve a fallback version
    of the page on the first requset to such a path
    1. it's most suitable if your app has a very large number of static pages that depend on data
    2. if you have thoudsands or milions posts, it can take a really long time, you may statically generate a small subset of products
    that are popular and use fallbak:true for the rest.
    3. when someone reauest a page that not generated yet, the user will see the page with a loading indicator.
    4. shortly after getStaticProps finishes and the page will be rendered with the requested data. From the onwards, everyone who requests
    the same page will get the statically pre-renderd page.
    */

    fallback: "blocking",
    /*
    1. it's very similar to fallback:true, the only diffirrense is instead of showing a fallback page you will not see any new content
    in the ui, the page is generated on the server
    2. there is no flash or loading/fallback state
    when will we use it? on UX level, sometimes people prefer the page to be loaded without a loading indicator if the wait time is a few mili seconds
    this helps avoid the layout shift.
    the technicall reason, blocking was introduced is because some crawels did not support javascript, the loading page would be renderd
    and then full page would be loaded which was causing a problem thats why fallabck to blocknig is used now.
    */
  };
}

/*
if we're gonna produce only some special paths
export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: "blocking",
  };
}
*/

export async function getStaticProps({ params }) {
  console.log("Generating/ ReGenerating PostItem Page");
  /*
  IMPORTANT: every 30 seconds, if you reload(important) the page, the console.log message(getStaticProps) will appear
  actually with reloading the page, the page will be generated, not every 30 seconds.
  IMPORTANT: revalidate does not mean the page automatically re-generated every 30 seconds.
  if we reload the page before the 30 seconds, page will not be generated.
  */
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const result = await response.json();

  // we automatically go to the 404 page
  if (!result.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: result,
      revalidate: 30,
    },
  };
}

/*
Incremental Static Regeneration(ISR): there was a need to update only those pages which needed a change without having to rebuild the entire app.
with ISR. next js allows you to update the static pages after you have built your application.
*/
