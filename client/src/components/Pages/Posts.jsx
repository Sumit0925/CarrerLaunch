import { useEffect, useState } from "react";
import PostsCard from "./PostsCard";
import "../assets/Posts.css";
import CreateArea from "./CreateArea";
import axios from "axios";

function Posts() {
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    async function FetchPosts() {
      try {
        const res = await axios.get("http://localhost:3001/post");
        setAllNotes([...allNotes, ...res.data.allPosts]);
        console.log(res.data.allPosts);
      } catch (err) {
        console.error(err);
      }
    }
    FetchPosts();
  }, []);

  const userType = localStorage.getItem("role");

  function addNote(note) {
    let newNote = [...allNotes, note];
    // localStorage.setItem('Post', JSON.stringify(newNote));
    setAllNotes(newNote);
  }
  function deleteNote(id) {
    console.log(id);
    setAllNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note._id !== id;
      });
    });
    axios
      .delete(`http://localhost:3001/post/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // useEffect(() => {
  //   let postDetail = localStorage.getItem('Post');
  //   if (!postDetail) {
  //     return;
  //   }
  //   setAllNotes(JSON.parse(postDetail));
  // }, [])

  return (
    <div>
      <h1 className="post-heading">Latest Posts</h1>
      {userType === "admin" && <CreateArea addon={addNote} />}
      {allNotes
        .map((addnote, index) => {
          return (
            <PostsCard
              key={index}
              id={addnote._id}
              title={addnote.title}
              content={addnote.content}
              delete={deleteNote}
              date={new Date(addnote.createdAt).toLocaleDateString()}
            />
          );
        })
        .reverse()}
    </div>
  );
}

export default Posts;
