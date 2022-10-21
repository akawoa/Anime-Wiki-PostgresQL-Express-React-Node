import { useLocation, useParams, useHistory, Redirect } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import { getSingleAnimeCall, editAnimeCall, getGenreCall } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { GenresContext } from "../context/GenreContext";
import MyLoader from "./MyLoader";

const UpdateAnime = () => {
  const { id } = useParams();
  const { anime, setAnime } = useContext(AnimeContext);
  const { state, setState } = useState(false);

  const { addAnime } = useContext(AnimeContext);
  const [name, setName] = useState("");
  const [episodes, setEpisodes] = useState();
  const [image, setImage] = useState("");
  const [year, setYear] = useState();
  const [creator, setCreator] = useState("");
  const [genreID, setGenreID] = useState();
  const [genreName, setGenreName] = useState();
  const { genres, setGenres } = useContext(GenresContext);
  const { genreResponse, setGenreResponse } = useState();
  const history = useHistory() 
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
      const response = await getSingleAnimeCall(id);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
            const genreResponse = await getGenreCall();
      console.log(genreResponse.data.data);
      setGenres(genreResponse.data.data.genre);
      // setState(genreResponse.data.data);
      console.log(response.data.data.anime);
      setAnime(response.data.data.anime);
      setName(response.data.data.anime[0].name)
      setEpisodes(response.data.data.anime[0].episodes)
      setImage(response.data.data.anime[0].image)
      setYear(response.data.data.anime[0].year)
      setCreator(response.data.data.anime[0].creator)
      setGenreID(response.data.data.anime[0].genre_id)
      console.log(genres.filter(genre => genre.id == genreID));
      setGenreName(genres.filter(genre => genre.id == genreID));
      // console.log(genreName);

      // setState(response.data.data.anime);
      // setName(response.data.data.anime[0].name)
      // setEpisodes(response.data.data.anime[0].episodes)
      // setImage(response.data.data.anime[0].image)
      // setYear(response.data.data.anime[0].year)
      // setCreator(response.data.data.anime[0].creator)
    } catch (err) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
    }
  };
  useEffect(() => {
    fetchData();
  }, [state]);


  // const fetchData = async () => {
  //   try {
  //     const response = await getGenreCall();
  //     console.log(response.data.data);
  //     setGenres(response.data.data.genre);
  //     setState(response.data.data);
  //   } catch (err) {}
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [state]);

//       setAnime(response.data.data.anime);
// setName(response.data.data.anime[0].name)
// setEpisodes(response.data.data.anime[0].episodes)
// setImage(response.data.data.anime[0].image)
// setYear(response.data.data.anime[0].year)
// setCreator(response.data.data.anime[0].creator)


  if (requestStatus === REQUEST_STATUS.LOADING) return <MyLoader></MyLoader>;
  if (requestStatus === REQUEST_STATUS.FAILURE) <Redirect to="/error" />;


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editAnimeCall(id, {
        name,
        episodes,
        image,
        year,
        creator,
        genre_id: genreID,
      });
      console.log(response.data.data);
      console.log(response.status);
      // addAnime(response.data.data.anime);
      if(response.status === 200) {
        history.push("/anime")
      }
    } catch (err) {
      console.log(err);
      <Redirect to="/error" />
    }
  };


  return (
    <div className="list-group container">
        <div className="container-fluid">
  <h3 className="font-weight-light text-left">
  Edit an Anime {anime.name}
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
            <label htmlFor="episodes">
                        Number of Episodes
                      </label>
                      <input
                      type="number"
                      defaultValue={anime.episodes}
                      value={episodes}
                      onChange={(e) => setEpisodes(e.target.value)}
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
            <label htmlFor="year">
                        Year
                      </label>
                      <input
                      type="number"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="form-control" />
                    </div>
        <div className="form-group">
          <label htmlFor="creator">
            Creator
          </label>
          <input
          type="text"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
          className="form-control" />
        </div>
        <div className="form-group">
        </div>
                <div className="form-group">
                <label htmlFor="select_genre">Genre</label>
                <select
                  className="form-control"
                  id="genre"
                  value={genreID}
                  onChange={(e) => setGenreID(e.target.value)}
                  >
                  
                {genres &&
                  genres.map((genre) => {
                  return (
                    <>
                    <option value={genre.id} key={genre.id}>{genre.genre_name}</option>
                    </>
                  );
                })}
                </select>
        </div>
<div className="form-group">
<label htmlFor="description">
            Description
          </label>
          <textarea className="form-control" rows="4"></textarea>
</div>
        <button 
        onClick={handleSubmit}
        type="submit"
        className="btn btn-primary">
          Edit Anime
        </button>
      </form>
    </div>
  </div>
</div>
    </div>
    
  );
}

export default UpdateAnime;
