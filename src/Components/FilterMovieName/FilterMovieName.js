import React from 'react';
import Form from 'react-bootstrap/Form';

const FilterMovieName = ({inputSearch, setInputSearch}) => {
    return (
        <div>
      <Form.Control className='filterName' type='text' placeholder='Enter movie title...'
      value={inputSearch} 
      onChange={(e)=>setInputSearch(e.target.value)}
      style={{ width:"30rem", margin:'4%'}}/>  

        </div>
    );
};

export default FilterMovieName;