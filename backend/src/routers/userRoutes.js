const userController = require('../controller/usersController');
const passport = require('passport')
module.exports=(app, upload)=>{
    app.post('/api/users/create', userController.register);
    app.post('/api/users/createWithImage', upload.array('image', 1) , userController.registerWithImage);
    app.post('/api/users/login', userController.login);

    app.put('/api/users/update', passport.authenticate('jwt', {session: false}), upload.array('image', 1), userController.updateWithImage);
    app.put('/api/users/updateWithoutImage/:id', passport.authenticate('jwt', {session: false}), userController.updateWithoutImage);

    app.delete('/api/users/delete/:id', passport.authenticate('jwt', { session: false }), userController.deleteUser);



}