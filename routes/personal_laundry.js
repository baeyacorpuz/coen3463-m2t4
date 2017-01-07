var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = {
    title: 'Personal Laundry',
    name1: 'Comfy Wash',
    name2: 'Special Wash',
    name3: 'Ultra Care',
    description1: 'Our best selling service. Washed with gentle yet effective cleaning agents with antibacterial enhancement we make sure your clothes are cleaned inside out.',
    description2: 'Have your items specially washed and individually packed hotel-style. We make sure your clothes are as clean as new.',
    description3: 'For delicates and branded items, We make sure it’s properly cared for. ',
    img1: '/images/comfy.jpg',
    img2: '/images/special wash.jpg',
    img3:'/images/ultra care.jpg',
  };
  res.render('services', templateData);
});

module.exports = router;
