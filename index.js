const mongoose = require('mongoose');
const app = require('./app');


const DB = 'mongodb+srv://heliverse:heliverse@cluster0.o0vatww.mongodb.net/heliverse?retryWrites=true&w=majority'

let server;
mongoose.connect(DB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }).then(() => {
  console.log('Connected to MongoDB');
  server = app.listen(3000, () => {
    console.log(`Listening to port 3000`);
  });
});
