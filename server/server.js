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
    const animeData = await db.query("select * from anime;");

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

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
