// import "../assets/Posts.css"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function PostsCard(props) {
  const CustomLink = ({ href, children }) => {
    return (
      <a href={href} style={{ color: 'blue', textDecoration: 'underline' }}>
        {children}
      </a>
    );
  };
  const role = localStorage.getItem("role");
  return (
    <>
      <div className="post-wrapper">
        <div className="note">
          <div className="announcement-heading">
          <h1 className="announcement">Announcement</h1>
          <h1 className='announcement-date'>{props.date}</h1>

          </div>
          <h1 className="post-title">{props.title}</h1>
          <ReactMarkdown children={props.content} remarkPlugins={[remarkGfm]}  components={{
          a: CustomLink, // Apply custom link component for 'a' tags
        }}/>
         {role == "admin" && (
            <button className="post-delete pressed"
              onClick={() => {
                props.delete(props.id);
              }}
            >
              <h1>DELETE</h1>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default PostsCard;
