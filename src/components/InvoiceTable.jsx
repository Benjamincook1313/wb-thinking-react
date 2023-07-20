import InvoiceRow from './InvoiceRow';
import './InvoiceTable.css';
import React, {useState} from 'react'

export default function InvoiceTable(props) {
  const { data, updateData, deleteData, addData } = props;

  const [add, setAdd] = useState(false);
  const [newData, setNewData] = useState({description: "", rate: null, hours: null});

  const subTotal = () => {
    console.log(data);
    return data.reduce((acc, curr) => acc + (+curr.rate * +curr.hours), 0);
  };

  return (
    <div>
      <h1>
        InvoiceTable
      </h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Description</th>
            <th>Rate</th>
            <th>Hours</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map(dataSet => (
            <InvoiceRow 
              key={dataSet.id} 
              data={dataSet} 
              updateData={updateData}
              deleteData={deleteData}
            />
          ))}
        </tbody>
        {add?
        <tfoot>
          <tr onKeyDown={(e) => e.key === "Enter"? handleUpdate(e): null}>
            <td><button onClick={(e) => e.preventDefault() && setAdd(false)}>X</button></td>
            <td></td>
            <td><input type="text" value={newData.description} placeholder='description' onChange={e => setNewData({...newData, description: e.target.value})}/></td>
            <td><input type="number" value={newData.rate} onChange={e => setNewData({...newData, rate: e.target.value})}/></td>
            <td><input type="number" value={newData.hours} onChange={e => setNewData({...newData, hours: e.target.value})}/></td>
            <td><button onClick={() => addData(newData) && setAdd(false)}>save</button></td>
          </tr>
        </tfoot>:
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td><button onClick={() => setAdd(true)}>add</button></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>SubTotal</td>
          <td></td>
          <td>${subTotal().toFixed(2)}</td>
          </tr>
        </tfoot>
        }
      </table>
    </div>
  )
}
