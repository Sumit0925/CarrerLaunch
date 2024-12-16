import React from 'react';
import "../assets/Placement.css"
import placementRecords from '../placementRecords'
import TableBodyRow from './TableBodyRow';

function Placement() {
    return (
        <>
            <h1 className='placement-heading'>Placement Records</h1>
            <div className='table-wrapper rounded-lg w-[90%] display-flex justify-center overflow-hidden border border-blue-600'>
                <table className='w-full text-black-500'>
                    <thead className='table-head border-b-2 border-blue-600'>
                        <tr>
                            <th id='table-heading' className='table-heading text-start pl-4'>S No.</th>
                            <th id='table-heading' className='table-heading text-start pl-9'>Name</th>

                            <th id='table-heading' className='table-heading text-start pl-8'>

                                <h1 className='table-heading p-2 '>Discipline</h1>

                            </th>
                            <th id='table-heading' className='table-heading text-start pl-7'>

                                <h1 className='table-head p-2'>Recruiter</h1>

                            </th>


                        </tr>

                    </thead>
                    <tbody className=''>
                        {placementRecords.map((records,index) => {
                            return (
                            <TableBodyRow 
                            key={index}
                            Sno={index+1}
                            name={records.name}
                            branch={records.branch}
                            company={records.company}
                            />
                        )
                        })}







                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Placement