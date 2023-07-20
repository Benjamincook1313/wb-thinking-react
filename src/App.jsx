import { useEffect, useState } from 'react';
import './App.css';
import InvoiceTable from './components/InvoiceTable'
import axios from 'axios';


function App() {

  const [testData, setTestData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const notification = (message) => {
    alert(message);
  };

  const getInvoices = async () => {
    const res = await axios.get('/invoices').catch(err => console.log(err));
    setTestData(res.data);
    setLoaded(true);
  }

  const updateData = async (node) => {
    await axios.put(`/invoice/${node.id}`, node).catch(err => {
      console.log(err);
    });

    setLoaded(false);
  };

  const deleteData = async (id) => {
    await axios.delete(`/invoice/${id}`).catch(err => {
      console.log(err)
    });
    setLoaded(false);
  };

  const addData = async (node) => {
    await axios.post('/invoice', node).catch(err => console.log(err));
    setLoaded(false);
  };

  useEffect(() => async () => {
    getInvoices();
  }, [loaded]);

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
