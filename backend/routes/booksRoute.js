import express from 'express';
import {Book} from '../models/bookModel.js'

const router = express.Router()




router.post('/',async (req,res)=>{
    const {title, author, publishYear} = req.body;
    try{
        if(
            !title || !author || !publishYear
        ){
            return res.status(404).send('Send all required fields')
        }
        const newBook = {
            title: title,
            author: author,
            publishYear: publishYear
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})

//Route for det All Books the database


router.get('/', async(req, res)=>{
    try{
        const books = await Book.find({
            
        });

        return res.status(200).json({
            counts: books.length,
            data: books
        });
    }
    catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

//Route for get one book from database by id


router.get('/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const book = await Book.findById(id);

        return res.status(200).json(book);
    }
    catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

// Route for update a book

router.put('/:id', async(req, res)=>{
    const {title, author, publishYear} = req.body;
    try{
        if(
            !title || !author || !publishYear
        ){
            return res.status(404).send('Send all required fields')
        }

        const {id} = req.params

        const result = await Book.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(404).json({message: 'Book not found'})
        }

        return res.status(200).send({message: 'Book updated successfully'})
    }

    catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
    
    
})

//Delete book

router.delete('/:id', async (req, res)=>{
    try{
        
        const {id} = req.params

        const result = await Book.findByIdAndDelete(id)

        if(!result){
            return res.status(404).json({message: 'Book not found'})
        }

        return res.status(200).send({message: 'Book deleted successfully'})
    }
    catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
    
})

export default router;