// import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import styles from './Sort.module.css';

const sortList = [
  { name: 'популярности (DESC)', sortProperty: 'RATING_DESC' },
  { name: 'популярности (ASC)', sortProperty: 'RATING_ASC' },
  { name: 'цене (DESC)', sortProperty: 'PRICE_DESC' },
  { name: 'цене (ASC)', sortProperty: 'PRICE_ASC' },
  { name: 'алфавиту (DESC)', sortProperty: 'TITLE_DESC' },
  { name: 'алфавиту (ASC)', sortProperty: 'TITLE_ASC' },
];

export const Sort = ({ value, onChangeCategory, sortByFollowingValue }) => {
  //   const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('популярности (DESC)');

  useEffect(() => {
    document.addEventListener('keydown', onCloseSortList);
    return () => document.removeEventListener('keydown', onCloseSortList);
  });

  const onCloseSortList = ({ code }) => {
    if (code === 'Escape') {
      setOpen(!open);
    }
  };

  const onClickListItem = (event, name) => {
    setOpen(!open);
    if (name !== undefined) {
      setSort(name);
    }
  };

  // const onGoBackClick = () => {
  // navigate('/');
  // };

  return (
    <div className={styles.sort}>
      <div className={styles.sort_label} onClick={() => onClickListItem()}>
        <svg
          className={[styles.sort_svg, open ? styles.sort_svg_open : ''].join(
            ' '
          )}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b className={styles.sort_text}>Sort by :</b>
        <span className={styles.sort_span}>{sort}</span>
      </div>
      {open && (
        <div className={styles.sort_popup}>
          <ul className={styles.sort_list}>
            {sortList.map((item, index) => (
              <li
                key={index}
                onClick={event => {
                  onChangeCategory(item.type);
                  onClickListItem(event, item.name);
                }}
                className={[
                  styles.sort_item,
                  value === item.type || sortByFollowingValue === item.type
                    ? styles.active
                    : '',
                ].join(' ')}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
