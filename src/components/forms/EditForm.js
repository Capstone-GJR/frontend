import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import NameField from "./input-fields/NameField";
import ColorField from "./input-fields/ColorField";
import KeywordsField from "./input-fields/KeywordsField";
import Button from "../buttons/Button";
import {PickerOverlay} from "filestack-react";
import Backdrop from "../modals/Backdrop";
import { axiosRequest } from "../util/HelperFunctions";
import FormInput from "./FormInput";

function EditForm(props){
    const [pickerIsOpen, setPickerIsOpen] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [form, setForm] = useState({
        name:'',
        color:'',
        fileStackUrl:'',
        keywords: ''
    });

    const setDefaultValues = () => {
        const keys = Object.keys(form);
        keys.forEach(key => {
          if (form[key] === '') {
            form[key] = props.userObject.component[key];
          }
        });
      }      

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault()
        // TODO! Can break out into helper function
        const values = Object.values(form);
        const allEmpty = values.every(val => val === '');

        if (allEmpty){
            // TODO! handle error messaging
            console.log("all fields cant be left blank");
        } else {
            try {
                setDefaultValues();
                const res = await axiosRequest('PUT', props.putUrl, form)
                console.log(res);
                props.setShowSettings(false);
            } catch (error) {
                console.log(error);
            }
        }
    }
    const closePicker =() => setPickerIsOpen(false);
    const hidePicker = () => setUploadComplete(true);

    function openPicker (e)  {
        e.preventDefault()
        setPickerIsOpen(true)
    }

    const handleDeleteClick = async () => {
        try {
            const res = await axiosRequest('DELETE', props.deleteUrl);
            console.log(res);
            props.setShowSettings(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Form>
            <NameField
                type="text"
                placeholder={props.userObject.component.name}
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
            />
            <ColorField
                type="color"
                value={form.color}
                onChange={(e) => setField("color", e.target.value)}
            />
            {!uploadComplete ?
                <div className="picker">
                    <Button title='Choose Image' onClick={openPicker}/>
                    {pickerIsOpen &&
                        <PickerOverlay
                            apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                            onUploadDone={(res) => {
                                setField("fileStackUrl", res.filesUploaded[0].url)
                                closePicker()
                            }}
                            onSuccess={(res) => {
                                console.log(res)
                                hidePicker()
                            }}
                        />
                    }
                    {/*FIXME: When closing the filePicker via it's built X button the backdrop does not close. Without the backdrop to run "closePicker," if you click the X instead of upload the useState does not change to false so picker keeps reshowing. */}
                    {pickerIsOpen && <Backdrop onClick={closePicker}/>}
                 </div>
                :
                <div>
                    <img className="detailsImg" src={form.fileStackUrl} alt="image here"/>
                </div>
            }

            { props.componentType === 'item' && 
                <FormInput
                    type='number'
                    label='Value'
                    placeholder={props.userObject.component.value}
                    value={form.value}
                    onChange={(e)=> setField('value', e.target.value)}
                />
            }

            <KeywordsField
                type="textarea"
                placeholder={props.userObject.component.keywords}
                value={form.keywords}
                onChange={(e) => setField("keywords", e.target.value)}
            />
            <Button title="Submit" onClick={handleEditSubmit}></Button>
            <Button
                title={props.backBtn}
                onClick={() => props.setShowSettings(false)}
            />
            <Button
                title="Delete"
                onClick={handleDeleteClick}
                width="w-75"
            />
        </Form>
    )
}

export default EditForm