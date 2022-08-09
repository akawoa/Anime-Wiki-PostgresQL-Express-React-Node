import React, { useEffect, useContext, useState } from "react";
import { getGenreCall } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { GenresContext } from "../context/GenreContext";
import { useHistory, Link } from "react-router-dom";

const GenreList = (props) => {
  const { genres, setGenres } = useContext(GenresContext);
  const { state, setState } = useState([]);

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
  }, []);

//   useEffect(() => {
//     axios.get("http://localhost:8000/api/authors")
//         .then(res => setAuthors(res.data))
//         .catch(err => console.log(err))
// }, [state])



  return (
    <div class="list-group container">
        Genre List Component
        <table class="table table-bordered table-striped table-hover table-dark table-sm">
        <thead>
          <tr className="bg-secondary text-warning">
          <th scope="col" class="col-md-4-4 text-center border-light">Name</th>
            <th scope="col" class="col-md-8-8 text-center border-light">Genre Image</th>
          </tr>
        </thead>
        <tbody>
          {genres &&
            genres.map((genre) => {
              return (
                <tr
                  key={genre.id}
                  class="table-active"
                >
                  <td class="col-md-2 align-middle text-center border-light">{genre.genre_name}</td>
                  <td class="col-md-10 text-center border-light"><Link to={`/anime/genre/${genre.id}`}><img src={genre.genre_image} class="img-fluid rounded p-1 border border-warning bg-warning w-50"></img></Link></td>
                </tr>
              );
            })}
        </tbody>
        </table>
    </div>
  );
};

export default GenreList;
