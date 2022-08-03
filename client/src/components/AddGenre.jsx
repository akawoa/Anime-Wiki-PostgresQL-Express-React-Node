import React, { useState, useContext } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import AnimeFinder from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";

const AddGenre = () => {
  const { addAnime } = useContext(AnimeContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AnimeFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response.data.data);
      addAnime(response.data.data.anime);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <form role="form">
        <div class="form-group">
            
<label for="exampleInputEmail1">
            Name
          </label>
          <input type="text" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">
          Add Genre
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default AddGenre;
