// Rendering a <Navigate> will navigate to a new location (URL). The new location will override the current location in the history stack, as server-side redirects (HTTP 3xx) do.

import { useState } from "react";
import { Navigate } from "react-router-dom";

const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";


function HomePageWithNavigate() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) return <Navigate to="/error" />;

  return (
    <div>
      <h1>Home - With Navigate</h1>
      <img src={imgURL} alt="home" className="page-img" />
    </div>
  );
}

export default HomePageWithNavigate;
