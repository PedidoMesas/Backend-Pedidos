const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send('Holi!')
})

app.post('/home', (req, res) => {
    res.send('Bienvenidos a Kinal');
})

app.put('/editar/1', (req, res) => {
    res.send('Editando usuario con id 1');
})

app.delete('/borrar/1', (req, res) => {
    res.send('Eliminando usuario 1');
})


app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})