import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { Categories } from 'components/Categories/Categories';
import { Sort } from 'components/Sort/Sort';
import { ListPizza } from 'components/ListPizza/ListPizza';
// import { Button } from 'components/Button/Button';

import { pizzas } from './HomePageTest';

import styles from './HomePage.module.css';

export const HomePage = () => {
  const newPizzas = pizzas.map(item => {
    return <ListPizza name={item.name} imageUrl={item.image} />;
  });

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Container>
          <div className={styles.top_content}>
            <Categories />
            <Sort />
          </div>
          <h2 className={styles.content_title}>Все пиццы</h2>
          {/* <ListPizza /> */}
          <div className={styles.content_pizza}>
            {newPizzas} {newPizzas}
          </div>
        </Container>
      </div>
    </div>
  );
};
