import styles from "../../styles/ssr.module.css";
import Link from "next/dist/client/link";
export default function Ssr({ users }) {
  return (
    <>
      <div className={styles.ssrContainer}>
        {users.map((user) => (
          <div>
            <Link href={`users/${user.id}`}>
              <h5>
                <span> Name: </span> {user.name}
              </h5>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return {
    props: {
      users: result,
    },
  };
}
