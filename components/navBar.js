import Link from "next/link";
import styles from "../styles/navBar.module.css";
export default function NavBar() {
  return (
    <>
      <div className={styles.navContainer}>
        <ul>
          <Link href="/">
            <a>
              <li>Index</li>
            </a>
          </Link>
          <Link href="/todos">
            <a>
              <li>Todos (CSR)</li>
            </a>
          </Link>

          <Link href="/users">
            <a>
              <li>Users (SSR)</li>
            </a>
          </Link>

          <Link href="/ssg">
            <a>
              <li>Users (SSG)</li>
            </a>
          </Link>
        </ul>
      </div>
    </>
  );
}
