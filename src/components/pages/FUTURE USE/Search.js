import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import SideNavbar from "../../navbar/SideNavbar";
import {axiosRequest} from "../../util/HelperFunctions";
import Button from "../../buttons/Button";
import Form from "react-bootstrap/Form";
import FormInput from "../../forms/FormInput";

//FIXME: As is, you would not be able to edit an item from this section only to view them.

function Search(props) {

    const [components, setComponents] = useState([]);
    const [filterResults, setFilteredResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    const getItems = async () => {
        try {
            const res = await axiosRequest('GET', `/item/all`)
            setComponents(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();
    }, [])

    const search = (e) => {
            setSearchTerm(e.target.value)
        const searchResults = components.filter(component => {
        return component.keywords.toLowerCase().includes(searchTerm.toLowerCase())
            || component.name.toLowerCase().includes(searchTerm.toLowerCase())
            || component.tote.name.toLowerCase().includes(searchTerm.toLowerCase())
            || component.tote.space.name.toLowerCase().includes(searchTerm.toLowerCase())
            })
        setFilteredResults(searchResults)
    }

    return (
        <div>
            <LargeNavbar pageName="Search"/>
            <TopNavbar/>
            <SideNavbar/>
            <div className="pageContainer text-center">
                <h4>Search for an item by keyword, name, or location name.</h4>
                <div className='row'>
                    <Form>
                        <FormInput
                            type='text'
                            placeholder='Enter a keyword, name, or location'
                            value={searchTerm}
                            onChange={search}
                        />
                    </Form>
                </div>
                <div className="row">
                    {filterResults.map((result) => (
                        <div className="w-50 card shadow bg-body rounded mb-5 mt-4 p-2" key={result.id}>
                            <div className="pt-2 text-center">
                                <h5>{result.name}</h5>
                            </div>
                            <div className="pt-2">
                                <img className="detailsImg img-fluid" src={result.fileStackUrl}
                                     alt='image not available'/>
                            </div>
                            <div className="pt-2 text-center">
                                <p>Value: ${result.value}</p>
                                <p>Keywords: {result.keywords}</p>
                                <p>Tote Location: {result.tote.name}</p>
                                <p>Space Location: {result.tote.space.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default Search