import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Use lowercase 'axios'

function App() {
  const [data, setData] = useState('');

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error); // Catch any error
    }
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      {data ? data : "Loading..."} {/* Provide a fallback in case data is not loaded */}
    </div>
  );
}

export default App;


