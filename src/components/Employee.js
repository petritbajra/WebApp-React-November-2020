function Employee (props) {
    return (
        <div className="employee">
        <img src={props.profileUrl} alt= "Profile" />
        <div className="employee-info">
            <h2>Full Name: {`${props.firstName} ${props.lastName}`}</h2>
            <h2>Title: {props.title}</h2>
            <h2>Address: {props.address}</h2>
            <h2>Phone Number: {props.phoneNumber}</h2>
        </div>
        <hr/>
    </div>
    )
}

export default Employee;