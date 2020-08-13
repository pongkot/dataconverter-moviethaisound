const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const csv = require('csvtojson')


app.post('/', upload.single('file'), (req, res) => {
    const file = req.file
    csv()
        .fromFile(file.path)
        .then((jsonObj)=>{
            res.attachment('data.json');
            res.status(200).send(jsonObj)
        })

})

app.listen(3000, () => {
    console.log('app start :3000')
})