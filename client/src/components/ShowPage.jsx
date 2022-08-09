import React, { useEffect, useContext, useState } from "react";
import { getSingleAnimeCall } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { useHistory, useParams } from "react-router-dom";

const ShowPage = (props) => {
  const { id } = useParams();
  const { anime, setAnime } = useContext(AnimeContext);
  const { state, setState } = useState(false);
  const fetchData = async () => {
    try {
      const response = await getSingleAnimeCall(id);
      console.log(response.data.data.anime);
      setAnime(response.data.data.anime);
      setState(response.data.data.anime);
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
  }, [state]);

  return (
    <div class="list-group container">
        Anime Show Page Component
        <table class="table-active table-bordered table-striped table-hover table-dark table-sm">
        <thead>
          <tr className="bg-secondary text-warning">
            <th scope="col" class="col-md-3-3 text-center border-light">Image</th>
            <th scope="col" class="col-md-3-3 text-center border-light">Name</th>
            <th scope="col" class="col-md-3-3 text-center border-light">Number of Episodes</th>
            <th scope="col" class="col-md-3-3 text-center border-light">Year</th>
          </tr>
        </thead>
        <tbody>
          {anime &&
            anime.map((anime) => {
              return (
                <tr
                  key={anime.id}
                  class="table-active"
                >
                  <td class="col-md-3 text-center border-light"><img src={anime.image} class="img-fluid rounded h-25 w-75 p-1 border border-warning bg-warning"></img></td>
                  <td class="col-md-3 text-center border-light">{anime.name}</td>
                  <td class="col-md-3 text-center border-light">{anime.episodes}</td>
                  <td class="col-md-3 text-center border-light"> {anime.year}</td>
                </tr>
              );
            })}
        </tbody>
        </table>
    </div>
  );
};

export default ShowPage;
