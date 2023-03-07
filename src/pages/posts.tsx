/* eslint-disable @next/next/no-img-element */
import { SeoHead } from "@/components/seohead";
import { client } from "@/libs/client";
import { BlogTypes } from "@/types/blogtypes";
import { CategoriesTypes } from "@/types/categoriestypes";
import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
import styles from "@/styles/Posts.module.css";
import { Pagination } from "@/components/pagination";

type PostsProps = {
  blog: BlogTypes[];
  categories: CategoriesTypes[];
  totalCount: number;
};

const PER_PAGE = 6;

export default function Posts({ blog, categories, totalCount }: PostsProps) {
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
        <div className={styles.categoriesLinkAlia}>
          <div>
            タグ一覧
            <ul className={styles.categoriesTag}>
              {categories.map((categories) => (
                <li key={categories.id}>
                  <Link href={`/category/${categories.id}`}>
                    {categories.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.postsMap}>
          <ul className={styles.grid}>
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <img
                    className={styles.eyecatch_img}
                    src={blog.eyecatch.url}
                    width={300}
                    height={175}
                    alt={blog.title}
                  />
                  <div className={styles.postsAttr}>
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
                    <h5 className={styles.blogtitle}>{blog.title}</h5>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination totalCount={totalCount} />
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { offset: 0, limit: 6 },
  });
  const categoryData = await client.get({ endpoint: "categories" });
  return {
    props: {
      blog: data.contents,
      categories: categoryData.contents,
      totalCount: data.totalCount,
    },
  };
};
