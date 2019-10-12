const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Profile = require('../../models/Profile')
const User = require('../../models/User')

//@route    GET api/profile
//@desc     Get current users profile
//@access   Private

router.get('/', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'No profile for this user' })
        }

        res.json(profile)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//@route    POST api/profile
//@desc     Create or update user profile
//@access   Private

router.post('/', [auth, [
    check('status', 'Status is required')
        .not()
        .isEmpty(),
    check('skills', 'Skills is required')
        .not()
        .isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const profileFields = {};
    profileFields.user = req.user.id;
    // if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubusername)
        profileFields.githubusername = req.body.githubusername;
    if (typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }

    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    try {
        let profile = await Profile.findOne({ user: req.user.id })

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );

            return res.json(profile)
        }

        profile = new Profile(profileFields)

        await profile.save();
        res.json(profile);

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//@route    POST api/profile/all
//@desc     Get all profiles
//@access   Public

router.get('/all', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar'])
        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

//@route    POST api/profile/user/:user_id
//@desc     Get profile by user ID
//@access   Public

router.get('/user/:user_id', async (req, res) => {
    try {
        const profiles = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar'])

        if (!profiles) return res.status(400).json({ msg: "Profile not found" })

        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: "Profile not found" })
        }
        res.status(500).send('Server error')
    }
})

//@route    DELETE api/profile/all
//@desc     Delete profile, user & posts
//@access   Private

router.delete('/', auth, async (req, res) => {
    try {
        //Remove profile
        console.log(req.user.id)
        await Profile.findOneAndRemove({ user: req.user.id })
        //Remove user
        await User.findOneAndRemove({ _id: req.user.id })

        res.json({ msg: 'User deleted' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

//@route    PUT api/profile/experience
//@desc     Add profile experience
//@access   Private

router.put('/experience', [auth,
    check('title', 'Title is required')
        .not()
        .isEmpty(),
    check('company', 'Company is required')
        .not()
        .isEmpty(),
    check('from', 'From is required')
        .not()
        .isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() })

    const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
    };

    try {

        const profile = await Profile.findOne({ user: req.user.id })

        profile.experience.unshift(newExp);

        await profile.save();

        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router;