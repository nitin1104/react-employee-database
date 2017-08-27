import React from 'react';
import ReactDOM from 'react-dom'

class AddForm extends React.Component {
    render () {
        return (
            <div>
                <form>
				    <div className="form-group">
                        <label>First Name</label>
                        <input type ="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type ="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Skills</label>
                        <input type ="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Company</label>
                        <input type ="text" className="form-control"/>
                    </div>
                     <button type="submit" className="btn btn-default">Submit</button>
				</form>
            </div>
        )
    }
}
export default AddForm;