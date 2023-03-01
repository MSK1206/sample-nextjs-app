import Image from "next/image";
import styles from "@/components/styles/Gridlist.module.css";

export const GridList = () => {
  return (
    <ul className={styles.grid}>
      <li>
        <a className={styles.gridcard}>
          <Image src={"/next.jpg"} width={300} height={175} alt={"Dummy1"} />
          <h5 className={styles.gridTitle}>Dummy1</h5>
          <p className={styles.gridDescription}>Dummy Textarea.</p>
        </a>
      </li>
      <li>
        <a>
          <Image src={"/next.jpg"} width={300} height={175} alt={"Dummy2"} />
          <h5 className={styles.gridTitle}>Dummy2</h5>
          <p className={styles.gridDescription}>Dummy Textarea.</p>
        </a>
      </li>
      <li>
        <Image src={"/next.jpg"} width={300} height={175} alt={"Dummy3"} />
        <a>
          <h5 className={styles.gridTitle}>Dummy3</h5>
          <p className={styles.gridDescription}>Dummy Textarea.</p>
        </a>
      </li>
      <li>
        <Image src={"/next.jpg"} width={300} height={175} alt={"Dummy4"} />
        <a>
          <h5 className={styles.gridTitle}>Dummy4</h5>
          <p className={styles.gridDescription}>Dummy Textarea.</p>
        </a>
      </li>
    </ul>
  );
};
