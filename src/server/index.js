const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;

const { render } = require('./render');

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.static(path.resolve(__dirname, "../assets")));

app.get('/', (req, res) => {
    render(res)
})

app.listen(PORT, () => {
    console.log(`App running at: http://localhost:${PORT}`);

})