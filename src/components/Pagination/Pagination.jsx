import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.css';

export const Pagination = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel="next >"
    previousLabel="< previous"
    onPageChange={event => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage}
  />
);
