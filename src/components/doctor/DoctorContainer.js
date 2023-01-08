import React from 'react'
import Doctor from './Doctor'
import './doctor.css'

const DoctorContainer = ({ doctors, removeDoctor }) => {
  return (
    <div className='doctor_container'>
      {doctors.map(doctor => {
        return (
          <Doctor
            key={doctor.id}
            doctor={doctor}
            removeDoctor={removeDoctor}
          />
        )
      })}
    </div>
  )
}

export default DoctorContainer