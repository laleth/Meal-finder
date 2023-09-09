import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/Card.css"
import { useState } from 'react';

function CardReact({ data }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (!Array.isArray(data)) {
    return <div className='card-data'>Data is not an array</div>;
  }

  const filteredData = data.filter((item) =>
    item.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      window.alert('Enter a food name to search');
    } else if (filteredData.length === 0) {
      window.alert('No food found');
    }
  };
  return (
    <div className='card-data'>
      <div className='searh-filter'>
        <div className='input-field'>
          <input
            type="text"
            placeholder="Search by meal name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="primary" className="search-button" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      {filteredData.map((item) => (
        <Card style={{ width: '18rem' }} key={item.id}>
          <Card.Img variant="top" src={item.strMealThumb} />
          <Card.Body>
            <Card.Title>{item.strMeal}</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" onClick={() => window.open(item.strYoutube)}>Watch Video</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardReact;
