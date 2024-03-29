import { NextPage } from 'next'
import { client } from '@/libs/client'
import { BlogTypes } from '@/types/blogtypes'
import Link from 'next/link'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)
import styles from '../../styles/CategoryId.module.css'

type CategoryIdProps = {
  blog: BlogTypes[]
}

const CategoryId: NextPage<CategoryIdProps> = ({ blog }) => {
  if (blog.length === 0) {
    return (
      <main className={styles.main}>
        <div>
          <h1>ブログコンテンツがありません</h1>
        </div>
      </main>
    )
  }
  return (
    <main className={styles.main}>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default CategoryId

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'categories' })
  const paths = data.contents.map((content: any) => `/category/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({
    endpoint: 'blog',
    queries: { filters: `category[contains]${id}` },
  })

  return {
    props: {
      blog: data.contents,
    },
  }
}
