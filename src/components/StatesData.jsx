import React from 'react'

function StatesData({states}) {
  // StatesData is an array of objects with the following properties: state, id, confirmedCases, casesOnAdmission, discharged, death
  return (
      <div className='container'>
          <h2>State: {states.state}</h2>
          <h3>Id : {states._id}</h3>
          <p>Confirmed Cases: {states.confirmedCases}</p>
          <p>Cases On Admission : {states.casesOnAdmission}</p>
          <p>Discharged Cases : {states.discharged}</p>
          <p>Total Deaths: {states.death}</p>
      </div>
  );
}

export default StatesData;