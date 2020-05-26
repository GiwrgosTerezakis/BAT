import React from "react";

import COMPAS from "./COMPAS";
function DataAnalysis({ match }) {
  switch (match.params.id) {
    case "1":
      return (
        <div>
          
          <COMPAS/>
        </div>
      );
    case "2":
      return (
        <div>
          <h1>2</h1>
        </div>
      );
    case "3":
      return (
        <div>
          <h1>3</h1>
        </div>
      );
    case "4":
      return (
        <div>
          <h1>4</h1>
        </div>
      );
    case "5":
      return (
        <div>
          <h1>5</h1>
        </div>
      );
  }
}
export default DataAnalysis;
