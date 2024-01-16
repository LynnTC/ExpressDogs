const Animal = require('../models/animal');

module.exports = {
    index,
    new: newRescue,
}

async function index(req, res){
    const animals =  await Animal.find({});
    res.render('animals/index', { title: 'All Animals', animals});
}

function newRescue(req, res){
    res.render('animals/new', {title: 'Add Animal', errorMsg: ''});
}