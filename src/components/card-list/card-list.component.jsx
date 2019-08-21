import React from "react";
import "./card-list.styles.css";

import { Card } from "../card/card.component";

export const CardList = props => (
  // if (props.monsters.length === 0) {
  //   return <h1>Loading...</h1>;
  // }
  // return (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
  // );
);
