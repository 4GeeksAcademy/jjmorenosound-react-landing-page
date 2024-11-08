import React from "react";


const navbarContent = {
    siteUrl: "",
    siteLabel: "Buffy",
    homeUrl: "",
    homeLabel: "home",
    aboutUrl: "https://buffy.fandom.com/wiki/Buffy_the_Vampire_Slayer_and_Angel",
    aboutLabel: "about",
    servicesUrl: "https://buffy.fandom.com/wiki/Buffy_Summers",
    servicesLabel: "services",
    contactUrl: "https://buffy.fandom.com/wiki/Rupert_Giles",
    contactLabel: "contact"

}


export const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick="window.location.reload()">
            {navbarContent.siteLabel}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick="window.location.reload()">
                  {navbarContent.homeLabel}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={navbarContent.aboutUrl}>
                  {navbarContent.aboutLabel}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={navbarContent.servicesUrl}>
                  {navbarContent.servicesLabel}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={navbarContent.contactUrl}>
                  {navbarContent.contactLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };