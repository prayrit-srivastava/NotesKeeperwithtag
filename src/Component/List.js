import Note from "./Note";
import { useState } from "react";
export default function List({ notes, removeNotes, handleEdit }) {
 
const [selectedTag, setSelectedTag] = useState("All"); 

  const uniqueTags = [...new Set(notes.map((note) => note.tag))];

  const filteredNotes = selectedTag === "All" ? notes : notes.filter((note) => note.tag === selectedTag);

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  return (
    <>
      <h1>Your Notes</h1>
      <label htmlFor="tagFilter">Filter by Tag: </label>
      <select id="tagFilter" value={selectedTag} onChange={handleTagChange}>
        <option value="All">All</option>
        {uniqueTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
        <h1>Your Notes</h1>
        {filteredNotes.map((note)=>{
        return(
        <Note key ={note.id} id= {note.id} title= {note.title} content = {note.content} tag={note.tag} removeNotes={removeNotes} handleEdit={handleEdit}/>
        )    
    }
        )}
                </>
    )
}