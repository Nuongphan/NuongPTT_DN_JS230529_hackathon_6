import { useState, useEffect } from "react"
import axios from "axios"
function App() {
  const [notes, setNotes] = useState()
  const [note, setNote] = useState()

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/notes").then((res) => {
      console.log(222222, res.data);
      setNotes(res.data)
    }).then(err => console.log(err))
  }, [])
  const handleAdd = () => {
    if (note !== "") {
      const noteText = { note: note }
      console.log("note", noteText);
      axios.post("http://localhost:8000/api/v1/notes", noteText)
      setNotes([...notes, noteText])
      setNote("")
    }
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/v1/notes/${id}`)
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Note App</h1>
        <div className="add-block">
          <h4>Title</h4>
          <input required type="text" value={note} onChange={e => setNote(e.target.value)} id="noteInput" placeholder="Take a note..." />
          <button onClick={handleAdd} id="addButton">Add</button>
        </div>
        <ul id="noteList">
          {notes?.map(item =>
            <li key={item?.id}>
              <span>{item?.note}</span>
              <button onClick={()=>handleDelete(item?.id)} className="delete-button" >Delete</button>
            </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
