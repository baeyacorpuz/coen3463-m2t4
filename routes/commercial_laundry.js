var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = {
    title: 'Commercial Laundry',
    subtitle: 'Trust us to give you the same care and quality we give to our individual customers. Whether your items are linen or those that come into close contact with your clients, we assures you of a professional wash every time. A professional wash with our trademark guarantee – If you are not satisfied with our wash, you can return the item within 48 hours for a free reprocessing. Extra care for your items – Harsh chemicals could be degrading the fabric of your linen or towels each time you have them washed. This results to earlier  fabric tears. At Bubbles, we make sure your items last longer by using only gentle cleaning agents, so you save money in the long run. Prompt delivery – We’ll schedule our pick up and deliveries in advance so you know what to expect. Items accounted for every time – Our computerized transactions makes it easier for you to follow your transactions. We are Proud to Serve:',
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
