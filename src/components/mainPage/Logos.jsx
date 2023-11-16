import JavaPng from "../../assets/images/Java.png";
import ReactPng from "../../assets/images/React.png";
import HTMLPng from "../../assets/images/HTML.png";
import CSSPng from "../../assets/images/CSS.png";
import JSPng from "../../assets/images/JS.png";
import MySQLPng from "../../assets/images/MySQL.png";
import AzurePng from "../../assets/images/Azure.png";

function Logos() {
  return (
    <section className="pt-4">
      <div className="row pt-4 fadeInUp ftco-animated">
        <div className="col-1" style={{ width: "60px" }}></div>
        <div className="col-sm p-0 align-self-md-center d-flex">
          <img
            src={JavaPng}
            alt="Java"
            style={{ height: "auto", width: "180px" }}
          />
        </div>
        <div className="col-sm p-0 align-self-md-center d-flex">
          <img
            src={ReactPng}
            alt="React"
            style={{ height: "auto", width: "160px" }}
          />
        </div>
        <div className="col-sm p-0 align-self-md-center d-flex">
          <img
            className="ps-3"
            src={HTMLPng}
            alt="HTML"
            style={{ height: "auto", width: "130px" }}
          />
        </div>
        <div className="col-sm p-0 align-self-md-center d-flex">
          <img
            src={CSSPng}
            alt="CSS"
            style={{ height: "auto", width: "83px" }}
          />
        </div>
        <div className="col-sm p-0 align-self-md-center d-flex">
          <img
            src={JSPng}
            alt="JavaScript"
            style={{ height: "auto", width: "83px" }}
          />
        </div>
        <div className="col-sm p-0 align-self-md-center d-flex">
          <img
            src={MySQLPng}
            alt="MySQL"
            style={{ height: "auto", width: "120px" }}
          />
        </div>
        <div className="col-sm p-0 align-self-md-center d-flex">
          <img
            src={AzurePng}
            alt="Azure"
            style={{ height: "auto", width: "120px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Logos;
