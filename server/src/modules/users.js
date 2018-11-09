const ManagementClient = require('auth0').ManagementClient
const auth0 = new ManagementClient({
  domain: 'github-star-enhancement.auth0.com',
  clientId: '634zqN5w5XLIMjqHuB06IrvvThf5yeog',
  // clientId: '61WnMMQ0sCuzSchrQPHeH0rBrSZAJxMs',
  // clientSecret: 'xwkd3ndhbDu2PjX1DchUtGp-gIPMrJAXHVp0usWK-r30CRTx7kKivIneXEBsw3yA',
  clientSecret: 'J1hFjDeumCU3FiP3s3hgHDWWDM3zda0N0vwA2G8f9UibR4yNNs4lgluDYZK3eLg2',
  scope: 'read:users update:users',
})


auth0.getUsers().then(res => console.log(res)).catch(err => console.error(err))
auth0.getUser({

}).then(res => console.log(res)).catch(err => console.error(err))