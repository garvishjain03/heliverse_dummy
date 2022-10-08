const mongoose= require('mongoose');

const DB = process.env.DATABASE;

// let server;
mongoose.connect(DB, {
//   useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }).then(() => {
  console.log('Connected to MongoDB');
});
