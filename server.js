const express = require('express');
const app = express();
app.use(express.json());

let nextId = 4;
let products = [
  { id: 1, name: 'Teclado', price: 95000 },
  { id: 2, name: 'Mouse', price: 45000 },
  { id: 3, name: 'Monitor', price: 680000 }
];
const valid = (body) => body && typeof body.name === 'string' && body.name.trim() && Number.isFinite(Number(body.price)) && Number(body.price) >= 0;

app.get('/products', (_req, res) => res.json(products));
app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  return product ? res.json(product) : res.status(404).json({ error: 'Producto no encontrado' });
});
app.post('/products', (req, res) => {
  if (!valid(req.body)) return res.status(400).json({ error: 'name y price (numero no negativo) son obligatorios' });
  const product = { id: nextId++, name: req.body.name.trim(), price: Number(req.body.price) };
  products.push(product); return res.status(201).json(product);
});
app.put('/products/:id', (req, res) => {
  if (!valid(req.body)) return res.status(400).json({ error: 'name y price (numero no negativo) son obligatorios' });
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
  product.name = req.body.name.trim(); product.price = Number(req.body.price); return res.json(product);
});
app.delete('/products/:id', (req, res) => {
  const index = products.findIndex((p) => p.id === Number(req.params.id));
  if (index < 0) return res.status(404).json({ error: 'Producto no encontrado' });
  products.splice(index, 1); return res.status(204).send();
});
app.listen(process.env.PORT || 3000, () => console.log('API de productos activa'));
