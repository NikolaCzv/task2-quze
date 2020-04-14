import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import { 
  Menu,
  Input,
  Button,
  Grid } from "semantic-ui-react";
import List from "./components/List";

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [courses, setCourses] = useState([])

  const handleSearch = (e) => {
      setSearchTerm(e.target.value)
  }

  const handleSubmit = () => {

    const data = {
      query: {
        match: {
          tags: searchTerm
        },
      },
      from: 20
    }

    axios.post("http://staging-api.quze.co/search/intern-test/_search", data)
    .then(response => {
           const source = response.data.hits.hits.map(course => {
              return course._source
            })
            setCourses(source)
    })
    .catch(error => console.log(error))
  }

  const renderCourses = () => {
    return courses.map(course => {
      return <List course={course}/>
      
    })
  }


  return (
    <div className="App">
      <Menu>
        <Menu.Item>
          <Input 
            className='icon'
            icon='search'
            placeholder='Search...'
            onChange={handleSearch}
          />
        </Menu.Item>
        <Button
          size="mini"
          color="green"
          onClick={handleSubmit}>Submit</Button>
      </Menu>
      {courses[0] ? 
        <Grid centered columns={4}>
          {renderCourses()}
        </Grid>
        :
        <h1>Welcome to Quze! Search for course at the navigation bar.</h1>}
    </div>
  );
}

export default App;
