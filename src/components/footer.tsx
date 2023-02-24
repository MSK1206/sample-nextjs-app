import styles from "@/components/styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://github.com/MSK1206/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2023 &nbsp;MSK1206 All Right Reserved.
        </a>
      </footer>
    </>
  );
}
