const db = require('../config/config');

const Proveedor = {};

Proveedor.findById = (id, result) => {
    const sql = `
        SELECT * FROM proveedores
        WHERE id_provee=?
    `;

    db.query(sql, [id], (err, proveedor) => {
        if (err) {
            console.log('Error:', err);
            result(err, null);
        } else {
            console.log('Proveedor obtenido:', proveedor[0]);
            result(null, proveedor[0]);
        }
    });
};

Proveedor.create = (proveedor, result) => {
    const sql = `
        INSERT INTO proveedores 
        (id_provee, nombres_prove, telefono_prove, email_prove, direccion_prove) 
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            proveedor.id_provee,
            proveedor.nombres_prove,
            proveedor.telefono_prove,
            proveedor.email_prove,
            proveedor.direccion_prove,
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            } else {
                console.log('ID del nuevo proveedor:', res.insertId);
                result(null, res.insertId);
            }
        }
    );
};

Proveedor.update = (proveedor, result) => {
    const sql = `
        UPDATE proveedores
        SET
            nombres_prove=?,
            telefono_prove=?,
            email_prove=?,
            direccion_prove=?
        WHERE
            id_provee=?
    `;

    db.query(
        sql,
        [
            proveedor.nombres_prove,
            proveedor.telefono_prove,
            proveedor.email_prove,
            proveedor.direccion_prove,
            proveedor.id_provee,
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            } else {
                console.log('Proveedor actualizado:', proveedor.id_provee);
                result(null, proveedor.id_provee);
            }
        }
    );
};

Proveedor.delete = (id, result) => {
    const sql = `
        DELETE FROM proveedores
        WHERE id_provee = ?
    `;

    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error:', err);
            result(err, null);
        } else {
            if (res.affectedRows === 0) {
                result({ message: 'Proveedor no encontrado' }, null);
            } else {
                console.log('Proveedor eliminado:', id);
                result(null, id);
            }
        }
    });
};

module.exports = Proveedor;