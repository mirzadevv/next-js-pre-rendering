import Link from "next/link";
import styles from "../styles/navBar.module.css";
export default function NavBar() {
  return (
    <>
      <div className={styles.navContainer}>
        <ul>
          <Link href="/">
            <a>
              <li>Todos</li>
            </a>
          </Link>
          <Link href="/albums">
            <a>
              <li>Albums (CSR)</li>
            </a>
          </Link>

          <Link href="/users">
            <a>
              <li>Users (SSR)</li>
            </a>
          </Link>

          <Link href="/posts">
            <a>
              <li>Posts (SSG)</li>
            </a>
          </Link>
        </ul>
      </div>
    </>
  );
}
