import React from 'react'
import "../assets/Placement.css"

function TableBodyRow(props) {
    return (
        <>
            <tr id='table-row-heading' className='border-b-2 border-blue-600 m-2 '>

                <td id='serialno' className=' border-blue-600  p-1 pl-5'>{props.Sno}</td>
                <td>{props.name}</td>
                <td>{props.branch}</td>
                <td>{props.company}</td>

            </tr>
        </>
    )
}

export default TableBodyRow