import styles from "../../styles/useritem.module.css";
export default function User({ user }) {
  return (
    <div className={styles.userContainer}>
      <h2> USER ITEM (SSR) </h2>
      <p>
        <div className={styles.item}>
          <span className={styles.title}>name:</span>
          <span className={styles.value}> {user.name}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>city:</span>
          <span className={styles.value}> {user.address.city}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>company:</span>
          <span className={styles.value}> {user.company.name}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>phone:</span>
          <span className={styles.value}> {user.phone}</span>
        </div>
      </p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const result = await response.json();
  return {
    props: { user: result },
  };
}
