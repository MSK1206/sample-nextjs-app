import { SeoHead } from "@/components/seohead";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const pageOgImg: string = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
  return (
    <>
      <SeoHead
        title={"Contact"}
        titleTemplate={"Sample Nextjs App"}
        description={"Next.js + TypeScript Sample Project."}
        ogType={"website"}
        imgUrl={`${pageOgImg}/next.jpg`}
      />
      <main className={styles.main}>
        <h1>Wellcome Contact Page.</h1>
      </main>
    </>
  );
}
