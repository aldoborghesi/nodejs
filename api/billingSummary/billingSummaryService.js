const _ = require('lodash')

//dependencia_
const BillingCycle = require('../billingCycle/billingCycle')

// mas uma função midleare

function getSummary(req, res) {
  BillingCycle.aggregate([{
      $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
  }, {
      $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
  }, {
      $project: {_id: 0, credit: 1, debt: 1}
  }]).exec((error, result) => {
      if(error) {
          res.status(500).json({errors: [error]})
      } else {
          res.json(result[0] || { credit: 0, debt: 0 })
      }
  })
}

module.exports = {getSummary}
