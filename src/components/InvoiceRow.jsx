import React, { useState } from 'react'

export default function InvoiceRow(props) {
  const {data, updateData, deleteData} = props;

  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState({...data});

  const handleUpdate = () => {
    setEdit(false);
    updateData(update);
  };

  return (
    <>
    {edit? 
      <tr onKeyDown={(e) => e.key === "Enter"? handleUpdate(e): null}>
        <td><button onClick={() => setEdit(false)}>X</button></td>
        <td><button onClick={handleUpdate}>save</button></td>
        <td><input type="text" value={update.description} onChange={e => setUpdate({...update, description: e.target.value})}/></td>
        <td><input type="number" value={update.rate} onChange={e => setUpdate({...update, rate: e.target.value})}/></td>
        <td><input type="number" value={update.hours} onChange={e => setUpdate({...update, hours: e.target.value})}/></td>
        <td>${update.hours * update.rate}</td>
      </tr>:
      <tr>
        <td><button onClick={() => deleteData(data.id)}>delete</button></td>
        <td><button onClick={() => setEdit(true)}>edit</button></td>
        <td>{data.description}</td>
        <td>${data.rate}/hr</td>
        <td>{data.hours}</td>
        <td>${(data.rate * data.hours).toFixed(2)}</td>
      </tr>
    }
    </>
  )
}
