import React, { useEffect, useContext } from "react";
import AnimeFinder from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { useHistory } from "react-router-dom";

const AnimeList = (props) => {
  const { anime, setAnime } = useContext(AnimeContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AnimeFinder.get("/");
        console.log(response.data.data);
        setAnime(response.data.data.anime);
      } catch (err) {}
    };

    fetchData();
  }, []);

  return (
    <div className="list-group">
        Anime List Component
        <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Name</th>
            <th scope="col">Number of Episodes</th>
            <th scope="col">Year</th>
            <th scope="col">Creator</th>
          </tr>
        </thead>
        <tbody>
          {anime &&
            anime.map((anime) => {
              return (
                <tr
                  key={anime.id}
                >
                  <td>{anime.name}</td>
                  <td>{anime.id}</td>
                  <td>{"$".repeat(anime.id)}</td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
              );
            })}
        </tbody>
        </table>
    </div>
  );
};

export default AnimeList;
