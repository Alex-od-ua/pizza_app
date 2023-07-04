// import { Sort } from 'components/Sort/Sort';

import styles from './Categories.module.css';

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

export const Categories = ({ value, onChangeCategory }) => {
  return (
    <div className={styles.categories}>
      <ul className={styles.categories_list}>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            // onClick={() => onChangeCategory(index)}
            className={styles.categories_item}
            // className={
            //   (styles.categories_item,
            //   value === index ? styles.categories_active : '')
            // }
          >
            {categoryName}
          </li>
        ))}
      </ul>
      {/* <Sort /> */}
    </div>
  );
};
