import React, {useState} from "react";
import {PickerInline, PickerOverlay} from 'filestack-react';
import login from "./welcome/Login";
import { client } from 'filestack-react';
import Button from "../buttons/Button";
function FilePickerModal(props) {



    return (
        <div className='fpModal' >
            <PickerOverlay
                apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                // onUploadDone={ (res) => setField("fileStackUrl", res.filesUploaded[0].url)}
                onSuccess={(res) => console.log(res)}
            />
        </div>
    )

}

export default FilePickerModal;