import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>  {

            this.serState({ employees: res.data});
            

        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List </h2>
            <div className='row'>
                <table className='table table-stripped table-boardered'> 
                    <thead>
                        <tr> 
                            <th> Employee First Name </th>
                            <th> Employee Last Name </th>
                            <th> Employee Email ID </th>
                            <th> Actions </th>
                        </tr>


                    </thead>

                    <tbody>

                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id}> 
                                <td> (employee.lastname)</td>
                                <td> (employee.emailId) </td>


                                </tr>
                            )
                        }
                    </tbody>
                    </table> 




            </div>
            
            
            </div>
        );
    }
}

export default ListEmployeeComponent;