const express = require('express')

const app = express()
const notifCount = 0;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
  userNotif();
})

const = userNotif() => {
  console.log("On going log count", notifCount);
  notifCount++
}
