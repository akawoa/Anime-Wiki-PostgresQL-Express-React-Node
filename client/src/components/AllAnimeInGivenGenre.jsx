import React, { useEffect, useContext } from "react";
import { getAnimeInGenre } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { useHistory, useParams, Link } from "react-router-dom";

const AllAnimeInGivenGenre = (props) => {
    const { id } = useParams();
  const { anime, setAnime } = useContext(AnimeContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnimeInGenre(id);
        console.log(response.data.data);
        setAnime(response.data.data.anime);
      } catch (err) {}
    };
    fetchData();
  }, []);



  return (
    <div class="list-group container">
        All Anime In Given Genre
        <table class="table-active table-bordered table-striped table-hover table-dark table-sm">
        <thead>
          <tr className="bg-secondary text-warning">
            <th scope="col" class="col-md-3-3 text-center border-light">Image</th>
            <th scope="col" class="col-md-3-3 text-center border-light">Name</th>
            <th scope="col" class="col-md-3-3 text-center border-light">Number of Episodes</th>
            <th scope="col" class="col-md-3-3 text-center border-light">Genre</th>
          </tr>
        </thead>
        <tbody>
        {/* <Link to={`/anime/${genre.id}`}><img src={genre.genre_image} class="img-fluid rounded p-1 border border-warning bg-warning w-50"></img></Link> */}
          {anime &&
            anime.map((anime) => {
              return (
                <tr
                  key={anime.id}
                  class="table-active"
                >
                  <td class="col-md-3 text-center border-light"><Link to={`/anime/${anime.id}`}><img src={anime.image} class="img-fluid rounded h-25 w-75 p-1 border border-warning bg-warning"></img></Link></td>
                  <td class="col-md-3 text-center border-light">{anime.name}</td>
                  <td class="col-md-3 text-center border-light">{anime.episodes}</td>
                  <td class="col-md-3 text-center border-light"> {anime.genre_name}</td>
                </tr>
              );
            })}
        </tbody>
        </table>
    </div>
  );
};

export default AllAnimeInGivenGenre;
