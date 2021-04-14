const router = require('express').Router();
const Note = require('../models/Note');


router.get('/', (req,res)=>{
    res.send('I am the server for the Notepad!')
})


router.post('/notes', (req,res)=>{
    const newNote = new Note({
        title: req.body.title,
        text: req.body.text
    })

    newNote.save((err)=>{
        if(!err){
            res.send("Note added successfully!")
        }else {
            res.send(err);
        }
      })
})

router.get('/notes',(req,res)=>{
    Note.find((err, results)=>{
        if(!err){
            res.send(results)
        }else{
            res.send(err)
        }
    })
})

router.delete('/notes/:id', (req,res)=>{
    const id = req.params.id
    Note.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send('Note succesfully deleted!')
        }else{
            res.send(err)
        }
    })
})

router.put('/notes/:id',(req,res)=>{
    Note.findByIdAndUpdate({_id: req.params.id},
      {title: req.body.title, text: req.body.text},
       {useFindAndModify: false}, (err)=>{
        if(!err){
            res.send('Note successfully updated!')
        }else {
            res.send(err)
        }
    })
})



module.exports = router;