import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import NameField from "./input-fields/NameField";
import ColorField from "./input-fields/ColorField";
import KeywordsField from "./input-fields/KeywordsField";
import {useNavigate} from "react-router-dom";
import Button from "../buttons/Button";
import {PickerOverlay} from "filestack-react";
import Backdrop from "../modals/Backdrop";
import { axiosRequest } from "../util/HelperFunctions";

function AddForm(data){
    const [pickerIsOpen, setPickerIsOpen] = useState(false)
    const [uploadComplete, setUploadComplete] = useState(false)
    const [form, setForm] = useState({});    
    const navigate = useNavigate(); 

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })
    }

    const closePicker =() => setPickerIsOpen(false);
    const hidePicker = () => setUploadComplete(true);

    function openPicker (e)  {
        e.preventDefault()
        setPickerIsOpen(true)
        console.log(pickerIsOpen)
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault()
        const values = Object.values(form);
        const allEmpty = values.every(val => val === '');

        if (allEmpty){
            // TODO error handling for trying to sumbit an empty add space form
            console.log("all fields cant be left blank");
        } else {
            try {
                const res = await axiosRequest(data.method, data.url, form);
                console.log(res);
                if(data.navPath === '/allTotesBySpace') {
                    navigate('/allTotesBySpace', {state:{space:data.space}});
                } else {
                    navigate('/allSpaces');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    return (
        <Form>
            <NameField
                type="text"
                placeholder='Name'
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
            <KeywordsField
                type="textarea"
                placeholder='Keywords'
                value={form.keywords}
                onChange={(e) => setField("keywords", e.target.value)}
            />
            <Button title="Submit" onClick={handleAddSubmit}></Button>
        </Form>
    )
}

export default AddForm;