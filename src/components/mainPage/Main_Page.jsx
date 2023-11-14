<style>@import url('https://fonts.cdnfonts.com/css/poppins');</style>;

function Main_Page() {
  return (
    <>
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
          <a className="navbar-brand" href="index.html">
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        <section><div className="row"><div className="col-6"></div><div className="col-6">About</div></div></section>
    </>
  );
}

export default Main_Page;
