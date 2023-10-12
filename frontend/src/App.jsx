import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    // console.log(import.meta.env.VITE_API_URL);
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts`);
        if (!response.ok) {
          throw `Network Error. Bad status Code`
        }
        const data = await response.json();
        console.log(`Backend Data:`);
        console.log(data);
        setData(data);
      }
      catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])

  return (
    <>
      <h1>React-Django-API Testing</h1>
      <p>Note: See the console</p>
    </>
  )
}

export default App
