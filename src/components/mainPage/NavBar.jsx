function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container align-items-baseline sticky-top">
      <a
        className="navbar-brand"
        href="index.html"
        style={{
          top: "10px",
        }}
      >
        <h2 className="fw-bold fs-4">
          <span className="bg-primary form-control-color rounded-end-circle text-bg-danger">
            K
          </span>
          etan
        </h2>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ top: "10px" }}
      >
        <ul className="navbar-nav nav mr-auto ms-auto" style={{ fontSize: "17px" }}>
          <li className="nav-item me-4 ms-4">
            <a href="#home-section" className="nav-link">
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item me-4 ms-4">
            <a href="#about-section" className="nav-link">
              <span>About</span>
            </a>
          </li>
          <li className="nav-item me-4 ms-4">
            <a href="#resume-section" className="nav-link">
              <span>Resume</span>
            </a>
          </li>
          <li className="nav-item me-4 ms-4">
            <a href="#projects-section" className="nav-link">
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-item me-4 ms-4">
            <a href="#contact-section" className="nav-link">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
