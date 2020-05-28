import React, { Component } from 'react'
import PropTypes from 'prop-types';

class User extends Component {


static defaultProps ={

    name:"Static bilgi"
}


    render() {

        const { name, department, salary } = this.props;

        return (
            <div>
                <ul>
                    <li>Name : {name}</li>
                    <li>Salary : {salary}</li>
                    <li>Departmant : {department}</li>
                </ul>


            </div>
        )
    }
}

User.defaultProps = {

    name: "İsim yok",
    salary: "maaş yok",
    department: "Department Bilgisi yok"
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired

}



export default User;
