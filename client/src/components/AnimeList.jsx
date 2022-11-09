import React, { useEffect, useContext, useState } from "react";
import {
  getAnimeCall,
  deleteAnimeCall,
  editAnimeCall,
} from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { useHistory, Link, Redirect } from "react-router-dom";
import MyLoader from "./MyLoader";

const AnimeList = (props) => {
  const { anime, setAnime } = useContext(AnimeContext);
  const { state, setState } = useState(false);
  const history = useHistory();
  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
  };
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const fetchData = async () => {
    try {
      const response = await getAnimeCall();
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      setAnime(response.data.data.anime);
      setState(response.data.data.anime);
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
  }, [state]);

  const deleteHandler = async (id) => {
    try {
      const response = await deleteAnimeCall(id);
      fetchData();
    } catch (err) {
      console.log(err);
      <Redirect to="/error" />;
    }
  };

  const editHandler = (id) => {
    history.push(`/anime/${id}/update`);
  };

  if (requestStatus === REQUEST_STATUS.LOADING) return <MyLoader></MyLoader>;
  if (requestStatus === REQUEST_STATUS.FAILURE) <Redirect to="/error" />;

  return (
    <div className="list-group">
      <table className="table-active table-bordered table-striped table-hover table-dark table-sm">
        <thead>
          <tr className="bg-secondary text-warning">
            <th scope="col" className="col-md-3-3 text-center border-light">
              Image
            </th>
            <th scope="col" className="col-md-3-3 text-center border-light">
              Name
            </th>
            <th scope="col" className="col-md-3-3 text-center border-light">
              Number of Episodes
            </th>
            <th scope="col" className="col-md-3-3 text-center border-light">
              Genre
            </th>
            {localStorage.getItem("authenticatedUser") != null && (
              <th scope="col" className="col-md-3-3 text-center border-light">
                Action(s)
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {anime &&
            anime.map((anime) => {
              return (
                <tr key={anime.id} className="table-active">
                  <td className="col-md-3 text-center border-light">
                    <Link to={`/anime/${anime.id}`}>
                      <img
                        src={anime.image}
                        className="img-fluid rounded h-25 w-75 p-1 border border-warning bg-warning"
                      ></img>
                    </Link>
                  </td>
                  <td className="col-md-3 text-center border-light">
                    {anime.name}
                  </td>
                  <td className="col-md-3 text-center border-light">
                    {anime.episodes}
                  </td>
                  <td className="col-md-3 text-center border-light">
                    {" "}
                    {anime.genre_name}
                  </td>
                  {localStorage.getItem("authenticatedUser") != null && (
                    <td className="col-md-3 text-center border-light">
                      <div className="btn-group-vertical">
                        <button
                          className="btn btn-warning"
                          onClick={() => editHandler(anime.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteHandler(anime.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AnimeList;
