
import Employee from "./Employee"
import employess from "../employees"


function EmployeeList() {
    const emp = [];
    for (let i = 0; i < employess.length; i++) {
        emp.push(<Employee data={employess[i]}/>);
    }

    return (
    <div>{emp}</div>
    )
}

export default EmployeeList;