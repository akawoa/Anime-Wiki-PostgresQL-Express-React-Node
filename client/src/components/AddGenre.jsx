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

//   CREATE TABLE IF NOT EXISTS public.genres
// (
//     id bigserial NOT NULL,
//     genre_name character varying(45),
//     genre_image text,
//     genre_description text,
//     created_at timestamp with time zone DEFAULT current_timestamp,
//     updated_at timestamp with time zone DEFAULT now(),
//     PRIMARY KEY (id)
// );

// CREATE TABLE IF NOT EXISTS public.anime
// (
//     id bigserial NOT NULL,
//     name character varying(255),
//     episodes integer,
//     image text,
//     year integer,
//     creator character varying(255),
//     genre_id bigint,
//     created_at timestamp with time zone DEFAULT current_timestamp,
//     updated_at timestamp with time zone DEFAULT now(),
//     PRIMARY KEY (id)
// );

  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await AnimeFinder.post("/", {
  //       genre_name,
  //       genre_image,
  //       genre_description,
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
