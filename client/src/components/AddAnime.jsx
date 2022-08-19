import React, { useState, useContext, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { getGenreCall } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { GenresContext } from "../context/GenreContext";

const AddAnime = () => {
  const { addAnime } = useContext(AnimeContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const { genres, setGenres } = useContext(GenresContext);
  const { state, setState } = useState(false);

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await AnimeFinder.post("/", {
  //       name,
  //       location,
  //       price_range: priceRange,
  //     });
  //     console.log(response.data.data);
  //     addAnime(response.data.data.restaurant);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
<div className="container-fluid">
  <h3 className="font-weight-light text-left">
  Add an Anime
  </h3>
  <div className="row">
    <div className="col-md-12">
      <form role="form">
        <div className="form-group">
            
<label htmlFor="exampleInputEmail1">
            Name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">
                        Number of Episodes
                      </label>
                      <input type="number" className="form-control" />
                    </div>
                    <div className="form-group">
            <label htmlFor="exampleInputEmail1">
                        Image Link
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
            <label htmlFor="exampleInputEmail1">
                        Year
                      </label>
                      <input type="number" className="form-control" />
                    </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            Creator
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
        </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Genre</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="" disabled selected hidden>Choose a genre</option>
                {genres &&
                  genres.map((genre) => {
                  return (
                    <option key={genre.id}>{genre.genre_name}</option>
                  );
                })}
                </select>
        </div>
<div className="form-group">
<label htmlFor="exampleInputEmail1">
            Description
          </label>
          <textarea className="form-control" rows="4"></textarea>
</div>
        <button type="submit" className="btn btn-primary">
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
