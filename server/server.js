require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

// Get all Anime
app.get("/api/v1/anime", async (req, res) => {
  try {
    //const results = await db.query("select * from anime");
    const animeData = await db.query(
      "select * from anime INNER JOIN genres ON anime.genre_id=genres.id ORDER BY name ASC;"
    );

    res.status(200).json({
      status: "success",
      results: animeData.rows.length,
      data: {
        anime: animeData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get all Genres
app.get("/api/v1/anime/genre", async (req, res) => {
  try {
    const genreData = await db.query(
      "select * from genres ORDER BY genre_name ASC;"
    );

    res.status(200).json({
      status: "success",
      results: genreData.rows.length,
      data: {
        genre: genreData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get all Anime within a Genre
app.get("/api/v1/anime/genre/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const genreAnimeData = await db.query(
      `select * from anime where anime.genre_id = ${id} ORDER BY name ASC;`
    );

    res.status(200).json({
      status: "success",
      results: genreAnimeData.rows.length,
      data: {
        anime: genreAnimeData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
