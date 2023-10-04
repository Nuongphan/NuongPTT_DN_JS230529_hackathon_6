import styles from "./home.module.css"
const Home = () => {
    return (
      <div className={styles.homeContainer}>
            <h2 className={styles.titleh2}>Setup Quiz</h2>
            <p className={styles.titleInput}>Number Of Questions</p>
            <input type="number"></input>
            <p className={styles.titleInput}>Category</p>
            <select>
                <option value="">geography</option>
                <option value="">free</option>
            </select>
            <p className={styles.titleInput}>Difficulty</p>
            <select  className={styles.lastchild}>
                <option value="">easy</option>
                <option value="">medium</option>
            </select>
            <button  className={styles.btnSubmit}>Start</button>
      </div>
    );
}
export default Home