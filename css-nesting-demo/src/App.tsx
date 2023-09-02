import styles from './App.module.css';

function App() {
  return (
    <section>
      <button>regular</button>
      <button className={styles.active}>active</button>
      <button className={styles.disabled}>disabled</button>
      <button className={styles.info}>info</button>

      <ul>
        <li>apple</li>
        <li>orange</li>
        <li>pear</li>
        <li>banana</li>
      </ul>
      <div className={styles.data}>
        <div className={styles.someChild}>hi</div>
        <p>some paragraph of data</p>
      </div>
      <div className={styles.data}>
        <div className={styles.danger}>danger paragraph</div>
        <div className={styles.ok + ' ' + styles.ok}>ok paragraph</div>
        <div className={styles.ok}>ok paragraph</div>
        <div className={styles.ok}>ok paragraph</div>
        <div className={styles.ok}>ok paragraph</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.ok}>ok paragraph</div>
      </div>
    </section>
  );
}

export default App;
