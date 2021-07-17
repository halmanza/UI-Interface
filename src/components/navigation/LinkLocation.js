import React from "react";
import { useLocation } from "react-router";

// Used in the Header component to display the current route
 export const LinkLocation=()=>{
    const location=useLocation();
    return <p>{location.pathname}</p>
  }

  export default LinkLocation;