import React from 'react'


export default function TeamMemberList(props) {
    const { data } = props;


    return (
        <div>
            <h2>Team Member List</h2>
            <ul>
                {data.map((employeeObj) => {
                    return (
                        <h3>{`Employee: ${employeeObj.fname} ${employeeObj.lname} -- ${employeeObj.role}`}</h3>
                    )
                })};
            </ul>
            

        </div>
    )
}