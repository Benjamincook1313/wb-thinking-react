const testData = require("./data.json");
let nextId = 5;

const getInvoices = (req, res) => {
  res.status(200).send(testData)
}

const updateInvoiceLine = (req, res) => {
  const { id } = req.params;
  const idx = testData.findIndex(data => data.id === +id);
  if(idx === -1) res.sendStatus(404);
  else{
    testData[idx] = req.body;
    res.sendStatus(200);
  }
}
  
const addInvoiceLine = (req, res) => {
  const newLine = {id: nextId, ...req.body};
  nextId++;
  testData.push(newLine);
  res.sendStatus(200)
}
    
const deleteInvoiceLine = (req, res) => {
  const { id } = req.params;
  const idx = testData.findIndex(data => data.id === +id);
  if(idx === -1){
    res.sendStatus(404)
  }else{
    testData.splice(idx, 1);
    res.sendStatus(200);
  }
}

module.exports = { getInvoices, updateInvoiceLine, addInvoiceLine, deleteInvoiceLine };