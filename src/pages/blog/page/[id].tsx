/* eslint-disable @next/next/no-img-element */
import { client } from '../../../libs/client'
import { BlogTypes } from '@/types/blogtypes'
import { CategoriesTypes } from '@/types/categoriestypes'
import { SeoHead } from '@/components/seohead'
import { Pagination } from '@/components/pagination'
import Link from 'next/link'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)
import styles from '../../../styles/BlogPageId.module.scss'

type BlogPageIdProps = {
  blog: BlogTypes[]
  categories: CategoriesTypes[]
  totalCount: number
}

const PER_PAGE = 5

export default function BlogPageId({
  blog,
  categories,
  totalCount,
}: BlogPageIdProps) {
  const pageOgImg: string = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`
  return (
    <>
      <SeoHead
        title={'投稿一覧'}
        titleTemplate={'Sample Nextjs App'}
        description={'Next.js + TypeScript Sample Project.'}
        ogType={'website'}
        imgUrl={`${pageOgImg}/next.jpg`}
      />
      <div className={styles.container}>
        <div className={styles.main}>
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
                          .tz('Asia/Tokyo')
                          .format(
                            'YYYY' +
                              '年' +
                              'MM' +
                              '月' +
                              'DD' +
                              '日' +
                              'hh' +
                              ':' +
                              'mm'
                          )}
                      </p>
                      <h5 className={styles.blogtitle}>{blog.title}</h5>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <br />
            <Pagination totalCount={totalCount} />
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: 'blog' })
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  )
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({
    endpoint: 'blog',
    queries: { offset: (id - 1) * 6, limit: 6 },
  })
  const categoryData = await client.get({ endpoint: 'categories' })
  return {
    props: {
      blog: data.contents,
      categories: categoryData.contents,
      totalCount: data.totalCount,
    },
  }
}
