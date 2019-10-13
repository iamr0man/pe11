const express = require('express')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
const router = express.Router();

const Post = require('../../models/Post')
const Profile = require('../../models/Profile')
const User = require('../../models/User')

//@route    POST api/posts
//@desc     Create a post
//@access   Private

router.post('/', [
    auth,
    check('text', 'Text is required')
        .not()
        .isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
    }

    try {

        const user = await User.findOne({ id: req.body.id }).select('-password')
        console.log(req.body.user)
        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: user.id
        })

        const post = await newPost.save();

        res.json(post)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//@route    GET api/posts
//@desc     Get all posts
//@access   Private

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ data: -1 })

        res.json(posts)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

//@route    GET api/posts/:post_id
//@desc     Get post by ID
//@access   Private

router.get('/:post_id', auth, async (req, res) => {
    try {

        const post = await Post.findOne({ _id: req.params.post_id })

        if (!post) return res.status(404).json({ msg: 'Post not found' })

        res.json(post)
    } catch (err) {
        console.error(err.message)
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ msg: "Post not found" })
        }
        res.status(500).send('Server error')
    }
})

//@route    DELETE api/posts/:post_id
//@desc     Detele post    
//@access   Private

router.delete('/:post_id', auth, async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.post_id })

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' })
        }

        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }

        await post.remove()

        res.json({ msg: 'Post removed' })
    } catch (err) {
        console.error(err.message)
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ msg: "Post not found" })
        }
        res.status(500).send('Server error')
    }
})

//@route    PUT api/posts/like/:id
//@desc     Like post    
//@access   Private

router.put('/like/:id', auth, async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        // console.log()
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Post already liked' })
        }

        post.likes.unshift({ user: req.user.id })

        await post.save();

        res.json(post.likes)
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

//@route    PUT api/posts/unlike/:id
//@desc     Unlike post    
//@access   Private

router.put('/unlike/:id', auth, async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })

        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Post has not been liked' })
        }

        const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

        post.likes.splice(removeIndex, 1)

        await post.save();

        res.json(post.likes)
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

module.exports = router;