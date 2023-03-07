import Link from "next/link";
import styles from "@/components/styles/Pagination.module.css";

type PaginationProps = {
  totalCount: number;
};

export const Pagination = ({ totalCount }: PaginationProps) => {
  const PER_PAGE = 5;
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <>
      <div className={styles.pnContainer}>
        <nav aria-label="Page navigation" className={styles.pnAria}>
          <ul className="pagination pagination-md">
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
              <li key={index} className="page-item" aria-current="page">
                <Link href={`/blog/page/${number}`}>
                  <span className="page-link">{number}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
