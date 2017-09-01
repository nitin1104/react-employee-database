import React from 'react';
import ReactDOM from 'react-dom';

class ListToShow extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			
		}
	}
    render () {
		var employeeList = this.props.listData.map((item, index) => {
			return <tr key = {index}>
				<td>{item.firstName}</td>
				<td>{item.lastName}</td>
				<td>{item.skills}</td>
				<td>{item.company}</td>
				<td>
				<a href="#" key={index}>
					<span className="glyphicon glyphicon-pencil"></span>
				</a>
				<span> | </span>
				<a href="#">
					<span className="glyphicon glyphicon-trash"></span>
				</a>
			</td>
			</tr>
		})
        return (
            <div>
                <h2 className="sub-header">List of Employees</h2>
				<div className="table-responsive">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Skills</th>
								<th>Company</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{employeeList}
						</tbody>
					</table>
				</div>
            </div>
        )
    }
}

export default ListToShow;