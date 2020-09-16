module.exports = (application) => {
    application.get('/login', (req, res) => {
        if (req.session.user != undefined) {
            application.src.controllers.dashboard.index(application, req, res)
        } else {
            application.src.controllers.login.index(application, req, res)
        }
    })
    application.post('/login', (req, res) => {
        if (req.session.user != undefined) {
            application.src.controllers.dashboard.index(application, req, res)
        } else {
            application.src.controllers.login.index(application, req, res)
        }
    })
}