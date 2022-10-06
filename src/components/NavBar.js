import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const myListLinks = links.map(element => <a key={element} href={"#" + element}>{element}</a>)
  return <nav>{/* display an <a> tag for each link here */myListLinks}</nav>;
}

export default NavBar;
