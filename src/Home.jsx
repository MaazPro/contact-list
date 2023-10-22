import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const Filter = (event) => {
    setRecord(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };
  return (
    <div className="p-5 bg-light">
      <div className="bg-white shadow border">
        <input
          type="text"
          style={
            {borderBottom: "5px solid #F39F5A",
            width: "100%",
            color: "purple",
            fontWeight: "bold"
            }
          }
          onChange={Filter}
          placeholder="Search"
        />

        <table className="table table-dark">
          <thead>
            <tr className="bg-danger">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {record.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home
