// // Business Logic: Get all articles
// app.get("/articles", (req, res) => {
//     console.log('here into get all articles');
//     res.status(200).json({
//         result: articles,
//         message: 'Here all artciles'
//     })
// });


// // Business Logic: Add article
// app.post("/articles", (req, res) => {
//     console.log('here into add article', req.body);
//     articles.push(req.body);
//     res.status(200).json({
//         message: 'Added with sucess'
//     })
// });

// // Business Logic: get article by ID
// app.get("/articles/:id", (req, res) => {
//     console.log('Here into get article by id', req.params.id);
//     let findedArticle = articles.find((obj) => {
//         return obj.id == req.params.id
//     });
//     res.status(200).json({
//         result: findedArticle,
//         message: 'Here finded Article'
//     });
// });

// // Business Logic: Edit article
// app.put("/articles/:id", (req, res) => {
//     console.log('Here into edit article id', req.params.id);
//     console.log('Here into edit article body', req.body);
//     for (let i = 0; i < articles.length; i++) {
//         if (articles[i].id == req.params.id) {
//             articles[i] = req.body;
//             break;
//         }
//     }
//     res.status(200).json({
//         message: 'Edited with success'
//     })
// });