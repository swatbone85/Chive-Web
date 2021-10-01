import { useState } from "react";
import useApi from "./useApi";

function AddPiece() {
  const [title, setTitle] = useState("");
  const [composer, setComposer] = useState(null);
  const [isBlocking, setIsBlocking] = useState(false);

  const { state: composers, loading, error, refetch } = useApi("composers");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "thomas:uhr944yY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        composer: composer,
      }),
    };

    console.log(requestOptions.body);

    fetch("http://localhost/api/pieces/", requestOptions).then((response) =>
      response.json()
    );
  };

  const handleComposerChange = (e) => {
    var composer = e.target.value;
    setComposer(composer);
    console.log(composer);
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
  };

  return (
    <div>
      <h1>Add piece</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {!!composers && (
          <select onChange={handleComposerChange}>
            <option value={null}>None</option>
            {composers.map((composer, key) => (
              <option key={key} value={composer.id}>
                {composer.last_name + ", " + composer.first_name}
              </option>
            ))}
          </select>
        )}
        <input type="submit" value="Submit" />
        <input type="file" name="file" onChange={handleFileChange} />
      </form>
    </div>
  );
}

export default AddPiece;
