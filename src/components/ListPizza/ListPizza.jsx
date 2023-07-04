import { useState } from 'react';
// import imageUrl from '../../assets/images/Сырный цыпленок.jpg';
import styles from './ListPizza.module.css';

const types = ['тонкое', 'традиционное'];
// const types = [
//   'Чизбургер-пицца',
//   'Сырная',
//   'Креветки по-азиатски',
//   'Сырный цыпленок',
// ];
const sizes = ['26', '30', '40'];

export const ListPizza = ({ name, imageUrl }) => {
  const [type, setType] = useState('тонкое');
  const [size, setSize] = useState('26');

  const setActiveType = id => {
    setType(id);
  };

  const setActiveSize = id => {
    setSize(id);
  };

  return (
    <div className={styles.list_pizza_wrapper}>
      <div className={styles.list_pizza}>
        {/* <Link key={id} to={`/pizza/${id}`}> */}
        <img className={styles.list_pizza_image} src={imageUrl} alt="Pizza" />
        <h4 className={styles.list_pizza_title}>{name}</h4>
        {/* </Link> */}
        <div className={styles.list_pizza_selector}>
          <ul className={styles.list_pizza_ul}>
            {types.map(item => (
              <li
                className={[
                  styles.list_pizza_item,
                  item === type ? styles.active : '',
                ].join(' ')}
                key={item}
                onClick={() => setActiveType(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className={styles.list_pizza_ul}>
            {sizes.map((item, index) => (
              <li
                className={[
                  styles.list_pizza_item,
                  item === size ? styles.active : '',
                ].join(' ')}
                key={item}
                onClick={() => setActiveSize(item)}
              >
                {item} см.
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list_pizza_bottom}>
          <div className={styles.list_pizza_price}>от price $</div>
          <button
            // onClick={onClickAdd}
            className={styles.list_pizza_button}
          >
            <svg
              className={styles.button_svg}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span className={styles.button_text}>Добавить</span>
            {/* {addedCount > 0 && <i>{addedCount}</i>} */}
          </button>
        </div>
      </div>
    </div>
  );
};
