/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { SeoHead } from "@/components/seohead";
import { client } from "@/libs/client";
import { BlogTypes } from "@/types/blogtypes";
import { AuthorTypes } from "@/types/authortypes";
import { CategoriesTypes } from "@/types/categoriestypes";
import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
import styles from "../../styles/BlogId.module.css";

type BlogIdProps = {
  blog: BlogTypes[];
  author: AuthorTypes[];
};

const BlogId: NextPage<BlogIdProps> = ({ blog, author, category }: any) => {
  return (
    <>
      <SeoHead
        title={blog.title}
        titleTemplate={"Sample Nextjs App"}
        description={`${blog.description}`}
        ogType={"article"}
        imgUrl={blog.eyecatch.url}
      />
      <div className={styles.container}>
        <main className={styles.main}>
          <div>
            <h1 className={styles.title}>{blog.title}</h1>
            <div className={styles.authorDataAlia}>
              <ul>
                {author.map((author: any) => (
                  <li key={author.id}>
                    <img
                      src={author.authorimg && `${author.authorimg.url}`}
                      width={30}
                      height={30}
                      alt={"test"}
                    />
                    <h1>{author.name}</h1>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.categoriesDataAlia}>
              <ul>
                {blog.category.map((category: any) => (
                  <li key={category.id}>
                    <Link href={`/categories/${category.id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.publishedAt}>
              投稿日：
              {dayjs
                .utc(blog.publishedAt)
                .tz("Asia/Tokyo")
                .format(
                  "YYYY" + "年" + "MM" + "月" + "DD" + "日" + "hh" + ":" + "mm"
                )}
            </p>
            <div
              className={styles.contentBody}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogId;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const blog: BlogTypes[] = data.contents;
  const paths = blog.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res: BlogTypes = await client.get({ endpoint: "blog", contentId: id });
  const authorData = await client.get({ endpoint: "author" });
  const categoryData = await client.get({ endpoint: "categories" });
  return {
    props: {
      blog: res,
      author: authorData.contents,
      category: categoryData.contents,
    },
  };
};
