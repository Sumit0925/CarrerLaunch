import axios from "axios";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function updateNote(event) {
    const { name, value } = event.target;
    setNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  }
  async function submitNote(e) {
    e.preventDefault();

    if (note.title == "" || note.content == "") {
      event.preventDefault();
      console.log("Neither Title nor Content should be empty");
    } else {
      try {
        const res = await axios.post("http://localhost:3001/addPost", {
          title: note.title,
          content: note.content,
        });
        console.log(res.data);
        props.addon(note);
      } catch (err) {
        console.error(err);
      }
    }
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="note-form-wrapper">
      <form className="note-form" onSubmit={submitNote}>
        <input
          onChange={updateNote}
          name="title"
          placeholder="Post Title"
          value={note.title}
          autoCapitalize="off"
        />
        <textarea
          onChange={updateNote}
          name="content"
          placeholder="Post Content..."
          rows="3"
          value={note.content}
          autoCapitalize="off"
        />
        <button className="pressed">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
