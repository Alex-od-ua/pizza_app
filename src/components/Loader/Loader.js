import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.Loader__wrapper}>
      <Oval
        height={100}
        width={100}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
};
