import Overlay from "./Overlay";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Logos from "./Logos";

function Main_Page() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
        rel="stylesheet"
      ></link>
      <Overlay />
      <NavBar />
      <div style={{ height: "740px" }}></div>
      <AboutMe />
      <Logos />
      <section>
        <div className="container" style={{ marginTop: "180px" }}>
          <div className="row">
            <div className="col-3">
              <ul className="navbar-nav " id="sticky-sidebar">
                <li>Education</li>
                <li>Experience</li>
                <li>Skills</li>
              </ul>
            </div>
            <div className="col-9">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main_Page;
