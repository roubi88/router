import React from 'react';
import { Card, Button} from 'react-bootstrap';
import Rating from '../FilterMovieRate/Rating';
import { Link } from 'react-router-dom';


const MovieCard = ({movie, isMoviListe}) => {
    return (
        <div>
    <Card style={{ width: '18rem', height:'55rem', margin:'6%', backgroundColor:"rgb(237, 237, 229)"}}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
         {movie.description}
         <br/>
         <Rating  isMovieRating={true} moviRating={movie.rate}/>
        </Card.Text>
        <Link to={`/movie/${movie.id}`}>
<br/>
<Button  style={{marginRight:'65%'}} variant="warning" >
             Description </Button>
             </Link>
        </Card.Body>
    </Card>

        </div>
    );
};

export default MovieCard;