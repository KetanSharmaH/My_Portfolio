function Resume() {
  return (
    <section id="resume-section">
      <div
        className="container"
        style={{ marginTop: "180px", fontFamily: "Poppins, sans-serif" }}
      >
        <div className="row fadeInUp ftco-animated">
          <div className="col-3">
            <ul className="navbar-nav nav fw-bold fs-5" id="sticky-sidebar">
              <li className="nav-item">
                <a href="#EducationTab" className="nav-link">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a href="#ExperienceTab" className="nav-link">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a href="#SkillsTab" className="nav-link">
                  Skills
                </a>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <div className="container p-0" id="EducationTab">
              <h2 className="fw-bold mb-5">Education</h2>

              <div className="ps-5">
                <span className="date fw-bold">2015-2016</span>
                <div className="text">
                  <h2 className="fw-bold">
                    Secondary School Certificate(X<sup>th</sup>)
                  </h2>
                </div>
                <div className="fw-bold mt-3">
                  <span>Bhartiya Hindi High School - 73.40%</span>
                </div>
              </div>
              <hr />
              <div className="ps-5">
                <span className="date fw-bold">2017-2018</span>
                <div className="text">
                  <h2 className="fw-bold">
                    Higher Secondary School Certificate(XII<sup>th</sup>)
                  </h2>
                </div>
                <div className="fw-bold mt-3">
                  <span>Pet Oxford Junior College - 71.23%</span>
                </div>
              </div>
              <hr />
              <div className="ps-5">
                <span className="date fw-bold">2018-2021</span>
                <div className="text">
                  <h2 className="fw-bold">
                    Bachelor of Science in Information Technology
                  </h2>
                </div>
                <div className="fw-bold mt-3">
                  <span>
                    Smt. Chandibai Himathmal Mansukhani College - 8.12 CGPS
                  </span>
                </div>
              </div>
              <hr />
            </div>
            <div className="container p-0" id="ExperienceTab">
              <h2 className="fw-bold mb-5" style={{ marginTop: "120px" }}>
                Experience
              </h2>
              <div className="ps-5">
                <span className="date fw-bold">2022-2023</span>
                <div className="text">
                  <h2 className="fw-bold">Wipro Technologies</h2>
                </div>
                <div className="fw-bold mt-3">
                  <span>Graduate Trainee</span>
                </div>
                
              </div>
              <div className="ps-5">
                <hr/>
                <span className="date fw-bold">2024-present</span>
                <div className="text">
                  <h2 className="fw-bold">Yotta Data Services</h2>
                </div>
                <div className="fw-bold mt-3">
                  <span>It-Operations Executive</span>
                </div>
                
              </div>
              <hr />
              <div className="container p-0" id="SkillsTab">
                <h2 className="fw-bold mb-5" style={{ marginTop: "120px" }}>
                  Skills
                </h2>
                <div className="ps-5">
                  <div className="text">
                    <h4 className="fw-bold">HTML</h4>
                  </div>
                  <hr />
                  <div className="text">
                    <h4 className="fw-bold">CSS</h4>
                  </div>
                  <hr />
                  <div className="text">
                    <h4 className="fw-bold">JavaScript</h4>
                  </div>
                  <hr />
                  <div className="text">
                    <h4 className="fw-bold">Java</h4>
                  </div>
                  <hr />
                  <div className="text">
                    <h4 className="fw-bold">Microsoft Azure</h4>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
