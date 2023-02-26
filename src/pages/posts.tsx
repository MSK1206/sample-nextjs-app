/* eslint-disable @next/next/no-img-element */
import { SeoHead } from "@/components/seohead";
import { client } from "@/libs/client";
import { BlogTypes } from "@/types/blogtypes";
import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
import styles from "@/styles/Posts.module.css";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

type PostsProps = {
  blog: BlogTypes[];
};

export default function Posts({ blog }: PostsProps) {
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
        <ul className={styles.grid}>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`} passHref>
                <img
                  className={styles.eyecatch_img}
                  src={blog.eyecatch.url}
                  width={300}
                  height={175}
                  alt={blog.title}
                />
                <h5 className={styles.blogtitle}>{blog.title}</h5>
                <p className={styles.publishedAt}>
                  投稿日：
                  {dayjs
                    .utc(blog.publishedAt)
                    .tz("Asia/Tokyo")
                    .format(
                      "YYYY" +
                        "年" +
                        "MM" +
                        "月" +
                        "DD" +
                        "日" +
                        "hh" +
                        ":" +
                        "mm"
                    )}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
