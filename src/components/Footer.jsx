import logo from "../images/logo.png";
import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn  } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className={`container p-4 text-white ${styles.footer}`}>
        <div className="row justify-content-evenly">
          <div className={`col-3 ${styles.cols}`}>
            <img src={logo} alt="" className={styles.logo} />
            <p className="mb-4">
              Weather you are planning for a vacation or any Bussiness Trip or
              any Adventural Trip, Our Ready to fly Offers a Friendly to meet
              your Flight booking needs
            </p>
            <div className={`row mb-3 ${styles.icon}`}>
              <div className={`col ${styles.fb}`}>
                 <FaFacebookF />
              </div>
              <div className={`col ${styles.tweet}`}>
                <FaXTwitter/>
              </div>
              <div className={`col ${styles.lin}`}>
                <FaLinkedinIn/>
              </div>
              <div className={`col ${styles.inst}`}>
                  <BsInstagram/>
              </div>
            </div>
          </div>

          <div className={`col-3 ${styles.cols}`}>
            <h6>Book With us</h6>
            <p><a href="">AirLines we Tickets</a></p>
            <p><a href="">Book now Pay Later</a></p>
            <p><a href="">Pay the way you want</a></p>
            <p><a href="">You are Protected</a></p>
            <p><a href="">Our Customer Service</a></p>
            <p><a href="">Travel Agents</a></p>
          </div>

          <div className={`col-3 ${styles.cols}`}>
                <h6>My Bookings</h6>
                <p><a href="">Manage My Bookings</a></p>
                <p><a href="">Help Cnter</a></p>
                <p><a href="">FAQ's</a></p>
                <p><a href="">Contact us</a></p>
                <p><a href="">Travel Advice</a></p>
          </div>

          <div className={`col-3 ${styles.cols}`}>
                <h6>Company</h6>
                <p><a href="">About us</a></p>
                <p><a href="">Reviews</a></p>
                <p><a href="">Blog</a></p>
                <p><a href="">Media Center</a></p>
                <p><a href="">Carrers</a></p>
          </div>
        </div>
        <div className="text-center">Privacy | Terms | siteMap</div>
      </div>
    </>
  );
}

export default Footer;
