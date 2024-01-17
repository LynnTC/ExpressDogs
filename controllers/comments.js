const Animal = require('../models/animal');

module.exports = {
    create,
    delete: deleteComment,
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

async function deleteComment(req,res){
    const animal = await Animal.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
    if (!animal) return res.redirect('/animals');
    animal.comments.remove(req.params.id);
    await animal.save();
    res.redirect(`/animals/${animal._id}`);
}