import React, { useEffect, useContext, useState } from "react";
import { getSingleAnimeCall } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { useHistory, useParams } from "react-router-dom";
import MyLoader from "./MyLoader";

const ShowPage = (props) => {
  const { id } = useParams();
  const { anime, setAnime } = useContext(AnimeContext);
  const { state, setState } = useState(false);
  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
  };
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

  const delay = () => {
    return new Promise(resolve => setTimeout(resolve, 1000));
  };
  


  const fetchData = async () => {
    try {
      await delay();
      const response = await getSingleAnimeCall(id);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      console.log(response.data.data.anime);
      setAnime(response.data.data.anime);
      setState(response.data.data.anime);
    } catch (err) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
    }
  };
  useEffect(() => {
    fetchData();
  }, [state]);

  if (requestStatus === REQUEST_STATUS.LOADING) return <MyLoader></MyLoader>;

  return (
    <div className="list-group container">
        Anime Show Page Component
        <table className="table-active table-bordered table-striped table-hover table-dark table-sm">
        <thead>
          <tr className="bg-secondary text-warning">
            <th scope="col" className="col-md-3-3 text-center border-light">Image</th>
            <th scope="col" className="col-md-3-3 text-center border-light">Name</th>
            <th scope="col" className="col-md-3-3 text-center border-light">Number of Episodes</th>
            <th scope="col" className="col-md-3-3 text-center border-light">Year</th>
          </tr>
        </thead>
        <tbody>
          {anime &&
            anime.map((anime) => {
              return (
                <tr
                  key={anime.id}
                  className="table-active"
                >
                  <td className="col-md-3 text-center border-light"><img src={anime.image} className="img-fluid rounded h-25 w-75 p-1 border border-warning bg-warning"></img></td>
                  <td className="col-md-3 text-center border-light">{anime.name}</td>
                  <td className="col-md-3 text-center border-light">{anime.episodes}</td>
                  <td className="col-md-3 text-center border-light"> {anime.year}</td>
                </tr>
              );
            })}
        </tbody>
        </table>
    </div>
  );
};

export default ShowPage;
