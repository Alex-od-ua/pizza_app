import { Link, useLocation } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import { Search } from 'components/Search/Search';
import logoSvg from '../../assets/images/logoSvg.svg';

import styles from './Header.module.css';
import shoppingCart from '../../assets/images/shopping-cart.svg';

export const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.header_item}>
          <Link to="/" className={styles.header_link}>
            <div className={styles.header_logo}>
              <img width="38" src={logoSvg} alt="Pizza logo" />
              <div className={styles.header_title_wrap}>
                <h1 className={styles.header_title}>React Pizza</h1>
                <p className={styles.header_text}>
                  самая вкусная пицца во вселенной
                </p>
              </div>
            </div>
          </Link>

          {location.pathname !== '/cart' && <Search />}
          <div>
            {location.pathname !== '/cart' && (
              <Link to="/cart" className={styles.header_cart}>
                <span>15 $</span>
                <div className={styles.button_delimiter}></div>
                <img width="19" src={shoppingCart} alt="Shopping cart" />
                <span>0</span>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
