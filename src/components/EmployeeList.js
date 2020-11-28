
import Employee from "./Employee"

const employeeOne = {
        profileUrl: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
        firstName: "Maria",
        lastName: "Smith",
        title: "Manager",
        phoneNumber: "+1 123 123 1234",
        address: "New York, NY"
}

const employeeTwo = {
        profileUrl: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
        firstName: "John",
        lastName: "Smith",
        title: "Manager",
        phoneNumber: "+1 123 123 1234",
        address: "New York, NY"
}

const employeeThree = {
    profileUrl: "https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png",
    firstName: "Matthew",
    lastName: "Johnson",
    title: "Manager",
    phoneNumber: "+1 123 123 1234",
    address: "New York, NY"
}

function EmployeeList() {
    return (
        <div>
            <Employee data= {employeeOne} /> 
            <Employee data={employeeTwo} /> 
            <Employee data={employeeThree} /> 
        </div>
    )
}

export default EmployeeList;