const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

// Rotas restful express
BillingCycle.route('count', function(req, res, next) {
  //api mongoose
  BillingCycle.count(function(error, value){
    if(error) {
      // retorna um objeto coo resposta, atributo errors e um array 'error'
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})
module.exports = BillingCycle
