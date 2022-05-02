const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    getOneThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts);

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(createThought);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;