import React, { useState, useContext } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { getAPICall } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";

const AddGenre = () => {
  const { addAnime } = useContext(AnimeContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await AnimeFinder.post("/", {
  //       name,
  //       location,
  //       price_range: priceRange,
  //     });
  //     console.log(response.data.data);
  //     addAnime(response.data.data.anime);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
<div className="container-fluid">
  <h3 className="font-weight-light text-left">
  Add a Genre
  </h3>
  <div className="row">
    <div className="col-md-12">
      <form role="form">
        <div className="form-group">
            
          <label htmlFor="exampleInputEmail1">
            Name
          </label>
          <input type="text" className="form-control" />
          <label htmlFor="exampleInputEmail1">
            Image
          </label>
          <input type="text" className="form-control" />
          <label htmlFor="exampleInputEmail1">
            Description
          </label>
          <textarea className="form-control" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Genre
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default AddGenre;
