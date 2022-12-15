import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import NameField from "./input-fields/NameField";
import ColorField from "./input-fields/ColorField";
import KeywordsField from "./input-fields/KeywordsField";
import {useNavigate} from "react-router-dom";
import Button from "../buttons/Button";
import {AuthZHeader, axiosPost} from "../util/HelperFunctions";
import axios from "axios";
import Backdrop from "../Modals/Backdrop";
import {PickerInline, PickerOverlay} from "filestack-react";
import FilePickerModal from "../pages/FilePickerModal";

function AddForm(props) {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`/space/add`, form, AuthZHeader())
            console.log(AuthZHeader)
            console.log(response)
            setForm({})
            navigate("/allSpaces")
        } catch (err) {
            console.log(err)
        }
    }
    const [pickerIsOpen, setPickerIsOpen] = useState(false)
    const closePicker =() => setPickerIsOpen(false)
    const OpenPicker = () => {setPickerIsOpen(true)
        console.log(pickerIsOpen)}


    return (
        <Form>
            <NameField
                type="text"
                placeholder="Give It A Name"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
            />
            <ColorField
                type="color"
                placeholder="Choose A Color"
                value={form.color}
                onChange={(e) => setField("color", e.target.value)}
            />
            <Button title='Choose Image' onClick={OpenPicker}/>

            {pickerIsOpen &&
                <PickerOverlay
                apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                onUploadDone={(res) => setField("fileStackUrl", res.filesUploaded[0].url)}
                onSuccess={(res) => console.log(res)}
                />
            }
            {pickerIsOpen && <Backdrop onClick={closePicker}/>}

            <KeywordsField
                type="textarea"
                placeholder="Add Keywords"
                value={form.keywords}
                onChange={(e) => setField("keywords", e.target.value)}
            />
            <Button title="Submit" onClick={handleSubmit}></Button>
        </Form>

    )
}

export default AddForm