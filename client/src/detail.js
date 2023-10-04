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
        <div>
            detail question 
        </div></>
}
export default Detail