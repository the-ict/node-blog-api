const router = require("express").Router()
const user_model = require("../models/user.model")
const bcrypt = require("bcrypt")

// REGISTER
router.post("/register", async (req, res) => {
    try {
        if (req.body.password) {
            // shifrlangan parol yaratish
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(req.body.password, salt)
            req.body.password = hash
            const create_user = await user_model.create(req.body)
            create_user && res.status(201).json(create_user)
        } else {
            res.status(400).json({ message: "Password mavjud emas !" })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// LOGIN 
router.post("/login", async (req, res) => {
    try {
        const { username } = req.body
        const find_user = await user_model.findOne({ username })
        if (await bcrypt.compare(req.body.password, find_user.password)) {
            return res.status(200).json(find_user)
        } else res.status(404).json({ message: "userni topa olmadim ..." })
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router
