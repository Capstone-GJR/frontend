import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import NameField from "./input-fields/NameField";
import ColorField from "./input-fields/ColorField";
import KeywordsField from "./input-fields/KeywordsField";
import {useNavigate} from "react-router-dom";
import Button from "../buttons/Button";
import {AuthZHeader, axiosPost} from "../util/HelperFunctions";
import axios from "axios";
import FilePickerModal from "../pages/FilePickerModal";
import Backdrop from "../Modals/Backdrop";
import {PickerOverlay} from "filestack-react";

function AddForm(props) {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [showPicker, setsShowPicker] = useState(false)

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

    function OpenPicker() {
        setsShowPicker(true);
    }

    function closePicker() {
        setsShowPicker(false)
    }

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
            {showPicker && <PickerOverlay
                apikey={'A2vZPoGIoRiePhI4DbTFcz'}
                onUploadDone={(res) => setField("fileStackUrl", res.filesUploaded[0].url)}
                onSuccess={(res) => console.log(res)}
            />}
            {showPicker && <Backdrop onClick={closePicker}/>}

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