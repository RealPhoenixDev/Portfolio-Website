import express from 'express'

const app = express()
app.set('view engine', 'ejs')

app.set('views',__dirname + '/web/')

app.get('/', (req, res) => {
    res.render('homePage/index')
})
app.get('/homePage/script.js', (req, res) => {
    res.sendFile(__dirname + '/web/homePage/script.js')
})


app.get('/projects', (req, res) => {
    res.render('homePage/projects')
})

app.get('/image.png', (req, res) => {
    res.sendFile(__dirname + '/web/homePage/image.png')
})

app.get('/quizImage.png', (req, res) => {
    console.log('test')
    res.sendFile(__dirname + '/web/homePage/quizImage.png')
})

app.get('/blog', (req, res) => {
    res.render('homePage/blog')
})


//Quiz game
app.get('/quiz', (req, res) => {
    res.render('quizGame/index')
})
app.get('/quiz/script.js', (req, res) => {
    res.sendFile(__dirname + '/web/quizGame/script.js')
})

app.get('/quiz/game.json', (req, res) => {
    res.sendFile(__dirname + '/web/quizGame/game.json')
})
// todo app
app.get('/todoApp', (req, res) => {
    res.render('todoApp/index')
})
app.get('/todoApp/script.js', (req, res) => {
    res.sendFile(__dirname + '/web/todoApp/script.js')
})




app.get('/src/web/output.css', (req, res) => {
    res.sendFile(__dirname + '/web/output.css')
})

app.listen(3000, () => {
    console.log('Listening at port 3000')
})

module.exports = app;