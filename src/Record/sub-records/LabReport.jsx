import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../utilities/NavBar';
import Labvisitreport from '../../utilities/lab-visitreport';



export default function LabReport() {
  let getFormattedRecords = JSON.parse(localStorage.getItem("getFormattedRecords"));
  const { id } = useParams();
  const record = getFormattedRecords[id];
  console.log(id);
  const lab = "lab"
  return (
    <div   className='container'>
        <NavBar lab={lab}/>
        <Labvisitreport/>
        <div className='first-visit-container'>
         <div className='intro'>
            <div>
              <p> Name of Lab :</p>
              <p> Doctor’s Name:</p>
                </div>
                <div className='all'>
                <p>{record.vaccine.join(', ')}</p>
                <p>None, None</p>
              </div>
         </div>
            <div className='none'>
            <p >Date:<span> 02/05/2023
              </span></p>
            <p >Time:<span> 11:59am</span></p>
            </div>
        </div>

         <div className='visit-table'>
            <ul>
              <li>S/N</li>
              <li>Test Name</li>
              <li>Resullt</li>
              <li>Remark</li>
            </ul>
        </div>
        <div className='visit-table-2'>
          <ul>
            <li>#1</li>
            <li>Malaria Parasite Test</li>
            <li>Trophozoite stage of p. falciparium(+) seen</li>
            <li className='disappear'>Remark</li>
            <li style={{color:"#1A4D80"}}>Significant titer of salm spp gignificant titer80</li>
          </ul>
        </div>
    </div>
  )
}
