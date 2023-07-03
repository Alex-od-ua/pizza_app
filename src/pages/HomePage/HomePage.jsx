import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { Categories } from 'components/Categories/Categories';
// import { Button } from 'components/Button/Button';

import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Container>
          <Categories />
        </Container>
      </div>
    </div>
  );
};
