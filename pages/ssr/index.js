import styles from "../../styles/ssr.module.css";
export default function Ssr({ users }) {
  return (
    <>
      <div className={styles.ssrContainer}>
        {users.map((user) => (
          <>
            <h5>
              <span className={styles.name}> Name: </span> {user.name}
            </h5>
            <h5>
              <span className={styles.email}>Email:</span> {user.email}
            </h5>
            <hr />
          </>
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
