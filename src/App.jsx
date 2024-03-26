import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

// Components imports
import Loader from './components/Loader';
import Restaurant from './components/Restaurant';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://site--deliveroo-back--hcj2xjlwfzkm.code.run/");
        setData(response.data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading === true ?
        <Loader />
        :
        <Restaurant
          restaurant_data={data.restaurant}
          restaurant_categories={data.categories}
        />
      }
    </>
  )
}

export default App
