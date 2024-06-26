import express from 'express';
import path from 'path'
const app = express();

const product = [
    { id: 1, title: "i phone 17", price: 17000 },
    { id: 2, title: "one plus", price: 16600 },
    { id: 3, title: "galaxy s23 ultera", price: 51000 },
]
//@route-'/'
//@method-get
app.get('/', (req, res) => {
    res.json({ message: 'this is home route', success: true })
})

// @route-'/products'
//@method=get
app.get('/products', (req, res) => {
    res.json({ message: 'all products', product, success: true })
})

//@route-'/person'
//@method-get
app.get('/person', (req, res) => {
    const dir = path.resolve();
    const filePath = path.join(dir, './index.html')
    res.sendFile(filePath);
})

const port = 1000;
app.listen(port, () => console.log(`server is running on ${port}`));