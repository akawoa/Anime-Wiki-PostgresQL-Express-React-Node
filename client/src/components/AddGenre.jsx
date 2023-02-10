import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { postGenreAPICall } from "../apis/AnimeFinder";
import { GenresContext } from "../context/GenreContext";

const AddGenre = () => {
  const { addGenres } = useContext(GenresContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [genreNameError, setGenreNameError] = useState("");
  const [genreImageError, setGenreImageError] = useState("");
  const [genreDescriptionError, setGenreDescriptionError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postGenreAPICall({
        genre_name: name,
        genre_image: image,
        genre_description: description,
      });
      console.log(response.data.data);
      console.log(response.status);
      addGenres(response.data.data.genres);
      if (response.status === 201) {
        history.push("/");
      }
    } catch (err) {
      console.log(err);
      <Redirect to="/error" />;
    }
  };

  const handleGenreName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 1) {
      setGenreNameError("Genre Name is Required!");
    } else if (e.target.value.length < 2) {
      setGenreNameError("Genre Name must be 2 characters or longer!");
    } else if (e.target.value.length >= 2) {
      setGenreNameError("");
    }
  };

  const handleGenreImage = (e) => {
    setImage(e.target.value);
    if (e.target.value.toLowerCase().includes(".com") == false ) {
      setGenreImageError("Please enter a valid url!");
    } else if (e.target.value.toLowerCase().includes(".com") == true ) {
      setGenreImageError("");
    }
  };

    const handleGenreDescription = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length < 1) {
      setGenreDescriptionError("Genre Description is Required!");
    } else if (e.target.value.length < 2) {
      setGenreDescriptionError("Genre Description must be 2 characters or longer!");
    } else if (e.target.value.length >= 2) {
      setGenreDescriptionError("");
    }
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
                onChange={handleGenreName}
                className="form-control"
              />
            </div>
            <span className="text-danger">{genreNameError}</span>
            <div className="form-group">
              <label htmlFor="image">Image Link</label>
              <input
                type="text"
                value={image}
                onChange={handleGenreImage}
                className="form-control"
              />
              <span className="text-danger">{genreImageError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                rows="4"
                onChange={handleGenreDescription}
              ></textarea>
            </div>
            <span className="text-danger">{genreDescriptionError}</span>
            <br></br>
            <br></br>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Add Genre
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGenre;

// import React, { useState, useContext, useEffect } from "react";
// import { Redirect, useHistory } from "react-router-dom";
// import AnimeFinder, { getGenreCall, postAnimeAPICall } from "../apis/AnimeFinder";
// import { AnimeContext } from "../context/AnimeContext";
// import { GenresContext } from "../context/GenreContext";

// const AddAnime = () => {
//   const { addAnime } = useContext(AnimeContext);
//   const [name, setName] = useState("");
//   const [episodes, setEpisodes] = useState();
//   const [image, setImage] = useState("");
//   const [year, setYear] = useState();
//   const [creator, setCreator] = useState("");
//   const [genreID, setGenreID] = useState();
//   const { genres, setGenres } = useContext(GenresContext);
//   const { state, setState } = useState(false);
//   const { response, setResponse } = useState();
//   const history = useHistory()

//   const fetchData = async () => {
//     try {
//       const response = await getGenreCall();
//       console.log(response.data.data);
//       setGenres(response.data.data.genre);
//       setState(response.data.data);
//     } catch (err) {}
//   };
//   useEffect(() => {
//     fetchData();
//   }, [state]);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await postGenreAPICall({
//       name,
//       episodes,
//       image,
//       year,
//       creator,
//       genre_id: genreID
//     });
//     console.log(response.data.data);
//     console.log(response.status);
//     addGenre(response.data.data.anime);
//     if(response.status === 201) {
//       console.log('The response is equal to 201');
//       history.push("/")
//     }
//   } catch (err) {
//     console.log(err);
//     <Redirect to="/error" />
//   }
// };

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

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await postAnimeAPICall({
//       name,
//       episodes,
//       image,
//       year,
//       creator,
//       genre_id: genreID
//     });
//     console.log(response.data.data);
//     console.log(response.status);
//     addAnime(response.data.data.anime);
//     if(response.status === 201) {
//       console.log('The response is equal to 201');
//       history.push("/anime")
//     }
//   } catch (err) {
//     console.log(err);
//     <Redirect to="/error" />
//   }
// };
//   return (
// <div className="container-fluid">
//   <h3 className="font-weight-light text-left">
//   Add an Anime
//   </h3>
//   <div className="row">
//     <div className="col-md-12">
//       <form role="form">
//         <div className="form-group">

// <label htmlFor="name">
//             Name
//           </label>
//           <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="form-control" />
//         </div>
//         <div className="form-group">
//             <label htmlFor="episodes">
//                         Number of Episodes
//                       </label>
//                       <input
//                       type="number"
//                       value={episodes}
//                       onChange={(e) => setEpisodes(e.target.value)}
//                       className="form-control" />
//                     </div>
//                     <div className="form-group">
//             <label htmlFor="image">
//                         Image Link
//                       </label>
//                       <input
//                       type="text"
//                       value={image}
//                       onChange={(e) => setImage(e.target.value)}
//                       className="form-control" />
//                     </div>
//                     <div className="form-group">
//             <label htmlFor="year">
//                         Year
//                       </label>
//                       <input
//                       type="number"
//                       value={year}
//                       onChange={(e) => setYear(e.target.value)}
//                       className="form-control" />
//                     </div>
//         <div className="form-group">
//           <label htmlFor="creator">
//             Creator
//           </label>
//           <input
//           type="text"
//           value={creator}
//           onChange={(e) => setCreator(e.target.value)}
//           className="form-control" />
//         </div>
//         <div className="form-group">
//         </div>
//                 <div className="form-group">
//                 <label htmlFor="select_genre">Genre</label>
//                 <select
//                   className="form-control"
//                   id="genre"
//                   value={genreID}
//                   onChange={(e) => setGenreID(e.target.value)}
//                   >
//                   <option value="" disabled selected hidden>Choose a genre</option>
//                 {genres &&
//                   genres.map((genre) => {
//                   return (
//                     <option value={genre.id} key={genre.id}>{genre.genre_name}</option>
//                   );
//                 })}
//                 </select>
//         </div>
// <div className="form-group">
// <label htmlFor="description">
//             Description
//           </label>
//           <textarea className="form-control" rows="4"></textarea>
// </div>
//         <button
//         onClick={handleSubmit}
//         type="submit"
//         className="btn btn-primary">
//           Add Anime
//         </button>
//       </form>
//     </div>
//   </div>
// </div>
// // /*
//     <div className="mb-2">
//         Add Anime Component
//     <div className="mb-2">
//         <div className="mb-4">
//       <form action="">
//         <div className="form-row">
//           <div className="col">
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               className="form-control"
//               placeholder="name"
//             />
//           </div>
//           <div className="col">
//             <input
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="form-control"
//               type="text"
//               placeholder="location"
//             />
//           </div>
//           <div className="col">
//             <select
//               value={priceRange}
//               onChange={(e) => setPriceRange(e.target.value)}
//               className="custom-select my-1 mr-sm-2"
//             >
//               <option disabled>Price Range</option>
//               <option value="1">$</option>
//               <option value="2">$$</option>
//               <option value="3">$$$</option>
//               <option value="4">$$$$</option>
//               <option value="5">$$$$$</option>
//             </select>
//           </div>
//           <button
//             onClick={handleSubmit}
//             type="submit"
//             className="btn btn-primary"
//           >
//             Add
//           </button>
//         </div>
//                <div className="form-row">
//           <div className="col">
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               className="form-control"
//               placeholder="name"
//             />
//           </div>
//           <div className="col">
//             <input
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="form-control"
//               type="text"
//               placeholder="location"
//             />
//           </div>
//           <div className="col">
//             <select
//               value={priceRange}
//               onChange={(e) => setPriceRange(e.target.value)}
//               className="custom-select my-1 mr-sm-2"
//             >
//               <option disabled>Price Range</option>
//               <option value="1">$</option>
//               <option value="2">$$</option>
//               <option value="3">$$$</option>
//               <option value="4">$$$$</option>
//               <option value="5">$$$$$</option>
//             </select>
//           </div>
//           <button
//             onClick={handleSubmit}
//             type="submit"
//             className="btn btn-primary"
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </div>

//     </div>
//     </div>
//     */
//   );
// };

// export default AddAnime;
