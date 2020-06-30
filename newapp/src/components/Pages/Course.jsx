import React, { useState, useEffect } from "react";

const Courseinfo = ({ match }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch(
      `http://my-json-server.typicode.com/kevinazuaje/json-db/courses/${match.params.id}`,
      {
        method: "get",
      }
    )
      .then((response) => response.json())
      .then((response2) => setState(response2));
  }, []);

  return state ? (
    <div>
      <div className="ed-grid m-grid-3">
        <h1 className="m-cols-3">{state.title} </h1>

        <img className="m-cols-2" src={state.cimage} alt={state.title} />
        <p className="m-cols-1">{state.teacher}</p>
      </div>
    </div>
  ) : (
    <div>
      <h1>no se encontraron cursos disponibles</h1>
    </div>
  );
};
export default Courseinfo;
