module.exports.controller = (app) => {
    //get users page
    app.get('/users', (req, res) => {
        res.render('users', {title: 'Usuarios Nuevos', description: 'Esta es una pequeña descripción de los usuarios.'});
    })
}