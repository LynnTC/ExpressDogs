const Animal = require('../models/animal');

module.exports = {
    index,
    new: newRescue,
    create,
    show,
}

async function index(req, res){
    const animals =  await Animal.find({});
    res.render('animals/index', { title: 'All Animals', animals});
}

function newRescue(req, res){
    res.render('animals/new', {title: 'Add Animal', errorMsg: ''});
}

async function create(req,res){
    req.body.vet = !!req.body.vet;
    req.body.foster = !!req.body.foster;
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    const animal = new Animal(req.body);
    try {
        const animal = await Animal.create(req.body);
        res.redirect(`/animals/${animal._id}`);
    } catch(err){
        console.error(err);
        res.render('animals/new', {errorMsg: err.message});
    }
}

async function show(req, res) {
    try {
        const animal = await Animal.findById(req.params.id)
        res.render(`./animals/show`);
    } catch (err) {
        console.error(err);
        res.redirect('/animals');
    }
}