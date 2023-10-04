import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"
const Detail = () => {
    const [data, setData] = useState()
    console.log("data", data);
    const params = useSelector(state => state.question)
    console.log(111111111, params);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/questions/test?categoryId=${params[1]}&level=${params[2]}&limit=${params[0]}`)
            .then(response => {console.log(4444,response.data); setData(response.data) })
    }, [])

    return <>
        <div className="questionContainer">
            <h4>Correct Answers: </h4>
            <h2> Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏiCâu hỏiCâu hỏivv Câu hỏiv</h2>
            <ul>
                <li>câu trả lời </li>
                <li>câu trả lời </li>
                <li>câu trả lời </li>
                <li>câu trả lời </li>
            </ul>
            <button>Next Question</button>
        </div>
    </>
}
export default Detail