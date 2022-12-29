import Button from "../buttons/Button";
import FormInput from "./FormInput";
import {useState} from "react";
import Form from "react-bootstrap/Form";


const Search = props => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchSubmit = () => {

    }

    return (
        <>
            <Form>
                <FormInput
                    type='text'
                    label='Search'
                    placeholder='Search'
                    value={searchTerm}
                    />
                <Button onClick={handleSearchSubmit} title='SEARCH' />
            </Form>
        </>
    )

}; // Search
export default Search;