const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from proveedores',(err,proveedores) =>{
            if(err){
                res.json(err);
            }
            res.json(proveedores);
        });

    });

};

controller.edit = (req, res) => {

    const {id_provee}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from proveedores where id_provee=?', [id_provee], (err,proveedores) => {
            res.json(proveedores[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,proveedores)=> {
       conn.query('insert into proveedores values?', [data], (err,proveedores) => {
        res.json(proveedores);
       });
   })
};

controller.update = (req,res) =>{

    const {id_provee}= req.params;
    const nuevo_proveedores = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update proveedores set ? where id_provee =?', [nuevo_proveedores, id_provee], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {id_provee}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from proveedores where id_provee =?', [id_provee], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};


module.exports =controller;