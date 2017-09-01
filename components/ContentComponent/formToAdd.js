import React from 'react';
import ReactDOM from 'react-dom'

class AddForm extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			form: {
				firstName: "",
				lastName: "",
				skills: "",
				company: ""
			}
		}
		this.saveClickHandler = this.saveClickHandler.bind(this);
	}

	saveClickHandler(data) {
		this.props.updateList(data)
	}

	handleChange (propertyName, event) {
    const form = this.state.form;
    form[propertyName] = event.target.value;
	 this.setState({ form: form });
  }

    render () {
        return (
            <div>
                <form>
				    <div className="form-group">
                        <label>First Name</label>
                        <input type ="text" className="form-control" value={this.state.form.firstName} onChange={this.handleChange.bind(this, 'firstName')} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type ="text" className="form-control" value={this.state.form.lastName} onChange={this.handleChange.bind(this, 'lastName')}/>
                    </div>
                    <div className="form-group">
                        <label>Skills</label>
                        <input type ="text" className="form-control" value={this.state.form.skills} onChange={this.handleChange.bind(this, 'skills')}/>
                    </div>
                    <div className="form-group">
                        <label>Company</label>
                        <input type ="text" className="form-control" value={this.state.form.company} onChange={this.handleChange.bind(this, 'company')}/>
                    </div>
							<button type="button" className="btn btn-default" onClick={() => this.saveClickHandler(this.state.form)}>Save</button>
					</form>
            </div>
        )
    }
}
export default AddForm;