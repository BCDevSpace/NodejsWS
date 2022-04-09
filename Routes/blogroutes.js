const express = require('express');
const blogController = require('../controllers/blogcontroller');

const router = express.Router();

router.get('/', (req, res) =>{
    //res.sendFile('./views/index.html', {root : __dirname});
   //  const blogs = [
   //      {title: "hello there"},
   //      {title: "how to create a new...."},
   //      {title: "weekend visit to ...."}
   //  ];
   //  res.render('index', {title: "Home", blogs});
   res.redirect('/blogs');
});

router.get('/about', blogController.blog_about);
router.get('/blogs', blogController.blog_index);
//posting data - create new blog
router.post('/blogs', blogController.blog_create_post);
//issue with url as '/blogs/create' resolved - issues intercepting with /:id
router.get('/blogs/create', blogController.blog_create_get);
//fetch details from DB
router.get('/blogs/:id', blogController.blog_details);
//delete from DB
router.delete('/blogs/:id', blogController.blog_delete);

module.exports = router;

/** 
//add new blog to DB
app.get('/add-blog', (req, res)=> {
    const blogadd = new Blog({
        title: 'new Blog 2',
        body: 'Test: new blog added'
    });
    blogadd.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
})
// fetch all blogs from DB
app.get('/all-blogs', (req, res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err) =>{
            console.log(err);
        })
});
//fetch single blog
app.get('/single-blog', (req, res)=>{
    Blog.findById('6246d63de55282d850a4e984')
    .then((result)=>{
        res.send(result);
    })
    .catch((err) =>{
        console.log(err);
    })
})
*/
