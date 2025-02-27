const express = require('express');
const cors = require('cors');
const apiCategories = require('./routes/Categories')
const apiProducts = require('./routes/Products')




function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.get('/',(req,res) => {
    res.json({
      email: 'fredy.ballesteros@gmail.com',
      arquitectura: 'https://github.com/fredyballest/backend_node_evaluation/blob/master/PropuestaArquite.gif',
      herokudeploy: 'https://protected-temple-34810.herokuapp.com/'
    })

  })

  //ROUTES CATEGORIES
  apiCategories(app);
  //ROUTES PRODUCTS
  apiProducts(app)

  

  return app;
}

module.exports = createApp;
