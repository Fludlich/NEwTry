require('dotenv').config()
const app = require('./app');
const {connectMongo} = require('./db/conection');
const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await connectMongo()
    app.listen(PORT, (error)=>{
      if (error) {
        console.error('Error at server launch:', error)
        console.log(`Server running at port ${PORT}`)
      };
    });
  } catch (error) {
    console.error('Error at server launch:', error)
  }
};

start()
