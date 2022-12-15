import React, {useState} from "react";
import {PickerInline, PickerOverlay} from 'filestack-react';
import login from "./welcome/Login";
import { client } from 'filestack-react';
import Button from "../buttons/Button";
function FilePickerModal(props) {



    return (
        <div className='fpModal' >
            <PickerOverlay
                apikey={'A2vZPoGIoRiePhI4DbTFcz'}
                // onUploadDone={ (res) => setField("fileStackUrl", res.filesUploaded[0].url)}
                onSuccess={(res) => console.log(res)}
            />
        </div>
    )

}

export default FilePickerModal;