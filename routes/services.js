var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = {
    title: 'Our services',
    name1: 'Personal Laundry',
    name2: 'Dry Cleaning',
    name3: 'Commercial Laundry',
    description1: 'We serve you the best experience in laundry services with varieties of offers you can choose from depending on your needs and wants. We make sure we give you the quality you deserve on a right price.',
    description2: 'Get the complete dry cleaning experience with Bubbles. We not only care for your clothes during the time it is with us, we care for it even after. Whatever your packaging needs are, we have something to offer.',
    description3: 'Are you a hotel, resort or business owner with laundry needs? We have industrial laundry plants to serve you.Get better quality and longer linen life with us. Contact us to discuss your industrial and commercial laundry needs.',
    img1: '/images/laundry16.jpg',
    img2: '/images/laundry8.jpg',
    img3:'/images/laundry10.jpg',
  };
  res.render('services', templateData);
});
module.exports = router;
