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
  res.json({data: ideas});
});


router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id)
  if (!idea) {
    return res.status(404).json({success: false, error: 'Resource not found'})
  }
  res.json( {data: idea} );
});


module.exports = router;