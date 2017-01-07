var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = {
    title: 'Dry Cleaning',
    subtitle: 'Get the complete dry cleaning experience with Bubbles. We not only care for your clothes during the time it is with us, we care for it even after. Whatever your packaging needs are, we have something to offer. Here are our Premier Dry Clean packing options:',
    name1: 'Garment Cover',
    name2: 'Vacuum Packing',
    name3: 'Memory Box',
    description1: 'Cover and protect your suit or gown from dust and insects with our Garment Covers. It converts into a bag so you have the ease of carrying it wherever you need to.',
    description2: 'For items that are not regularly used, have your gown vacuum packed. It is waterproof and maximizes cabinet space.',
    description3: 'For those special occasions, we present only the best. Introducing, Bubbles Memory Box. Made and lined with acid-free paper and muslin cloth, your gowns and suits are kept in the most elegant way. Our Memory Box protects your cherished memories and helps them last much, much longer.',
    img1: '/images/garment cover.jpg',
    img2: '/images/vacuum.png',
    img3:'/images/memory box.jpg',
  };
  res.render('services', templateData);
});

module.exports = router;
