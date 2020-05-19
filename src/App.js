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
  const [error, setError] = useState(false);
  const getEpisodes = (params = {}) => {
    const { name, page } = params;
    if (name) {
      return axios
        .get(
          `https://rickandmortyapi.com/api/episode?name=${name}&page=${page}`
        )
        .then(res => {
          setError(false);
          setEpisodes(res.data.results);
          setPage(res.data.info.pages);
        })
        .catch(err => setError(true));
    } else {
      return axios
        .get(`https://rickandmortyapi.com/api/episode?page=${page}`)
        .then(res => {
          setError(false);
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
      {!error ? (
        <div className="card-container">
          {episodes.map(episode => {
            return (
              <ItemCard
                key={episode.id}
                name={episode.name}
                episode={episode.episode}
                date={episode.air_date}
                id={episode.id}
              />
            );
          })}
        </div>
      ) : (
        <h1 className="error">No Results Found</h1>
      )}
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
