import React, { useEffect, useContext, useState } from "react";
import { getGenreCall, deleteGenreCall } from "../apis/AnimeFinder";
import { GenresContext } from "../context/GenreContext";
import { useHistory, Link, Redirect } from "react-router-dom";
import MyLoader from "./MyLoader";

const GenreList = (props) => {
  const { genres, setGenres } = useContext(GenresContext);
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
      const response = await getGenreCall();
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      console.log(response.data.data);
      setGenres(response.data.data.genre);
      setState(response.data.data);
    } catch (err) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
    }
  };
  useEffect(() => {
    fetchData();
  }, [state]);

  const deleteHandler = async (id) => {
    try {
      const response = await deleteGenreCall(id);
      console.log(response.status);
      fetchData();
    } catch (err) {
      console.log(err);
      <Redirect to="/error" />;
    }
  };

  const editHandler = (id) => {
    history.push(`/genre/${id}/update`);
  };

  if (requestStatus === REQUEST_STATUS.LOADING) return <MyLoader></MyLoader>;
  if (requestStatus === REQUEST_STATUS.FAILURE) <Redirect to="/error" />;

  return (
    <div className="list-group container">
      Genre List Component
      <table className="table table-bordered table-striped table-hover table-dark table-sm">
        <thead>
          <tr className="bg-secondary text-warning">
            <th scope="col" className="col-md-4-4 text-center border-light">
              Name
            </th>
            <th scope="col" className="col-md-8-8 text-center border-light">
              Genre Description
            </th>
            <th scope="col" className="col-md-8-8 text-center border-light">
              Genre Image
            </th>
            {localStorage.getItem("authenticatedUser") != null && (
              <th scope="col" className="col-md-3-3 text-center border-light">
                Action(s)
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {genres &&
            genres.map((genre) => {
              return (
                <tr key={genre.id} className="table-active">
                  <td className="col-md-1 align-middle text-center border-light">
                    {genre.genre_name}
                  </td>
                  <td className="col-md-3 align-middle text-center border-light">
                    {genre.genre_description}
                  </td>
                  <td className="col-md-8 text-center border-light">
                    <Link to={`/anime/genre/${genre.id}`}>
                      <img
                        src={genre.genre_image}
                        className="img-fluid rounded p-1 border border-warning bg-warning w-50"
                      ></img>
                    </Link>
                  </td>
                  {localStorage.getItem("authenticatedUser") != null && (
                    <td className="col-md-3 align-middle text-center border-light">
                      <div className="btn-group-vertical">
                        <button
                          class="btn btn-warning"
                          onClick={() => editHandler(genre.id)}
                        >
                          Edit
                        </button>
                        <button
                          class="btn btn-danger"
                          onClick={() => deleteHandler(genre.id)}
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

export default GenreList;
