import { useState, useEffect } from "react"
import axios from "axios"

const API = "http://localhost:5000"

function App() {
  const [text, setText] = useState("")
  const [notes, setNotes] = useState([])

  const fetchNotes = async () => {
    const res = await axios.get(`${API}/notes`)
    setNotes(res.data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const addNote = async () => {
    await axios.post(`${API}/notes`, { text })
    setText("")
    fetchNotes()
  }

  const deleteNote = async (id) => {
    await axios.delete(`${API}/notes/${id}`)
    fetchNotes()
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Notes App 🚀</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addNote}>Add</button>

      {notes.map(n => (
        <div key={n._id}>
          {n.text}
          <button onClick={() => deleteNote(n._id)}>❌</button>
        </div>
      ))}
    </div>
  )
}

export default App
