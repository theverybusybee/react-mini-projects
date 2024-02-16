import styles from './index.module.scss';

export const App: React.FC = () => {
  return (
    <main>
      <ul>
        <li className={styles.listItem}></li>
      </ul>
    </main>
  );
};
