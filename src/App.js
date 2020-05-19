import React, { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Pagenator from "./components/Pagenator";

export default function App() {
  const [episodes, setEpisodes] = useState([]);
  const [pages, setPage] = useState(1);
  const [activePage, setActivePage] = useState("");

  const getEpisodes = (params = {}) => {
    const { name, page } = params;
    if (name) {
      return axios
        .get(
          `https://rickandmortyapi.com/api/episode?name=${name}&page=${page}`
        )
        .then(res => {
          setEpisodes(res.data.results);
          setPage(res.data.info.pages);
        });
    } else {
      return axios
        .get(`https://rickandmortyapi.com/api/episode?page=${page}`)
        .then(res => {
          setEpisodes(res.data.results);
          setPage(res.data.info.pages);
        });
    }
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <React.Fragment>
      <Header onchange={getEpisodes} />
      <div className="card-container">
        {episodes.map(episode => {
          return (
            <ItemCard
              name={episode.name}
              episode={episode.episode}
              date={episode.air_date}
              id={episode.id}
            />
          );
        })}
      </div>
      <Pagenator
        selectPage={page => {
          setActivePage(page);
          getEpisodes({ page });
        }}
        pages={pages}
        activePage={activePage}
      />
    </React.Fragment>
  );
}
