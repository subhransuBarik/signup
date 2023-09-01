import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

function TableData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:3001/user/home',{
        headers:{
            authorization: localStorage.getItem("token")
        }
      });
      const result = await response.data;
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();
}, []);

if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>USER_ID</th>
        </tr>
      </thead>
      <tbody>
      
        {data.map((item) => (
        <tr key={item.id}>

          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.userId}</td>

        </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableData;







