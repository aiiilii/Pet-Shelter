const controller = require('./controller');
const path = require('path');

module.exports = (app) => {
    app.get('/api/pets', controller.index);
    app.get('/api/pets/:id', controller.readOne);
    app.post('/api/pets', controller.create);
    app.put('/api/pets/:id', controller.update);
    app.delete('/api/pets/:id', controller.delete);

    app.get('/api/pets/:id/:num', controller.likePet);

    // app.post('/api/authors/:authorid/quotes', controller.addQuote);
    // app.post('/api/authors/:authorid/quotes/:quoteid', controller.updateQuote);
    // app.delete('/api/quotes/:quoteid', controller.deleteQuote)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}