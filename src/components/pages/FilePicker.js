import React, {useState} from "react";
import {PickerInline, PickerOverlay} from 'filestack-react';

function FilePicker(props) {
    const [imageUrl, setImageUrl] = useState('')


    return (
        <div>
            {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filePicker">*/}
            {/*    File picker*/}
            {/*</button>*/}
            {/*<div className="modal fade" id="filePicker" tabIndex="-1" aria-labelledby="exampleModalLabel"*/}
            {/*     aria-hidden="true">*/}
            {/*    <div className="modal-dialog">*/}
            {/*        <div className="modal-content">*/}
            {/*            <div className="modal-header">*/}
            {/*                <h1 className="modal-title fs-5" id="exampleModalLabel">Choose an image</h1>*/}
            {/*                <button type="button" className="btn-close" data-bs-dismiss="modal"*/}
            {/*                        aria-label="Close"></button>*/}
            {/*            </div>*/}
                        {/*----------PICKER----------------*/}
                        <PickerOverlay
                            apikey={'A2vZPoGIoRiePhI4DbTFcz'}
                            onUploadDone={ (res) => {
                                console.log(res.filesUploaded[0].url)
                                setImageUrl(res.filesUploaded[0].url)
                                console.log(imageUrl)
                            }}
                            onSuccess={(res) => console.log(res)}
                        />
                    {/*    ------------------------------------*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )

}

export default FilePicker;