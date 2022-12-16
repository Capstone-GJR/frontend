import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import NameField from "./input-fields/NameField";
import ColorField from "./input-fields/ColorField";
import KeywordsField from "./input-fields/KeywordsField";
import ImageField from "./input-fields/ImageField";
import {useNavigate} from "react-router-dom";
import Button from "../buttons/Button";

function AddEditForm(props){
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await props.request(props.url, form);
        // FIXME!! Need to route to AllTotesBySpaceID, space ID is not being passed so axios cant fullfill promise
        navigate('/allSpaces');
        props.setShowSettings(false);
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
            {/*<ImageField*/}
            {/*    type="file"*/}
            {/*    placeholder="Select An Image"*/}
            {/*    value={form.fileStackUrl}*/}
            {/*    onChange={(e) => setField("fileStackUrl", e.target.value)}*/}
            {/*/>*/}
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

export default AddEditForm