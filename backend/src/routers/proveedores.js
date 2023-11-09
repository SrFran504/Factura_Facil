
const proveedoresController = require('../controller/proveedoresController');

app.post('/api/proveedores/create', proveedoresController.save);
app.get('/api/proveedores/list', proveedoresController.list)

app.put('/api/proveedores/update', proveedoresController.update)
app.put('/api/proveedores/update', proveedoresController.edit)

app.delete('/api/proveedores/delete', proveedoresController.delete)

//
module.exports = router;