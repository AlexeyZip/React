import React from "react";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageText" placeholder="Enter your message"/>
            </div>
            <div><button>send message</button></div>
        </form>
        </div>
    )
}


export default reduxForm({form:'dialogAddMessageForm'}) (AddMessageForm);