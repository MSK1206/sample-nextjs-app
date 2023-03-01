import { SeoHead } from "@/components/seohead";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const pageOgImg: string = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
  return (
    <>
      <SeoHead
        title={"Home"}
        titleTemplate={"Sample Nextjs App"}
        description={"Next.js + TypeScript SEO編"}
        ogType={"website"}
        imgUrl={`${pageOgImg}/next.jpg`}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.portfollio}>
            <h1>Next.js + TypeScript Sample Project.</h1>
          </div>
        </div>
      </main>
    </>
  );
}
