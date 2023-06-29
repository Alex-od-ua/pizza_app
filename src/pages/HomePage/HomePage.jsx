import { Container } from 'components/Container/Container';
import { Button } from 'components/Button/Button';

import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.title}>HomePage</div>
        <Button>Try me</Button>
      </div>
    </Container>
  );
};
