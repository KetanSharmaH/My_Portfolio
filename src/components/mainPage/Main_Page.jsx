function Main_Page() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
        rel="stylesheet"
      ></link>
      <section className="hero-wrap" id="home">
        <div className="overlay"></div>
      </section>
      <nav
        className="navbar navbar-expand-lg navbar-light container align-items-baseline"
        style={{
          width: "100%",
          height: "800px",
          marginTop: "10px",
          fontFamily: "Poppins, sans-serif",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <a
          className="navbar-brand"
          href="index.html"
          style={{
            position: "sticky",
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
          style={{ position: "sticky", top: "10px" }}
        >
          <ul
            className="navbar-nav mr-auto ms-auto"
            style={{ fontSize: "17px" }}
          >
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
      <section style={{ fontFamily: "Poppins, sans-serif" }}>
        <div className="container" style={{ color: "black" }}>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6 mt-4 ps-5">
              <h1 className="fw-bold">About me</h1>
              <ul className="mt-5 fw-bold ps-0">
                <li className="d-flex mb-3">
                  <span style={{ width: "32%" }}>Name:</span>
                  <span>Ketan Sharma</span>
                </li>
                <li className="d-flex mb-3">
                  <span style={{ width: "32%" }}>Date of birth:</span>
                  <span>November 11, 2000</span>
                </li>
                <li className="d-flex mb-3">
                  <span style={{ width: "32%" }}>Address</span>
                  <span>Maharashtra Ulhasnagar India</span>
                </li>
                <li className="d-flex mb-3">
                  <span style={{ width: "32%" }}>Zip code:</span>
                  <span>421003</span>
                </li>
                <li className="d-flex mb-3">
                  <span style={{ width: "32%" }}>Email:</span>
                  <span>ketansharma9700@gmail.com</span>
                </li>
                <li className="d-flex mb-3">
                  <span style={{ width: "32%" }}>Phone:</span>
                  <span>8237581906</span>
                </li>
              </ul>
              <button className="btn rounded-pill mt-5 px-3 py-3 btn-primary fw-bold">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main_Page;
