import { SeoHead } from "@/components/seohead";
import styles from "@/styles/Blog.module.css";

export default function Blog() {
  const pageOgImg: string = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
  return (
    <>
      <SeoHead
        title={"Blog"}
        titleTemplate={"Sample Nextjs App"}
        description={"Next.js + TypeScript Sample Project."}
        ogType={"website"}
        imgUrl={`${pageOgImg}/next.jpg`}
      />
      <main className={styles.main}>
        <h1>Wellcome Blog Page.</h1>
      </main>
    </>
  );
}
