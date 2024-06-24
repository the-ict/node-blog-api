
// import modules
const express = require("express")
const mongoose = require("mongoose")
const multer = require('multer')
const path = require("path")

const uploadDir = path.join(__dirname, "upload")
// multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => cb(null, file.originalname)
})

const upload = multer({ storage })

// import router
const authRouter = require("./routes/auth.router")
const userRouter = require("./routes/user.route")
const postRouter = require("./routes/post.router")

// configurations
const app = express()
app.use(express.json())

// routes
app.use('/api/auth', authRouter)
app.use("/api/user", userRouter)
app.use('/api/post', postRouter)

// test router
app.get("/", (req, res) => { res.send('express is run') })

// upload router
app.post('/upload', upload.single("file"), (req, res) => {
    res.status(200).json({ message: "file muvaffaqiyatli yuklandi" })
})

// start application
const start = async () => {
    try {
        const port = process.env.PORT || 5000
        await mongoose.connect(process.env.MONGO_URL)
            .then(() => console.log("Mongo is run"))
            .catch(err => console.log(err))
        app.listen(port, () => console.log(`Project is running ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()