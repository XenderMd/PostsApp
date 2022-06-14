import React, {useState} from "react";
import axios from 'axios';

const PostCreate = () => {

const [title, setTitle] = useState('');

const onSubmit = async (event)=>{
    event.preventDefault();
    await axios.post('http://localhost:4000/posts',{
        title
    });

    setTitle('');
}

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={e=>setTitle(e.target.value)}
            type="Text"
            className="form-control"
            id="title"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
