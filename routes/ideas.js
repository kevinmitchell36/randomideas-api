const express = require('express');
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: 'An app that helps you organize gym routines',
    tag: 'Lifestyle',
    username: 'Sophie',
    date: '2023-12-21'
  },  
  {
    id: 2,
    text: 'Tour guide app',
    tag: 'Entertainment',
    username: 'Alice',
    date: '2023-12-21'
  },
  {
    id: 3,
    text: 'Finding local history app',
    tag: 'Entertainment',
    username: 'Kevin',
    date: '2023-12-21'
  },
]

router.get('/', (req, res) => {
  res.json({ data: ideas });
});


router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id)
  if (!idea) {
    return res.status(404).json({success: false, error: 'Resource not found'})
  }
  res.json( { data: idea } );
});

router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea)
  res.json({ success: true, data: idea})
});

router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id)
  if (!idea) {
    return res.status(404).json({success: false, error: 'Resource not found'})
  }

  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json( { data: idea } );
});

router.delete('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id)
  if (!idea) {
    return res.status(404).json({success: false, error: 'Resource not found'})
  }

  const index = ideas.indexOf(idea);
  ideas.splice(index, 1)
  res.json( { success: true, data: {} } );
});

module.exports = router;