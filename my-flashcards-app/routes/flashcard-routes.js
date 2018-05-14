const express = require('express');
const flashcardsRouter = express.Router();
const flashcardsController = require('../controllers/flashcards-controller.js')

// home route to find all
flashcardsRouter.get('/', flashcardsController.index);

// is this rendering a specific card called new?
flashcardsRouter.get('/new', (req, res) => {
    res.render('flashcards/flashcards-new');
});

// post a new card from home route
flashcardsRouter.post('/', flashcardsController.create);

// get a card by its id
flashcardsRouter.get('/:id', flashcardsController.show);

// show edited card by its id
flashcardsRouter.get('/:id/edit', flashcardsController.edit);

// update a new card
flashcardsRouter.put('/:id', flashcardsController.update);

// delete a card based on id
flashcardsRouter.delete('/:id', flashcardsController.delete);

module.exports = flashcardsRouter;
