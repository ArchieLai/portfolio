import Link from 'next/link';
import styles from './page.module.css';
 
export default function NotFound() {
  return (
    <div className={styles.contain}>
      <h2>Not Found</h2>
      <span>Could not find requested resource</span>
      <Link href="/" className={styles.btn}>
        <span>Home</span>
      </Link>
    </div>
  )
}