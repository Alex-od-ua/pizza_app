import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
// import { Button } from 'components/Button/Button';

import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Header />
      </div>
    </Container>
  );
};
