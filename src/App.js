import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardReact from './components/Cards'; // Note the component name change
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        
        setData(data.meals || []); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Meals DB</h1>
      <CardReact data={data} />
    </div>
  );
}

export default App;
