import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <img className="car" src={props.img} />
        <h1 className="card-title">{props.title}</h1>
        <div className="card-specs">
          <p>{props.specs}</p>
        </div>

      </div>
    </>
  )
}

export default Card