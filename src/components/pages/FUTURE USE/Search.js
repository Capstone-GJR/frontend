import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../util/HelperFunctions";
import Form from "react-bootstrap/Form";
import FormInput from "../../forms/FormInput";
import Navbar from "../../ui/Navbar";
import Button from "../../buttons/Button";

//FIXME: As is, you would not be able to edit an item from this section only to view them.

function Search(props) {
  const [components, setComponents] = useState([]);
  const [filterResults, setFilteredResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getItems = async () => {
    try {
      const res = await axiosRequest("GET", `/item/all`);
      setComponents(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const search = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value);
    const searchResults = components.filter((component) => {
      return (
        component.keywords.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.tote.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.tote.space.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });
    setFilteredResults(searchResults);
  };

  return (
    <div className="pgContainer">
      <div className="partialPgContainer">
      <h1>SEARCH</h1>
      <h4>Search for an item by keyword, name, or location name.</h4>
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormInput
                type="text"
                placeholder="Enter a keyword, name, or location"
                value={searchTerm}
                onChange={search}
                onEnter
            />
          </Form>
        </div>

      <div className="cardWrapper">
        {filterResults.map((result) => (
          <div
            className="componentCard"
            key={result.id}
          >
              <h5>{result.name}</h5>
              <img
                className="detailsImg img-fluid"
                src={result.fileStackUrl}
                alt="image not available"
              />
            <h5>Tote: {result.tote.name}
              <br/>Space: {result.tote.space.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
