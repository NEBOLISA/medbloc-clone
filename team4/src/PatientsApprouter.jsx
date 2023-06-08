import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./landing/landing";
import Login from "./login/login";
import SideBar from "./utilities/SideBar";
import Dashboard from "./dashboard/dashboard";
// import Billing from "./billings/Billing";
import './App.css';
import Drafts from "./draffts/Drafts";
import PatientsBilling from "../src/billings/PatientsBilling";
import "./App.css";
import SideBarDoc from "./utilities/SideBarDoc";
import Overview from "./Record/sub-records/overview";
import Lab from "./Record/sub-records/lab";
import Vaccine from "./Record/sub-records/vaccine";
import Visit from "./Record/sub-records/visit";
import Prescription from "./Record/sub-records/prescription";
import PatientsRecord from "./Record/PatientsRecord";
import DoctorsBilling from "./billings/DoctorsBilling";
import DoctorsDashboard from "./dashboard/DoctorsDashboard";
import DoctorsDrafts from "./draffts/DoctorsDrafts";
import PatientPaymentHistory from "../src/billings/PatientPaymentHistory";
import PatientInvoice from "../src/billings/PatientInvoice";
import ConsultationBilling from "../src/billings/ConsultationBilling";
import DoctorPaymentHistory from "../src/billings/DoctorPaymentHistory";
import SchedulePage from "./dashboard/schedulepages/SchedulePage";
import DoctorsProfile from "./dashboard/profilepages/DoctorsProfile";
import PatientsProfile from "./dashboard/profilepages/PatientsProfile";
import PatientsEditProfile from "./dashboard/profilepages/PatientsEditProfile";
import DoctorsEditProfile from "./dashboard/profilepages/DoctorsEditProfile";
import LabReport from "./Record/sub-records/LabReport";
import VisiterReport from "./Record/sub-records/visiterReport";
import Signingup from "./login/signingup";
import PatientInvoiceConfirmation from "./billings/PatientInvoiceConfirmation";
import ApprovedPage from "./billings/ApprovedPage";
import DoctorInvoiceSent from "./billings/DoctorInvoiceSent";



// note!!!
// i have only created the router part for the signup , login and Landing page.
// subsequent route path would follow suite.

function Approuter() {
      
  return (
    <Router>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Landing />} />
       
 {/* routes to the doctors signin and login in */}
 <Route path="signup" element={<Signingup/>} /> 
        <Route path="login" element={<Login/>} />

   
         <Route path="PatientPaymentHistory" element={<AuthUserLayout><PatientPaymentHistory/></AuthUserLayout>} />
         <Route path="PatientInvoice" element={<AuthUserLayout><PatientInvoice/></AuthUserLayout>} /> 
         <Route path="ApprovedPage" element={<AuthUserLayout><ApprovedPage/></AuthUserLayout>} />
         <Route path="PatientInvoiceConfirmation" element={<AuthUserLayout><PatientInvoiceConfirmation/></AuthUserLayout>} />
         <Route path="DoctorInvoiceSent" element={<AuthUserLayout><DoctorInvoiceSent/></AuthUserLayout>} />
  
         {/* {Routes to patients app and the sub components} */}
         <Route path="Dashboard" element={<AuthUserLayout><Dashboard  /></AuthUserLayout>} />
         <Route path="Billing" element={<AuthUserLayout><PatientsBilling/></AuthUserLayout>} />
        <Route path="Records" element={<AuthUserLayout><PatientsRecord/></AuthUserLayout>}>
          <Route index ="overview" element={<Overview />} />
          <Route path="lab" element={<Lab />} />
          <Route path="vaccine" element={<Vaccine />} />
          <Route path="visit" element={<Visit />} />
          <Route path="prescription" element={<Prescription />} />
        </Route>
        <Route path="Lab-report" element={<AuthUserLayout><LabReport/></AuthUserLayout>}/>
        <Route path="visiterReport" element={<AuthUserLayout><VisiterReport/></AuthUserLayout>}/>
        <Route path="Draft" element={<AuthUserLayout><Drafts /></AuthUserLayout>} />
{/* {routes to doctors app and the sub components} */}

<Route path="/DocDashboard" element={<AuthDocLayout><DoctorsDashboard/></AuthDocLayout>}/>
      <Route path="/DocBillings" element={<AuthDocLayout><DoctorsBilling/></AuthDocLayout>}/>
      {/* <Route path="/DocPatientPaymentHistory" element={<AuthDocLayout><DoctorsBilling/></AuthDocLayout>}/> */}
      <Route path="/DoctorPaymentHistory" element={<AuthDocLayout><DoctorPaymentHistory/></AuthDocLayout>}/>
      <Route path="/DocDraft" element={<AuthDocLayout><DoctorsDrafts/></AuthDocLayout>}/>
      <Route path="DoctorsBilling" element={<AuthDocLayout><DoctorsBilling/></AuthDocLayout>}/>
      <Route path="/ConsultationBilling" element={<AuthDocLayout><ConsultationBilling/></AuthDocLayout>}/>
     




       
       
         
        
       




       
       
        <Route
          path="Profile"
          element={
            <AuthUserLayout>
              <PatientsProfile />
            </AuthUserLayout>
          }
        />
        <Route
          path="EditProfile"
          element={
            <AuthUserLayout>
              <PatientsEditProfile />
            </AuthUserLayout>
          }
        />

        <Route
          path="/DocSchedule"
          element={
            <AuthDocLayout>
              <SchedulePage />
            </AuthDocLayout>
          }
        />
        <Route
          path="/DocProfile"
          element={
            <AuthDocLayout>
              <DoctorsProfile />
            </AuthDocLayout>
          }
        />
        <Route
          path="/DocEditProfile"
          element={
            <AuthDocLayout>
              <DoctorsEditProfile />
            </AuthDocLayout>
          }
        />
      </Routes>
    </Router>
  );
}
const AuthUserLayout = ({ children }) => {
  return (
    <div className="Layout">
      <SideBar />
      {children}
    </div>
  );
};
const AuthDocLayout = ({ children }) => {
  return (
    <div className="Layout">
      <SideBarDoc />
      {children}
    </div>
  );
};

export default Approuter;
