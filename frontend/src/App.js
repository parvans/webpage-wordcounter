import './App.css';
import { useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState({});
  const [isdata, setIsdata] = useState(false);

  const genRows=obj=>{
    return Object.keys(obj).map(key=>{
      return(
        <tr key={key}>
          <td>{key}</td>
          <td>{obj[key]}</td>
        </tr>
      )  
    })
  }

  const submitHandler=e=>{
    e.preventDefault()
    const options={
      method:'POST',
      headers:{
        "content-type":"application/json",
        Accepts:"application/json",
      },
      body:JSON.stringify({url:url}),
    }
    fetch('http://localhost:5000/',options)
    .then(res=>res.json()).then(data=>{
      setResult(data)
       setUrl('')
       setIsdata(true)
    })
  }
  return (
    <div className="App">
      <h1>WORD COUNTER</h1>
      <form>
        <input 
        size={50}
        type="url" 
        name="url" 
        placeholder='Enter The URL'
        onChange={e=>setUrl(e.target.value)}
        value={url}
         /> &nbsp;
         <Button variant="primary" onClick={e=>submitHandler(e)}>Count Words</Button>
        {/* //<input type="submit" value="submit" /> */}
      </form>
      <br />
      {isdata && 
      <Table  stripped bordered hover size="sm" variant='primary'>
        <thead>
          <tr>
            <th width="170">Word</th>
            <th width="170">Count</th>
          </tr>
        </thead>
        <tbody>
          {genRows(result)}
        </tbody>
      </Table>}
    </div>
  );
}

export default App;
