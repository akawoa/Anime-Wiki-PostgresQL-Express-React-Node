import React, { useEffect, useContext, useState } from "react";
import { getAnimeInGenre } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { useHistory, useParams, Redirect, Link } from "react-router-dom";
import MyLoader from "./MyLoader";

const AllAnimeInGivenGenre = (props) => {
    const { id } = useParams();
  const { anime, setAnime } = useContext(AnimeContext);
  let history = useHistory();
  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
  };
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnimeInGenre(id);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        console.log(response.data.data);
        setAnime(response.data.data.anime);
      } catch (err) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
      }
    };
    fetchData();
  }, []);

  if (requestStatus === REQUEST_STATUS.LOADING) return <MyLoader></MyLoader>;
  if (requestStatus === REQUEST_STATUS.FAILURE) <Redirect to="/error" />;

  return (
    <div className="list-group container">
        All Anime In Given Genre
        <table className="table-active table-bordered table-striped table-hover table-dark table-sm">
        <thead>
          <tr className="bg-secondary text-warning">
            <th scope="col" className="col-md-3-3 text-center border-light">Image</th>
            <th scope="col" className="col-md-3-3 text-center border-light">Name</th>
            <th scope="col" className="col-md-3-3 text-center border-light">Number of Episodes</th>
            <th scope="col" className="col-md-3-3 text-center border-light">Genre</th>
          </tr>
        </thead>
        <tbody>
        {/* <Link to={`/anime/${genre.id}`}><img src={genre.genre_image} class="img-fluid rounded p-1 border border-warning bg-warning w-50"></img></Link> */}
          {anime &&
            anime.map((anime) => {
              return (
                <tr
                  key={anime.id}
                  className="table-active"
                >
                  <td className="col-md-3 text-center border-light"><Link to={`/anime/${anime.id}`}><img src={anime.image} className="img-fluid rounded h-25 w-75 p-1 border border-warning bg-warning"></img></Link></td>
                  <td className="col-md-3 text-center border-light">{anime.name}</td>
                  <td className="col-md-3 text-center border-light">{anime.episodes}</td>
                  <td className="col-md-3 text-center border-light"> {anime.genre_name}</td>
                </tr>
              );
            })}
        </tbody>
        </table>
    </div>
  );
};

export default AllAnimeInGivenGenre;
