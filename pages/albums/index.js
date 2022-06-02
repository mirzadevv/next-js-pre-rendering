import { useEffect, useState } from "react";
import styles from "../../styles/albums.module.css";
export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchAlbumsData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await response.json();
      setAlbums(data);
      setIsLoading(false);
    }
    fetchAlbumsData();
  }, []);

  return (
    <div className={styles.albumContainer}>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        albums.map((albume) => <p key={albume.id}>{albume.title}</p>)
      )}
    </div>
  );
}
