import React, {useState} from "react";
import {PickerInline, PickerOverlay} from 'filestack-react';
import login from "./welcome/Login";
import { client } from 'filestack-react';
import Button from "../buttons/Button";
function FilePicker(props) {
    const [imageUrl, setImageUrl] = useState('')

    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filePicker">
                File picker
            </button>
            <div className="modal fade" id="filePicker" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Choose an image</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        {/*----------PICKER----------------*/}
                        <PickerInline
                            apikey={'A2vZPoGIoRiePhI4DbTFcz'}
                            onUploadDone={ (res) => setImageUrl(res.filesUploaded[0].url)}
                            onSuccess={(res) => console.log(res)}
                        />
            <Button title='consoleLog' onClick={()=>console.log(imageUrl)}/>
                    {/*    ------------------------------------*/}
                    </div>
                </div>
            </div>
        </div>
    )

}
// setImageUrl(res.filesUploaded[0].url)
// console.log(imageUrl)
export default FilePicker;