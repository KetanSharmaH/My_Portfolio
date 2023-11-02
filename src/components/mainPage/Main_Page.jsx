<style>@import url('https://fonts.cdnfonts.com/css/poppins');</style>;

function Main_Page() {
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "30px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ width: "100%", height: "80px" }}
        >
          <a className="navbar-brand" href="index.html">
            <h2 className="fw-bold">
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ms-auto fs-4">
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
      </div>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 vh-100 bg-danger"></div>
            <div className="col-lg-6 vh-100 bg-primary"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main_Page;
