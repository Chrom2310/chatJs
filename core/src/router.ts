import express from 'express';
const router = express.Router();
import chat from './chat';

router.get('/chat', (req, res) => {
    res.json(chat.getList());
});

router.post('/chat', (req, res) => {
    const message = {...req.body};
    const validete = chat.valideteMessage(message);
    console.log('validete', validete)
    if (validete){
        res.json(chat.addMessage(message));
    }else {
        res.status(401).send({'error': 'not validate message'});
    }
});

export default router;
