import MyImage from "../../assets/images/My_image.jpeg";

function AboutMe() {
  return (
    <section>
      <div
        className="container"
        id="about-section"
        style={{ color: "black", fontFamily: "Poppins, sans-serif" }}
      >
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5 p-0">
            <img
              src={MyImage}
              alt="Image"
              style={{maxWidth:'100%', maxHeight: "100%"}}
            />
          </div>
          <div className="col-6 mt-4 ps-5 fadeInUp ftco-animated ftco-animate">
            <div className="row">
              <div className="col-12">
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
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button
                  className="btn rounded-pill px-3 py-3 btn-primary fw-bold"
                  style={{ marginTop: "38px" }}
                >
                  DOWNLOAD CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
