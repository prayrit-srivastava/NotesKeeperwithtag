import Form from './Component/Form';
import List from './Component/List';
import { useState } from 'react';

function App() {
  const [notes,setNotes] = useState([]);
function handleSubmit(title,content,tag){
    let id = notes.length;
    setNotes([...notes,{
      id,
      title,
      content,
      tag
    }])
}
function removeNotes(ind){
console.log("remove is working")
const new_notes = notes.filter((note)=> note.id!==ind )
setNotes(new_notes)
}
function handleEdit(id, editedContent, editedTag) {
  const updatedNotes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, content: editedContent, tag: editedTag };
    }
    return note;
  });
}
  return (
    <>
    <Form handleSubmit={handleSubmit} />
    <List notes={notes} removeNotes={removeNotes} handleEdit={handleEdit}/>
    </>
  );
}

export default App;
