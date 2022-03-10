const express = require('express');
const app = express();
app.use(express.static('./public'))

const port = process.env.PORT || 3000;
app.set('port', port)

try {
    app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
    );
} catch (error) {
    console.log(error);
}
