import { useEffect, useState } from 'react';
import './App.css';
import InvoiceTable from './components/InvoiceTable'


function App() {

  const [testData, setTestData] = useState([
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ]);

  const notification = (message) => {
    alert(message)
  }

  const updateData = (node) => {
    const data = [...testData];
    const idx = data.findIndex(obj => obj.id === node.id);
    data[idx] = node;
    setTestData(data);
    notification("Update success!");
  };

  const deleteData = (id) => {
    const data = [...testData]
    const idx = testData.findIndex(obj => obj.id === id);
    data.splice(idx, 1);
    setTestData(data);
    notification("Delete success!");
  };

  const addData = (node) => {
    let newId = testData[testData.length -1].id++;
    const data = [...testData];
    data.push({id: newId, ...node});
    setTestData(data);
    notification("Data successfully added!");
  };

  return <>
    <InvoiceTable 
      data={testData} 
      updateData={updateData}
      deleteData={deleteData}
      addData={addData}
    />
  </>;
}

export default App;
