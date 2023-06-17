import React from "react";
import SideBar from "../utilities/SideBar";
import "./billing.css";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import Notification from "../assets/images/Notification.png";
import PatientPics from "../assets/images/PatientPics.png";
import Show from "../assets/images/Show.png";
import Dollar from "../assets/images/CurrencyDollarOutline.png";
import ArrowDown2 from "../assets/images/ArrowDown2.png";
import BlockIcon from "../assets/images/BlockIcon.png";
import ArrowDown from "../assets/images/ArrowDown.png";
import ArrowUp from "../assets/images/ArrowUp.png";
import ArrowSlant from "../assets/images/ArrowSlant.png";
import Calendar from "../assets/images/Calendar.png";
import BlockIconResize from "../assets/images/BlockIconResize.png";
import { useNavigate } from "react-router-dom";

export default function PatientsBilling() {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/PatientPaymentHistory");
  }
  let updatedFirstName = localStorage.getItem("patient_firstName");
  let updatedLastName = localStorage.getItem("patient_lastName");
  let existingName = localStorage.getItem("patient_name");
  let patient_Image = localStorage.getItem("patient_image");
  function handlePress(e) {
    navigate("/PatientInvoice");
  }

  return (
    <>
      <div className="Right">
        <div className="billingBoardDashboard">
          <div className="billingNav">
            <div className="patientName">
              <h2>
                Hello,{" "}
                {updatedFirstName
                  ? updatedFirstName
                  : existingName.split(" ")[0]}{" "}
                <br />{" "}
                {updatedLastName ? updatedLastName : existingName.split(" ")[1]}
              </h2>
            </div>

            <div className="searchParent">
              <div className="searchBox">
                <CiSearch />
                <input type="text" placeholder="Search.." />
              </div>

              <div className="searchIcons">
                <img src={Notification} alt="pics" />
                <img
                  style={{ boxShadow: "1px 2px 4px rgb(224 222 222)" }}
                  src={patient_Image ? patient_Image : PatientPics}
                  alt="pics"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Hero">
          <div className="HeroLeft">
            <div className="paymentCard">
              <div className="cardDetails">
                <div className="MoneyOptionLeft">
                  <div className="portfolio">
                    <p>Portfolio Balance</p>
                    <img src={Show} alt="pics" />
                  </div>
                  <div className="Money">
                    <img src={Dollar} alt="pics" />
                    <h3>200,000</h3>
                  </div>
                </div>
                <div className="MoneyOptionRight">
                  <p>USD</p>
                  <img src={ArrowDown2} alt="pics" />
                </div>
              </div>
            </div>
            <div className="BillingCards">
              <div className="BillingCard">
                <div className="BillingCardContent1">
                  <img src={ArrowDown} alt="pics" />
                  <p>Deposit</p>
                </div>
              </div>

              <div className="BillingCard">
                <div className="BillingCardContent1">
                  <img src={ArrowUp} alt="pics" />
                  <p>Withdraw</p>
                </div>
              </div>

              <div className="BillingCard">
                <div className="BillingCardContent1">
                  <img src={ArrowSlant} alt="pics" />
                  <p>Send</p>
                </div>
              </div>
            </div>
          </div>

          <div className="HeroRight">
            <img src={BlockIcon} alt="pics" />
            {/* <img src={BlockIconResize} alt/> */}
          </div>
        </div>

        <div className="Dashboard">
          <div className="patientDashboardHeading">
            <p>Payment History</p>
          </div>
          <div className="patientDashboard">
            <div className="patientNav">
              <ul>
                <li>Name</li>
                <li>Status</li>
                <li>Amount </li>
              </ul>
            </div>

            <div className="PatientEntities" onClick={handleClick}>
              <ul>
                <li>Dr. Ada</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Charl</li>
                <li className="Declined">Declined</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Chris</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Kemisola</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
            </div>
          </div>
          <div className="ViewAll">
            <p onClick={handleClick}>View all</p>
          </div>
          {/* /////////////////////////down////////////////////////////// */}
          <div className="patientDashboardHeading">
            <p>Invoice Statement</p>
          </div>
          <div className="patientDashboard">
            <div className="patientNav">
              <ul>
                <li>Name</li>
                <li>Status</li>
                <li>Amount </li>
              </ul>
            </div>

            <div className="PatientEntities" onClick={handlePress}>
              <ul>
                <li>Dr. Ada</li>
                <li className="Successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Charl</li>
                <li className="Declined">Declined</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Chris</li>
                <li className="Successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Kemisola</li>
                <li className="Successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
            </div>
          </div>

          <div className="ViewAll">
            <p onClick={handlePress}>View all</p>
          </div>
        </div>
      </div>
    </>
  );
}
