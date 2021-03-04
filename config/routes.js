const express = require('express')

module.exports = function(server) {
  // API routes
  const router = express.Router() // Express
  server.use('/api', router) // Middleware

  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')
}
