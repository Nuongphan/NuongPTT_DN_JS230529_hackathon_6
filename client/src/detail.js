import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"
const Detail = () => {
    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/questions/test?categoryId=${params[1]}&level=${params[2]}&limit=${params[0]}`)
            .then(response => { console.log(4444, response.data); setData(response.data) })
    }, [])
    const [answers, setAnswer]= useState()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [data, setData] = useState()
    console.log("data", data);
    const params = useSelector(state => state.question)
    console.log(111111111, params);
    if (!data || data.length === 0 || currentQuestionIndex >= data.length) {
        return <div>Loading...</div>; // Hoặc hiển thị thông báo loading hoặc thông báo lỗi tùy thuộc vào trạng thái của dữ liệu
    }
    // Lấy câu hỏi hiện tại từ mảng các câu hỏi
    const currentQuestion = data[currentQuestionIndex];
    const handleAnswerSelect = () => { 
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    return <>
        <div className="questionContainer">
            <h4>Correct Answers: </h4>
            
            <h2>{currentQuestion?.content}</h2>
            <ul>
                <li onClick={handleAnswerSelect}>{currentQuestion?.content}</li>
                <li>câu trả lời </li>
                <li>câu trả lời </li>
                <li>câu trả lời </li>
            </ul>
            {currentQuestionIndex < data.length - 1 && <button>Next Question</button>}
        </div>
    </>
}
export default Detail