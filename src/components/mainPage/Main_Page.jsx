import Overlay from "./Overlay";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Logos from "./Logos";
import Resume from "./Resume";
import ContactMe from "./ContactMe";

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
      <Resume />
      <ContactMe />
    </>
  );
}

export default Main_Page;
