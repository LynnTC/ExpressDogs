const animal = require('../models/animal');
const Animal = require('../models/animal');

module.exports = {
    create,
}

async function create(req,res){
    const animal = await Animal.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    animal.comments.push(req.body);
    try{
        await animal.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/animals/${animal._id}`);
}