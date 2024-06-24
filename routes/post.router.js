const router = require("express").Router()
const post_model = require("../models/post.model")

// create post
router.post("/", async (req, res) => {
    try {
        const new_post = await post_model.create(req.body)
        return res.status(201).json(new_post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// update post
router.put("/:id", async (req, res) => {
    try {
        const update_post = await post_model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(update_post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete post
router.delete("/:id", async (req, res) => {
    try {
        await post_model.findByIdAndDelete(req.params.id)
            .then(() => res.status(200).json({ message: "post o'chirib tashlandi" }))
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get all posts
router.get("/", async (req, res) => {
    try {
        const all_posts = await post_model.find()
        res.status(200).json(all_posts)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get one post
router.get("/:id", async (req, res) => {
    try {
        const find_post = await post_model.findById(req.params.id)
        res.status(200).json(find_post)
    } catch (error) {
        return res.status(500).json(error)
    }
})


module.exports = router