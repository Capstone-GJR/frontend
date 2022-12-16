import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {axiosDelete, axiosPut} from "../../util/HelperFunctions";
import AddEditForm from "../../forms/AddEditForm";
import Button from "../../buttons/Button";

function UpdateItems(props) {

    const handleClick = async () => {
        const res = await axiosDelete(`/item/delete/${props.item.id}`);
        if (res.status === 204) {
            props.setShowSettings(false);
        } else {
            // need to handle error with message
            console.log(res);
        }
    };
    return (
        <div>
            <LargeNavbar/>
            <TopNavbar/>
            <div className="pageContainer">
                <h1>{props.item.name}</h1>
                <div className="p-3">
                    <p className="pt-2 text-center">Color: {props.item.color}</p>
                    <p className="pt-2 text-center">Keywords: {props.item.keywords}</p>
                    <img className="detailsImg" src={props.item.fileStackUrl} alt='image not available'/>
                    <p>{props.item.id}</p>
                    <div className="">
                        <h1>EDIT YOUR TOTE</h1>
                        <AddEditForm
                            request={axiosPut}
                            url={`/item//edit/${props.item.id}/${props.item.tote.id}`}
                            setShowSettings={props.setShowSettings}
                        />
                        <div className='d-flex justify-content-around'>
                            <Button onClick={() => props.setShowSettings(false)} title="Back to Items" />
                            <Button onClick={handleClick} title="DELETE"/>
                        </div>
                    </div>


                </div>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default UpdateItems