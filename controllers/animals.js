const Animal = require('../models/animal');

module.exports = {
    index,
    new: newRescue,
    create,
    show,
    edit,
    update,
}

async function index(req, res) {
    const animals = await Animal.find({});
    res.render('animals/index', { title: 'All Animals', animals });
}

function newRescue(req, res) {
    res.render('animals/new', { title: 'Add Animal', errorMsg: '' });
}

async function create(req, res) {
    req.body.vet = !!req.body.vet;
    req.body.foster = !!req.body.foster;
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const animal = new Animal(req.body);
    try {
        const animal = await Animal.create(req.body);
        res.redirect(`/animals/${animal._id}`);
    } catch (err) {
        console.error(err);
        res.render('animals/new', { errorMsg: err.message });
    }
}

async function show(req, res) {
    try {
        const animal = await Animal.findById(req.params.id)
        res.render(`./animals/show`, { animal });
    } catch (err) {
        console.error(err);
        res.redirect('/animals');
    }
}

async function edit(req, res) {
    try {
        const animal = await Animal.findById(req.params.id);
        res.render('animals/edit', { animal })
    } catch (err) {
        console.log(err);
        res.redirect('animals/${animal._id}');
    }
}
async function update(req, res) {
    try {
        for (let key in req.body) {
            if (req.body[key] === '') delete req.body[key];
        }
        req.body.vet = !!req.body.vet;
        req.body.foster = !!req.body.foster;
        const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect(`/animals/${animal._id}`);
    } catch (err) {
        console.error(err);
        res.render('animals/edit', { title: 'Edit Animal', animal: req.body, errorMsg: err.message });
    }
}