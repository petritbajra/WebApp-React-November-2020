
import Employee from "./Employee"
import employess from "../employees"


function EmployeeList() {
    const emp = employess.map(x => <Employee data={x} />);
return <div>{emp}</div>;
}

export default EmployeeList;