import React, { useState, useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import AnimeFinder, {
  getGenreCall,
  postAnimeAPICall,
} from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { GenresContext } from "../context/GenreContext";

const AddAnime = () => {
  const { addAnime } = useContext(AnimeContext);
  const [name, setName] = useState("");
  const [episodes, setEpisodes] = useState();
  const [image, setImage] = useState("");
  const [year, setYear] = useState();
  const [creator, setCreator] = useState("");
  const [genreID, setGenreID] = useState();
  const [animeNameError, setAnimeNameError] = useState("");
  const [episodesError, setEpisodesError] = useState("");
  const [imageError, setImageError] = useState("");
  const [yearError, setYearError] = useState("");
  const [creatorError, setCreatorError] = useState("");
  const { genres, setGenres } = useContext(GenresContext);
  const { state, setState } = useState(false);
  const { response, setResponse } = useState();
  const history = useHistory();

  const fetchData = async () => {
    try {
      const response = await getGenreCall();
      console.log(response.data.data);
      setGenres(response.data.data.genre);
      setState(response.data.data);
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      animeNameError ||
      episodesError ||
      imageError ||
      yearError ||
      creatorError
    ) {
      console.log(
        "Mistakes were made, try filling out the entire form next time."
      );
      return false;
    }
    try {
      const response = await postAnimeAPICall({
        name,
        episodes,
        image,
        year,
        creator,
        genre_id: genreID,
      });
      console.log(response.data.data);
      console.log(response.status);
      addAnime(response.data.data.anime);
      if (response.status === 201) {
        history.push("/anime");
      }
    } catch (err) {
      console.log(err);
      <Redirect to="/error" />;
    }
  };

  const handleAnimeName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 1) {
      setAnimeNameError("Anime Name is Required!");
    } else if (e.target.value.length < 2) {
      setAnimeNameError("Anime Name must be 2 characters or longer!");
    } else if (e.target.value.length >= 2) {
      setAnimeNameError("");
    }
  };

  const handleEpisodes = (e) => {
    setEpisodes(e.target.value);
    if (e.target.value.length < 1) {
      setEpisodesError("Number of episodes is Required!");
    } else if (e.target.value.length < 2) {
      setEpisodesError(
        "First Name must be a valid number characters or longer!"
      );
    } else if (e.target.value.length >= 2) {
      setEpisodesError("");
    }
  };

  const handleImage = (e) => {
    setImage(e.target.value);
    if (e.target.value.length < 1) {
      setImageError("First Name is Required!");
    } else if (e.target.value.length < 2) {
      setImageError("First Name must be 2 characters or longer!");
    } else if (e.target.value.length >= 2) {
      setImageError("");
    }
  };

  const handleYear = (e) => {
    setYear(e.target.value);
    if (e.target.value == null) {
      setYearError("Anime Year is Required!");
    } else if (e.target.value < 1900) {
      setYearError("Anime must have a valid year!");
    } else if (e.target.value >= 1900) {
      setYearError("");
    }
  };

  const handleCreator = (e) => {
    setCreator(e.target.value);
    if (e.target.value.length < 1) {
      setCreatorError("First Name is Required!");
    } else if (e.target.value.length < 2) {
      setCreatorError("First Name must be 2 characters or longer!");
    } else if (e.target.value.length >= 2) {
      setCreatorError("");
    }
  };

  const handleGenre = (e) => {
    setGenreID(e.target.value);
  };

  return (
    <div className="container-fluid">
      <h3 className="font-weight-light text-left">Add an Anime</h3>
      <div className="row">
        <div className="col-md-12">
          <form role="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                required
                maxlength="125"
                onChange={handleAnimeName}
                className="form-control"
              />
              <span className="text-danger">{animeNameError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="episodes">Number of Episodes</label>
              <input
                type="number"
                required
                value={episodes}
                onChange={handleEpisodes}
                className="form-control"
              />
              <span className="text-danger">{episodesError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image Link</label>
              <input
                type="text"
                value={image}
                onChange={handleImage}
                className="form-control"
              />
              <span className="text-danger">{imageError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                value={year}
                min="4"
                maxlength="4"
                required
                onChange={handleYear}
                className="form-control"
              />
              <span className="text-danger">{yearError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="creator">Creator</label>
              <input
                type="text"
                required
                value={creator}
                onChange={handleCreator}
                className="form-control"
              />
              <span className="text-danger">{creatorError}</span>
            </div>
            <div className="form-group"></div>
            <div className="form-group">
              <label htmlFor="select_genre">Genre</label>
              <select
                className="form-control"
                id="genre"
                required
                value={genreID}
                onChange={handleGenre}
              >
                <option value="" disabled selected hidden>
                  Choose a genre
                </option>
                {genres &&
                  genres.map((genre) => {
                    return (
                      <option value={genre.id} key={genre.id}>
                        {genre.genre_name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Add Anime
            </button>
          </form>
        </div>
      </div>
    </div>
    /*
    <div className="mb-2">
        Add Anime Component
    <div className="mb-2">
        <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
               <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>

    </div>
    </div>
    */
  );
};

export default AddAnime;
