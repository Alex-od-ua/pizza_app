import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';

import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
