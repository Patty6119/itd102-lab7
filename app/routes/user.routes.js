const controller = require('../controlleers/user.controller');//../คือถอยออกจากไฟล์


module.exports = (app) => {
    app.get("/",controller.home);  
    app.get("/about",controller.about);  
    app.get("/contact",controller.contact);  

};