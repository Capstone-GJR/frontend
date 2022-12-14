import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import NameField from "./input-fields/NameField";
import ColorField from "./input-fields/ColorField";
import KeywordsField from "./input-fields/KeywordsField";
import ImageField from "./input-fields/ImageField";
import {useNavigate} from "react-router-dom";
// import {useState} from "@types/react";
import Button from "../buttons/Button";
import {AuthZHeader, axiosPost} from "../util/HelperFunctions";
import axios from "axios";
import {PickerInline} from "filestack-react";

function AddForm(props){
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
        try{
            const response =  await axios.post(`/space/add`, form, AuthZHeader)
            console.log(response)
            setForm({})
            navigate("/allSpaces")
        }
        catch(err){
            console.log(err)
        }



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
            {/*<PickerInline*/}
            {/*    apikey={'A2vZPoGIoRiePhI4DbTFcz'}*/}
            {/*    onUploadDone={ (res) => {*/}
            {/*        console.log(res.filesUploaded[0].url)*/}
            {/*        // setImageUrl(res.filesUploaded[0].url)*/}

            {/*    }}*/}
            {/*    onSuccess={(res) => console.log(res)}*/}
            {/*/>*/}
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

export default AddForm