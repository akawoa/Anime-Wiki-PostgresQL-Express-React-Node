import React, { useState, useContext, useEffect  } from "react";
import { useLocation, useParams, useHistory, Redirect } from "react-router-dom";
import { getSingleGenreCall, editGenreCall } from "../apis/AnimeFinder";
import { GenresContext } from "../context/GenreContext";
import MyLoader from "./MyLoader";

const UpdateGenre = () => {
  const { id } = useParams();
  const { genres, setGenres } = useContext(GenresContext);
  const { addGenres } = useContext(GenresContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory() 
  const { state, setState } = useState(false);
  const { genreResponse, setGenreResponse } = useState();
  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
  };
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);


  const delay = () => {
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  const fetchData = async () => {
    try {
      await delay();
      const response = await getSingleGenreCall(id);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      setGenres(response.data.data.genre);
      setName(response.data.data.genre[0].genre_name);
      setImage(response.data.data.genre[0].genre_image);
      setDescription(response.data.data.genre[0].genre_description);
    } catch (err) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
    }
  };
  useEffect(() => {
    fetchData();
  }, [state]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editGenreCall(id, {
        genre_name: name,
        genre_image: image,
        genre_description: description,
      });
      console.log(response.data.data);
      console.log(response.status);
      if(response.status === 200) {
        history.push("/")
      }
    } catch (err) {
      console.log(err);
      <Redirect to="/error" />
    }
  };

if (requestStatus === REQUEST_STATUS.LOADING) return <MyLoader></MyLoader>;
if (requestStatus === REQUEST_STATUS.FAILURE) <Redirect to="/error" />;

  return (

<div className="container-fluid">
  <h3 className="font-weight-light text-left">
  Edit a Genre
  </h3>
  <div className="row">
    <div className="col-md-12">
      <form role="form">
        <div className="form-group">
            
<label htmlFor="name">
            Name
          </label>
          <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control" />
        </div>
                    <div className="form-group">
            <label htmlFor="image">
                        Image Link
                      </label>
                      <input
                      type="text"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      className="form-control" />
                    </div>
<div className="form-group">
<label htmlFor="description">
            Description
          </label>
          <textarea value={description} className="form-control" rows="4" onChange={(e) => setDescription(e.target.value)}></textarea>
</div>
        <button 
        onClick={handleSubmit}
        type="submit"
        className="btn btn-primary">
          Edit Genre
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default UpdateGenre;