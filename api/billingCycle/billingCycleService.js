const BillingCycle = require('./billingCycle')
const _ = require('lodash')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', sendErrorsOrNext).after('put',sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestFulErrors) {
  const errors = []
  _.forIn (nodeRestFulErrors, error => errors.push(error.message))
  return errors
}
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
