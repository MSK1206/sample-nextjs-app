import { SeoHead } from "@/components/seohead";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <SeoHead
        title={"TOP"}
        titleTemplate={"Sample Nextjs App"}
        description={"Next.js + TypeScript SEO編"}
        ogType={"website"}
        imgUrl={"/next.jpg"}
      />
      <main className={styles.main}>
        <h1>Next.js + TypeScript Sample Project.</h1>
      </main>
    </>
  );
}
