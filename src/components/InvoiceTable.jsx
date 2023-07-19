import InvoiceRow from './InvoiceRow';
import './InvoiceTable.css';
import React, {useState} from 'react'

export default function InvoiceTable(props) {
  const { data, updateData, deleteData, addData } = props;

  const [add, setAdd] = useState(false);
  const [newData, setNewData] = useState({description: "", rate: 0, hours: 0});

  return (
    <div>
      <h1>
        InvoiceTable
      </h1>
      <table>
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td>Description</td>
            <td>Rate</td>
            <td>Hours</td>
            <td>Amount</td>
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
          <tr>
            <td><button onClick={() => addData() && setAdd(false)}>save</button></td>
            <td></td>
            <td><input type="text" value={newData.description} placeholder='description' onChange={e => setNewData({...newData, description: e.target.value})}/></td>
            <td><input type="number" value={newData.rate} onChange={e => setNewData({...newData, rate: e.target.value})}/></td>
            <td><input type="number" value={newData.hours} onChange={e => setNewData({...newData, hours: e.target.value})}/></td>
            <td><button onClick={() => setAdd(false)}>X</button></td>
          </tr>
        </tfoot>:
        <tfoot>
          <tr>
            <td></td>
            <td><button onClick={() => setAdd(true)}>add</button></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
        }
      </table>
    </div>
  )
}
