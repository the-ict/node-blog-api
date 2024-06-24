const router = require("express").Router()
const bcrypt = require("bcrypt")
const user_model = require("../models/user.model")

// USER UPDATE
router.put("/:id", async (req, res) => {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(req.body.password, salt)
            req.body.password = hash
        }
        const update_user = await user_model.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true })
        if (update_user) res.status(200).json(update_user)
    } catch (error) {
        res.status(500).json(error)
    }
})

// USER DELETE
router.delete("/:id", async (req, res) => {
    try {
        await user_model.findByIdAndDelete(req.params.id)
            .then(() => res.status(200).json({ message: "Muvaffaqiyatli o'chirildi." }))
            .catch(err => res.status(600).json({ message: "user o'chirilmadi" }))
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router