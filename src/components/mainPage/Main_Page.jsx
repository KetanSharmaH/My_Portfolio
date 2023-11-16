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
      <AboutMe />
      <Logos />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">Education</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main_Page;
