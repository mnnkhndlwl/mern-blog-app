import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      //creating new post
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData(); //The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values
      //the FormData object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.
      const filename = Date.now() + file.name; //to upload file eith different name
      data.append("name", filename); //You could add a key/value pair to this using FormData.append
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data); //sending our data
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost); //sending our newPost
      window.location.replace("/post/" + res.data._id); //jab post publish ho jayegi then we will redirected to our singlePost page
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" /> //it gonna create the url of file
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        {/**on submit it gonna fire handlesubmit function */}
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            {/**The htmlFor property sets or returns the value of the for attribute of a label.
                The for attribute specifies which form element a label is bound to. */}
            <i className="writeIcon fal fa-file-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
