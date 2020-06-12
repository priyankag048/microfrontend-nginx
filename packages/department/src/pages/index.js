import { useState, useEffect } from 'react';
import axios from 'axios';
export default () => {
  const [ department, setDepartment ] = useState([]);
  const [ selectedDepartment, setSelected] = useState(0);

  useEffect(() => {
    (async () => {
      const departments = await axios.get(`/department`);
      if(departments && departments.data){
        setDepartment(departments.data);
      }
    })();
  }, []);

  const onSelectDepartment = (event) => {
    const selected = event.target.value;
    setSelected(selected);
  }
  return(
    <div>
        <a href="/"> Back to Dashboard </a>
        <select onChange={onSelectDepartment} value={selectedDepartment}>
          <option value={0}>---  Select Department  ---</option>
          {department && department.length > 0
            && department.map(({id, name}) => (
              <option key={id} value={id}>{name}</option>
            ))}
        </select>
        <style jsx global>
          {`
              body{
               margin: 0;
              }
            
          `}
        </style>
        <style jsx>
          {`
            div {
              width: 30%;
              margin: auto;
            }
            header{
              margin-top: 10px;
            }
            select{
              font-size: 1.2rem;
              width: 100%;
              margin-top: 50px;
            }
        `}
        </style>
    </div>
  )
}
