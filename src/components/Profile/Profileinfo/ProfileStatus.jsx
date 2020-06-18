import React from 'react';
import s from './Profileinfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () =>  {
        console.log("this:",this)
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () =>  {
        this.setState({
            editMode: false
        });
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div className="">
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                    <div className="">
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus