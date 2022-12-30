import Button from "../buttons/Button";
import FormInput from "./FormInput";
import {useState} from "react";
import Form from "react-bootstrap/Form";


const SearchBar = props => {

    const [enterSearchTerm, setEnteredSearchTerm] = useState('')

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const searchTerm = enterSearchTerm;

        setEnteredSearchTerm('')
    }

    return (
        <>
            <Form onSubmit={handleSearchSubmit}>
                <FormInput
                    type='text'
                    placeholder='Enter a keyword to find an item'
                    value={enterSearchTerm}
                    onChange={(e) => setEnteredSearchTerm(e.target.value)}
                    />
                <Button type='submit' title='SEARCH' />
            </Form>
        </>
    )

}; // Search
export default SearchBar;