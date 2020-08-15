const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function (req, res) {
  res.redirect('/api/businesses');
});

router.get('/api/businesses', async (req, res) => {
  try {
    const businesses = await db.businesses.findAll({
      // include: [db.contacts],
      include: [db.importantToBusinesses],
    });
    res.json(businesses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/api/businesses/:id', function (req, res) {
  db.businesses
    .findOne({
      // include: [db.importantToBusiness],
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbbusinesses) {
      res.json(dbbusinesses);
    });
});

router.post('/api/businesses', function (req, res) {
  db.businesses
    .create({
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbbusinesses) {
      res.json(dbbusinesses);
    });
});

router.put('/api/businesses/:id', function (req, res) {
  db.businesses
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbbusinesses) {
      res.json(dbbusinesses);
    });
});

router.delete('/api/businesses/:id', function (req, res) {
  db.businesses
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbbusinesses) {
      res.json(dbbusinesses);
    });
});

module.exports = router;
