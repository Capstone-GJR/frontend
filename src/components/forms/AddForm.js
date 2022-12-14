import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import NameField from "./input-fields/NameField";
import ColorField from "./input-fields/ColorField";
import KeywordsField from "./input-fields/KeywordsField";
import {useNavigate} from "react-router-dom";
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
            const response =  await axios.post(`/space/add`, form, AuthZHeader())
            console.log(AuthZHeader)
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
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filePicker">
                    File picker
                </button>
                <div className="modal fade" id="filePicker" tabIndex="-1" aria-labelledby="filePicker"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="filePickerLabel">Choose an image</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            {/*----------PICKER----------------*/}
                            <PickerInline
                                apikey={'A2vZPoGIoRiePhI4DbTFcz'}
                                onUploadDone={ (res) => setField("fileStackUrl", res.filesUploaded[0].url)}
                                onSuccess={(res) => console.log(res)}
                            />
                            {/*<Button title='consoleLog' onClick={()=>console.log(imageUrl)}/>*/}
                            {/*    ------------------------------------*/}
                        </div>
                    </div>
                </div>
            </div>

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