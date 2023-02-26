import { SeoHead } from "@/components/seohead";
import { useEffect } from "react";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const pageOgImg: string = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
  const FormrunID: string = `${process.env.NEXT_PUBLIC_FORMRUN_FORM_ID}`;
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0] as HTMLElement;
    const scriptUrl = document.createElement("script");
    scriptUrl.src = "https://sdk.form.run/js/v2/embed.js";
    head.appendChild(scriptUrl);
    return () => {
      head.removeChild(scriptUrl);
    };
  }, []);
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
        <div className={styles.formrunWidth}>
          <div
            className="formrun-embed"
            data-formrun-form={FormrunID}
            data-formrun-redirect="true"
          />
        </div>
      </main>
    </>
  );
}
