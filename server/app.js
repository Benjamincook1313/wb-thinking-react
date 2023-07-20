import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();
const port = 8765;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

ViteExpress.config({printViteDevServerHost: true});

import { getInvoices, updateInvoiceLine, deleteInvoiceLine, addInvoiceLine } from "./invoiceCtrl.cjs";

app.get('/invoices', getInvoices);
app.put("/invoice/:id", updateInvoiceLine);
app.post('/invoice', addInvoiceLine);
app.delete("/invoice/:id", deleteInvoiceLine);

ViteExpress.listen(app, port, () => console.log('Server listening on port ' + port));