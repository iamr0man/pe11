const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course.find()
        .sort({
            name: 1,
            price: 1
        })
        .select({
            name: 1,
            price: -1
        });
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();