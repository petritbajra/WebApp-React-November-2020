

function Employee (props) {
    const {
        profileUrl,
        firstName, 
        lastName, 
        title, 
        address, 
        phoneNumber
    } = props.data;
    return (
        <div className="employee">
        <img src={profileUrl} alt= "Profile" />
        <div className="employee-info">
            <h2>Full Name: {`${firstName} ${lastName}`}</h2>
            <h2>Title: {title}</h2>
            <h2>Address: {address}</h2>
            <h2>Phone Number: {phoneNumber}</h2>
        </div>
        <hr/>
    </div>
    )
}

export default Employee;