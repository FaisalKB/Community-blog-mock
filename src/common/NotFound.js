import React from "react";
import { Link } from "react-router-dom";

/*
  TODO: Change the <a> below to a <Link> to the home page
  // DONE!!! See line 13!!
*/

export const NotFound = () => (
  <main className="container">
    <p>Page not found!</p>
    <p>
      <Link to="/">Return Home</Link>
    </p>
  </main>
);

export default NotFound;
