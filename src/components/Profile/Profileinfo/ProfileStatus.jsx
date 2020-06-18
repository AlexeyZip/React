import React from 'react';
import s from './Profileinfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode()  {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode()  {
        this.setState({
            editMode: false
        });
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div className="">
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                    <div className="">
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus