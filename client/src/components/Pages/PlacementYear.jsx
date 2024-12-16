import React from 'react'
import "../assets/PlacementYear.css"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'
import TP_Compiled from "../../assets/T&P_compiled_data.pdf"


function PlacementYear() {
  return (
    <>
      <h1 className='placement-year-heading'>Records</h1>
      <div className='placement-year-wrapper'>

        <Link to="/placement-24">
          <div className='record-heading pressed'>
            <h1>2023-2024</h1>
          </div>
        </Link>
        {/* <Link to="/placement-23">
          <div className='record-heading pressed'>
            <h1>2022-023</h1>
          </div>
        </Link> */}
        <Link to="/placement-22">
          <div className='record-heading pressed'>
            <h1>2021-2022</h1>
          </div>
        </Link>
        <Link to="/placement-21">
          <div className='record-heading pressed'>
            <h1>2020-2021</h1>
          </div>
        </Link>
        <Link to="/placement-20">
          <div className='record-heading pressed'>
            <h1>2019-2020</h1>
          </div>
        </Link>

        <a href={TP_Compiled} target='_blank' className='pressed '>

          <div className='record-heading pressed'>
            <h1>Compiled records 2020-2023 </h1>
            <FaExternalLinkAlt />
          </div>

          </a>

      </div>

    </>
  )
}

export default PlacementYear