const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const course = require('./data/course.json');

app.get('/', (req, res) =>{
    res.send('API is running');
});

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/course/:id', (req, res) => {
    const single_course_id = req.params.id;
    // console.log(id);
    const selectedCourse = course.find( c => c.course_id === single_course_id)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('Study Shake Server is Running');
})