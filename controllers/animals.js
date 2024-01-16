const Animal = require('../models/animal');

module.exports = {
    index,
}

async function index(req, res){
    const animals =  await Animal.find({});
    res.render('animals/index', { title: 'All Animals', animals});
}