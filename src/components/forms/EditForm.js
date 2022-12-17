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

function EditForm(data){
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name:'',
        color:'',
        fileStackUrl:'',
        keywords: ''
    });

    const setDefaultSpaceValues = () => {
        const keys = Object.keys(form);
        keys.forEach(key => {
          if (form[key] === '') {
            form[key] = data.space[key];
          }
        });
      }      

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })
    }

    const handleAddEditSubmit = async (e) => {
        e.preventDefault()
        const values = Object.values(form);
        const allEmpty = values.every(val => val === '');

        if (allEmpty){
            console.log("all fields cant be left blank");
        } else {
            try {
                setDefaultSpaceValues();
                await data.request(data.url, form);
                const res = await data.axiosRequest;
                console.log(res);
                // FIXME!! --FOR NAVIGATE-- Need to route to AllTotesBySpaceID, space ID is not being passed so axios cant fulfill promise on AllTotesbySpace
                data.setShowSettings(false);
            } catch (error) {
                console.log(error);
            }
        }
    }
    const [pickerIsOpen, setPickerIsOpen] = useState(false)
    const closePicker =() => {
        setPickerIsOpen(false)
    }
    function openPicker (e)  {
        e.preventDefault()
        setPickerIsOpen(true)
        console.log(pickerIsOpen)
    }
    const [uploadComplete, setUploadComplete] = useState(false)
    const hidePicker = () => {setUploadComplete(true)}
    return (
        <Form>
            <NameField
                type="text"
                placeholder={data.space.name}
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
            />
            <ColorField
                type="color"
                placeholder={data.space.color}
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
                placeholder={data.space.keywords}
                value={form.keywords}
                onChange={(e) => setField("keywords", e.target.value)}
            />
            <Button title="Submit" onClick={handleAddEditSubmit}></Button>
        </Form>
    )
}

export default EditForm