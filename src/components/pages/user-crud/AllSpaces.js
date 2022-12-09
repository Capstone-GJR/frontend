import axios from 'axios';
import {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
// import {Link, useNavigate} from "react-router-dom";
import LargeNavbar from "../../navbar/LargeNavbar";
import Form from "react-bootstrap/Form";
import NameField from "../../forms/input-fields/NameField";
import ColorField from "../../forms/input-fields/ColorField";
import KeywordsField from "../../forms/input-fields/KeywordsField";
import Button from "../../buttons/Button";
// import React from "@types/react";
import {axiosPost} from "../../util/HelperFunctions";
import {Link} from "react-router-dom";

function AllSpaces() {
    const [spaces, setSpaces] = useState([]);

    // const navigate = useNavigate();
    const [form, setForm] = useState({
        name:'',
        color:'',
        // image:'',
        keywords:'',
    });

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })
    }

    const handleSubmit = (e) => {
        const response = axiosPost(e, '/space/add', form);
        console.log(response)
    }

    useEffect(() => {
        const getUserSpaces = async () => {
            try {
                const response = await axios.get('space/all', {
                    headers: {
                        Authorization: localStorage.getItem("access_token")
                    }
                })
                setSpaces(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUserSpaces();
    }, [])

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <div>
                {spaces.map((space) => (
                    <Link to='/spaceLanding'
                        state={{
                            space_id: `${space.id}`,
                            space_name: `${space.name}`
                        }}
                    >
                        <div
                            className='card w-50 p-4 m-4'
                            key={space.id}
                        >{space.name}
                        </div>
                    </Link>
                ))}
            </div>

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

            <BottomNavbar/>
        </div>

    )
}

export default AllSpaces