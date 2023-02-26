import { NextPage } from "next";
import { SeoHead } from "@/components/seohead";
import { client } from "@/libs/client";
import { BlogTypes } from "@/types/blogtypes";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
import styles from "../../styles/BlogId.module.css";

type BlogIdProps = {
  blog: BlogTypes[];
};

const BlogId: NextPage<BlogIdProps> = ({ blog }: any) => {
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
            <span>著者：{blog.author.name}</span>
            <p>タグ:{blog.categories.name}</p>
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
  return {
    props: {
      blog: res,
    },
  };
};
