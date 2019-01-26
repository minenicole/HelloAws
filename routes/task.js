const express = require('express');
const router = express.Router();
const Task = require('../schemas/task');

/* GET users listing. */
router.get('/', (req, res, next) => {
    Task.find().sort({createdAt: -1})
        .then((tasks) => {
            res.render('task', {tasks : tasks})
        })
        .catch((error) => {
            console.log('error : ', error);
        })
});

router.post('/', (req, res, next) => {
    const task = new Task({
        content : req.body.task,
        createdAt : new Date()
    });
    task.save()
        .then((result) => {
            console.log('result : ', result);
            Task.find()
                .then((tasks) => {
                    res.json(tasks);
                })
                .catch((error) =>{
                    console.log('error : ', error)
                })
        })
        .catch((error) => {
            console.log('error : ', error)
        })
});

module.exports = router;
