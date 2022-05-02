const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    getOneThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
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

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thoughts/:thoughtId/:reactionId
router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;