import { Container } from 'components/Container/Container';

import { Categories } from 'components/Categories/Categories';
import { Sort } from 'components/Sort/Sort';
import { ListPizza } from 'components/ListPizza/ListPizza';
import { Pagination } from 'components/Pagination/Pagination';

import { pizzas } from './HomePageTest';

import styles from './HomePage.module.css';

const HomePage = () => {
  const newPizzas = pizzas.map(item => {
    return <ListPizza name={item.name} imageUrl={item.image} />;
  });

  return (
    <Container>
      <div className={styles.top_content}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.content_title}>Все пиццы</h2>
      <div className={styles.content_pizza}>
        {newPizzas} {newPizzas}
      </div>
      <Pagination currentPage={1} />
    </Container>
  );
};

export default HomePage;
