import styles from "./home.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { start } from "./redux/action"
const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [number, setNumber] = useState()
    const [category, setCategory] = useState()
    const [level, setLevel] = useState()
    const handleStart = () => {
        console.log(555555555, number, category, level)
        dispatch(start([number, category, level]))
        navigate("/detail")
    }
    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.titleh2}>Setup Quiz</h2>
            <p className={styles.titleInput}>Number Of Questions</p>
            <input value={number} onChange={e => setNumber(e.target.value)} type="number"></input>
            <p className={styles.titleInput}>Category</p>
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option >category</option>
                <option value="1">geography</option>
                <option value="2">free</option>
            </select>
            <p className={styles.titleInput}>Difficulty</p>
            <select value={level} onChange={e => setLevel(e.target.value)} className={styles.lastchild}>
                <option >level</option>
                <option value="1">easy</option>
                <option value="2">medium</option>
            </select>
            <button onClick={() => handleStart()} className={styles.btnSubmit}>Start</button>
        </div>
    );
}
export default Home