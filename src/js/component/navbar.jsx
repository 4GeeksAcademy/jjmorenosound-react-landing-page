import React from "react";


const navbarContent = {
    siteUrl: "https://githubuniverse.com/?utm_source=github&utm_medium=banner&utm_campaign=24banner16li",
    siteLabel: "Buffy",
    homeUrl: "https://githubuniverse.com/?utm_source=github&utm_medium=banner&utm_campaign=24banner16li",
    homeLabel: "home",
    aboutUrl: "https://githubuniverse.com/?utm_source=github&utm_medium=banner&utm_campaign=24banner16li",
    aboutLabel: "about",
    servicesUrl: "https://githubuniverse.com/?utm_source=github&utm_medium=banner&utm_campaign=24banner16li",
    servicesLabel: "services",
    contactUrl: "https://githubuniverse.com/?utm_source=github&utm_medium=banner&utm_campaign=24banner16li",
    contactLabel: "contact"

}


export const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href={navbarContent.siteUrl}>
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
                <a className="nav-link active" aria-current="page" href={navbarContent.homeUrl}>
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