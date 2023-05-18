import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {moviesData} from "../../Components/MovieData/MovieData"; 

const Description = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
     setMovie(moviesData.find((movie)=> movie.id === +params.id))
    }, [params.id])
    
    return (
        <div>
<Container>
      <Row style={{marginTop:'10%'}}>
      <Col  sm={8}>
      <div >
         <h1> Description of {movie.title}</h1>
        {movie.description} <br/>
       <Button  style={{marginTop:"3%"}} variant='warning' onClick={()=>navigate(-1)}>Go Back</Button>
        </div> 
       </Col>
      <Col sm={4}>
        <iframe style={{width: "400px", height:"400px"}} src={movie.trailer}>
        </iframe>
      </Col>
      </Row>
    </Container>
    
        </div>
    );
};

export default Description;