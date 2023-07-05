import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.nfp_wrapper}>
      <h1>
        <span className={styles.nfp_smile}>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.nfp_description}>
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
