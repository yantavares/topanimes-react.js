import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { animes } from "./animes";
import Anime from "./Anime";

function AnimeList() {
  const getAnime = (id) => {
    const anime = animes.find((anime) => anime.id === id);
    console.log(anime);
  };
  return (
    <>
      <h2 className="title">
        Top 10 Anime List by{" "}
        <a className="link" href="https://github.com/yantavares">
          yantavares
        </a>{" "}
      </h2>
      <section className="about shadow">
        {" "}
        I don't really watch that musch anime so don't take this list too
        seriously. I made this site in order to learn the basics of the React
        framework :){" "}
      </section>
      <section className="animelist">
        {animes.map((anime, index) => {
          return (
            <Anime
              {...anime}
              key={anime.id}
              getAnime={getAnime}
              number={index}
            />
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AnimeList />);
