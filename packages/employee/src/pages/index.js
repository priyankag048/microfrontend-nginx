import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [ employee, setEmployee ] = useState([]);
  useEffect(() => {
    (async () => {
      const employees = await axios.get(`/employee`);
      if(employees && employees.data){
        setEmployee(employees.data);
      }
    })();
  }, []);
  
  return(
    <div>
        <a href="/">Back to Dashboard</a>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {employee && employee.length > 0
            && employee.map(({id, first_name, last_name, email, gender}) => (
              <tr key={id}>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
                <td>{gender}</td>
              </tr>
            ))}
        </table>
        <style jsx global>
          {`
              body{
               margin: 0;
              }
            
          `}
        </style>
        <style jsx>
          {`
            header{
              margin-top: 10px;

            }
            table{
              width: 80%;
              text-align: left;
              border-collapse: collapse;
              margin: auto;
            }

            td, th {
              border: 1px solid #dddddd;
              text-align: left;
              padding: 8px;
            }
            tr:first-child {
              position: relative;
            }
            th {
              background-color: #ffffff;
              position: sticky;
              top: 0;
            }
            tr:nth-child(even) {
              background-color: #579188;
              color: #fff;
            }
            tr:nth-child(odd) {
              background-color: #d1dedd;
            }
            
        `}
        </style>
    </div>
  )
}
