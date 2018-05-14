const Flashcard = require('../models/flashcard.js')
const flashcardsController = {};

// find all
flashcardsController.index = (req, res) => {
    Flashcard.findAll()
    .then(data => {
        res.status(200).render('flashcards/flashcards-index', {flashcards: data});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

// find one
flashcardsController.show = (req, res) => {
    Flashcard.findById(req.params.id)
    .then(data => {
        res.status(200).render('flashcards.flashcards-show', {flashcard: data});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

// make one
flashcardsController.create = (req, res) => {
    console.log(req)

    Flashcard.create({
        question: req.body.question,
        answer: req.body.answer,
        category: req.body.category,
        difficulty: req.body.difficulty
    })
    .then(data => {
        res.redirect(`flashcards/${data.id}`);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

// view one edit
flashcardsController.edit = (req, res) => {
    Flashcard.findById(req.params.id)
    .then(data => {
        res.status(200).render('flashcards.flashcards-show', {flashcard: data});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

// update one
flashcardsController.update = (req, res) => {
    Flashcard.update({
        question: req.body.question,
        answer: req.body.answer,
        category: req.body.category,
        difficulty: req.body.difficulty
    }, req.params.id)
    .then(data => {
        res.redirected(`flashcards/${flashcard.id}`);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}

// delete one
flashcardsController.delete = (req, res) => {
    Flashcard.destroy(req.params.id)
    .then(() => {
        res.redirect('/flashcards')
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

module.exports = flashcardsController
