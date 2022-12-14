import React from "react";
import {PickerInline, PickerOverlay} from 'filestack-react';

function FilePicker(props) {


    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        {/*----------PICKER----------------*/}
                        <PickerInline
                            apikey={'KEY_GOES_HERE'}
                            // onSuccess={(res) => console.log(res)}
                            onUploadDone={(res) => console.log(res.filesUploaded[0].url)}
                        />
                    {/*    ------------------------------------*/}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FilePicker;