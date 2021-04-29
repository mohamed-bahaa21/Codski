const path = require('path')
const express = require('express')
const route = express.Router()

const horizonController = require(path.resolve(__basename, 'controllers', 'horizon'))

route.get('/', horizonController.getLanding)
route.get('/about-us', horizonController.getAbout)
route.get('/news', horizonController.getBlogs)
route.get('/blog/:id', horizonController.getBlog)

// Products pages
route.get('/products/:brand', horizonController.getProduct)

// ADMIN -> Blogs Data
route.get('/api/getBlogsData', horizonController.getBlogsData)
route.post('/api/postBlogsData', horizonController.postBlogsData)

// ADMIN -> About Data
route.get('/api/getAboutData', horizonController.getAboutData)
route.post('/api/postAboutData', horizonController.postAboutData)

// ADMIN -> Hero Section
route.get('/api/getLandingData', horizonController.getLandingData)
route.post('/api/postHeroData', horizonController.postHeroData)

// ADMIN -> Lens Designs 1 Section
route.get('/api/getLensDesigns1', horizonController.getLensDesigns1)
route.post('/api/postLensDesigns1', horizonController.postLensDesigns1)

// ADMIN -> Lens Info 1 Section
route.get('/api/getLensInfo1', horizonController.getLensInfo1)
route.post('/api/postLensInfo1', horizonController.postLensInfo1)

// ADMIN -> Lens Designs 2 Section
route.get('/api/getLensDesigns2', horizonController.getLensDesigns2)
route.post('/api/postLensDesigns2', horizonController.postLensDesigns2)

// ADMIN -> Lens Info 1 Section
route.get('/api/getLensInfo2', horizonController.getLensInfo2)
route.post('/api/postLensInfo2', horizonController.postLensInfo2)

// ADMIN -> Watch Video Section
route.get('/api/getWatchVideo', horizonController.getWatchVideo)
route.post('/api/postWatchVideo', horizonController.postWatchVideo)

// ADMIN -> Screen Shots Section
route.get('/api/getScreenShots', horizonController.getScreenShots)
route.post('/api/postScreenShots', horizonController.postScreenShots)

// FUNCTIONALITIES
route.get('/api/gallery', horizonController.gallery)
route.post('/api/postImgToGallery', horizonController.postImgToGallery)
route.get('/api/mailing-list', horizonController.mailList)
route.post('/api/subscribe', horizonController.subscribe)

module.exports = route


// /products/zeiss
// /products/ltl
// /products/divel
// /products/roger-bacon

// /free-form/progressive
// /free-form/single-vision
// /free-form/bifocal