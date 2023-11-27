import MapIcon from "../../assets/images/MapIcon.jsx";
import PhoneIcon from "../../assets/images/PhoneIcon.jsx";
import EmailIcon from "../../assets/images/EmailIcon.jsx";

function ContactMe() {
  return (
    <section id="contact-section">
      <hr style={{ marginTop: "180px" }} />
      <div className="container fs-2 fw-bold ">
        <div className="row">
          <div className="text-center mt-4">Contact Me</div>
        </div>
        <div className="row text-center mt-5 fs-5">
          <div
            className="col-md-6 col-lg-4  "
            style={{ alignContent: "center" }}
          >
            <div className="p-3 m-2 box shadow">
              <div>
                <MapIcon />
              </div>
              Address
              <hr />
              <p>Punjabi Colony, Ulhasnagar-3</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="p-3 m-2 box shadow">
              <div>
                <PhoneIcon />
              </div>
              Contact Number
              <hr />
              <p>+91 8237581906</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="p-3 m-2 box shadow">
              <div>
                <EmailIcon />
              </div>
              Email Address
              <hr />
              <p>ketansharma9700@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
