const res = require('express/lib/response');
const { Thought } = require('../models');

const thoughtController = {

    // create thought
    createThought({ body }, res) {
        Thought.create(body)
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err));
    },

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            //.populate({
            //  path: 'comments',
            //  select: '-__v'
            //})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbData => res.json(dbData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
        });
    },

    // get one thought
    getOneThought({ params }, res) {
        Thought.findOne({ _id: params.id })
            .select('-__v')
            .then(dbData => res.json(dbData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
    },

    // update thought
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbData => {
                if (!dbData) {
                    res.status(404).json({ message: 'No Thought found with this ID'});
                    return;
                }
                res.json(dbData);
            })
            .catch(err => res.json(err));
    },

    // delete thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err));
    }

};

module.exports = thoughtController;