import React from "react";

import Card from "react-bootstrap/Card";
export default function ItemCard(props) {
  return (
    <Card bg="dark" text="white" style={{ width: "250px", margin: "2em" }}>
      <Card.Img
        variant="top"
        src={`https://rickandmortyapi.com/api/character/avatar/${
          props.id
        }.jpeg`}
      />
      <Card.Body>
        <Card.Title style={{ height: "3em" }}>{props.name}</Card.Title>
        <Card.Text>Date: {props.date}</Card.Text>
        <Card.Text>Episode: {props.episode}</Card.Text>
      </Card.Body>
    </Card>
  );
}
