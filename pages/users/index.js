import styles from "../../styles/users.module.css";
import Link from "next/dist/client/link";
export default function Users({ users }) {
  return (
    <>
      <div className={styles.usersContainer}>
        {users.map((user) => (
          <div key={user.id}>
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
