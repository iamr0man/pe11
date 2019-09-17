const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose
    .connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: ['framework', 'frontend']
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses = await Course.find()
        .limit(10)
        .sort({
            name: 1
        })
        .select({
            name: 1,
            // price: 1,
            id: 1
        });
    console.log(courses);
}

// getCourses();

async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(
        id,
        {
            $set: {
                author: 'Jackson',
                isPublished: false
            }
        },
        {
            new: true
        }
    );
    console.log(course);
}

updateCourse('5a68fde3f09ad7646ddec17e');

async function removeCourse(id) {
    // const result = await Course.deleteOne({ _id: id });
    const result = await Course.findByIdAndRemove(id);

    console.log(result);
}

// removeCourse('5a68fde3f09ad7646ddec17e');
