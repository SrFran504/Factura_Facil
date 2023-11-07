const db=require('../config/config');

const Rol = {};

Rol.create = (id_user, id_rol, result) =>{
    const sql =`
        INSERT INTO
        user_has_roles(
                id_user,
                id_rol
            )
        VALUES(?,?)
    `;
    db.query(
        sql,
        [id_user, id_rol],
        (err, res)=>{
            if(err){
                console.log('Error:',err);
                result(err, null);
            }
            else{
                console.log('usuario obtenido: ', res.insertId);
                result(null, res.insertId);
            }
        }
    )
}

module.exports=Rol;