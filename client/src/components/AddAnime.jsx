import React, { useState, useContext } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { getAPICall } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";

const AddAnime = () => {
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
  //     addAnime(response.data.data.restaurant);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
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
        <div class="form-group">
            <label for="exampleInputEmail1">
                        Number of Episodes
                      </label>
                      <input type="number" class="form-control" />
                    </div>
                    <div class="form-group">
            <label for="exampleInputEmail1">
                        Image Link
                      </label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
            <label for="exampleInputEmail1">
                        Year
                      </label>
                      <input type="number" class="form-control" />
                    </div>
        <div class="form-group">
          <label for="exampleInputPassword1">
            Creator
          </label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
        </div>
        <button type="submit" class="btn btn-primary">
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
