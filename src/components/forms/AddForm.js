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
import FormInput from "./FormInput";

function AddForm(props){

    const navigate = useNavigate(); 
    const [pickerIsOpen, setPickerIsOpen] = useState(false)
    const [uploadComplete, setUploadComplete] = useState(false)
    const [form, setForm] = useState({
        name:'',
        keywords:''
    });    

    const setField = (field, value) => {
        if(props.componentType === 'item') 
            setForm({value:''});
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

    const redirect = () => {
        if(props.componentType === 'tote') {
            navigate('/allTotesBySpace', {
                state:{space:props.space}
            });
        } else if (props.componentType === 'item') {
            navigate('/allItemsByToteId', {
                state:{tote:props.tote}
            })
        } else {
            navigate('/allSpaces');
        }
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault()
        // TODO! Can break out into helper function
        const values = Object.values(form);
        const allEmpty = values.every(val => val === '');
        const hasEmptyField = values.some(val => val === '');

        if (allEmpty || hasEmptyField){
            // TODO! error handling for trying to submit an empty or partial empty form
            console.log("fields left blank");
        } else {
            try {
                const res = await axiosRequest('POST', props.addUrl, form);
                console.log(res);
                redirect();
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    return (
        <Form className="m-auto w-100">
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
            
            { props.componentType === 'item' && 
                <FormInput
                    type='number'
                    label='Value'
                    placeholder='Dollar Amount'
                    value={form.value}
                    onChange={(e)=> setField('value', e.target.value)}
                />
            }

            <KeywordsField
                type="textarea"
                placeholder='Keywords'
                value={form.keywords}
                onChange={(e) => setField("keywords", e.target.value)}
            />
            
            <Button 
                title="Submit" 
                onClick={handleAddSubmit}
                >
            </Button>
        </Form>
    )
}

export default AddForm;