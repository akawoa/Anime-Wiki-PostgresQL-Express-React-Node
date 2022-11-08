require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

// Get all Anime
app.get("/api/v1/anime", async (req, res) => {
  try {
    //const results = await db.query("select * from anime");
    const animeData = await db.query(
      "select anime.id as id, name as name, episodes as episodes, image as image, year as year, creator as creator, genre_id as genre_id, genre_name as genre_name from anime INNER JOIN genres ON anime.genre_id=genres.id ORDER BY name ASC;"
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
      // `select * from anime where anime.genre_id = ${id}  ORDER BY name ASC;`
      `select anime.id as id, name as name, episodes as episodes, image as image, year as year, creator as creator, genre_id as genre_id, genre_name as genre_name from anime LEFT JOIN genres ON anime.genre_id=genres.id WHERE anime.genre_id = ${id} ORDER BY name ASC;`
      // `select * from anime  LEFT JOIN genres ON anime.genre_id = genres.id WHERE anime.genre_id = ${id};`
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

// Get a Single Anime By ID
app.get("/api/v1/anime/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const animeData = await db.query(`select * from anime where id = ${id};`);

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

// Create an Anime
app.post("/api/v1/anime/new", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO anime (name, episodes, image, year, creator, genre_id) values ($1, $2, $3, $4, $5, $6) returning *",
      [
        req.body.name,
        req.body.episodes,
        req.body.image,
        req.body.year,
        req.body.creator,
        req.body.genre_id,
      ]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        anime: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Edit an Anime
app.put("/api/v1/anime/:id/update", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);

  try {
    const results = await db.query(
      `UPDATE anime SET name = $1, episodes = $2, image = $3, year = $4, creator = $5, genre_id = $6 where id = ${id} returning *;`,
      [
        req.body.name,
        req.body.episodes,
        req.body.image,
        req.body.year,
        req.body.creator,
        req.body.genre_id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        anime: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Delete an Anime
app.delete("/api/v1/anime/:id", async (req, res) => {
  const { id } = req.params;
  console.log("req is equal to :" + req);
  try {
    const results = await db.query(`DELETE FROM anime where id = ${id};`);
    // const results = await db.query("DELETE FROM anime where id = $1", [id]);
    res.status(204).json({
      status: "sucess",
    });
    console.log("success status achieved!?");
  } catch (err) {
    console.log(err);
  }
});

//Delete a Genre
app.delete("/api/v1/genre/:id", async (req, res) => {
  const { id } = req.params;
  console.log("req is equal to :" + req);
  try {
    const results = await db.query(`DELETE FROM genres where id = ${id};`);
    // const results = await db.query("DELETE FROM anime where id = $1", [id]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err) {
    console.log(err);
  }
});

// Create a Genre
app.post("/api/v1/genre/new", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO genres (genre_name, genre_image, genre_description) values ($1, $2, $3) returning *",
      [req.body.genre_name, req.body.genre_image, req.body.genre_description]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        genre: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get a Single Genre By ID
app.get("/api/v1/genre/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const genreData = await db.query(`select * from genres where id = ${id};`);

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

// Edit a Genre
app.put("/api/v1/genre/:id/update", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);

  try {
    const results = await db.query(
      `UPDATE genres SET genre_name = $1, genre_image = $2, genre_description = $3 where id = ${id} returning *;`,
      [req.body.genre_name, req.body.genre_image, req.body.genre_description]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        genre: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Create new User
app.post("/api/v1/user/new", async (req, res) => {
  console.log(req.body);
  hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const results = await db.query(
      "INSERT INTO users (first, last, username, email, password) values ($1, $2, $3, $4, $5) returning *",
      [
        req.body.first,
        req.body.last,
        req.body.username,
        req.body.email,
        hashedPassword,
      ]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        user: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Login an existing User
app.post("/api/v1/user/login", async (req, res) => {
  console.log(req.body);
  loginPassword = req.body.password;
  try {
    const results = await db.query(
      `select * from users where username = '${req.body.username}'`
    );
    console.log("Login Password is: " + loginPassword);
    console.log("Password is : " + results.rows[0].password);
    const auth = await bcrypt.compare(loginPassword, results.rows[0].password);
    if (auth === true) {
      console.log("Password is correct!");
      // console.log(results);
      res.status(201).json({
        status: "success",
        data: {
          user: results.rows[0],
        },
      });
    } else {
      throw err;
    }
  } catch (err) {
    // console.log(results);
    // res.status(201).json({
    //   status: "success",
    //   data: {
    //     user: results.rows[0],
    //   },
    // });
    // }
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
