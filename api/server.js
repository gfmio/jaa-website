//
// Simple example server
//

const config = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  printLog: true,

  mongoDB: {
    host: process.env.MONGODB_HOST || '0.0.0.0',
    port: process.env.MONGODB_PORT || 27017,
    database: process.env.MONGODB_DATABASE || 'test',
    options: {}
  }, // see also http://mongoosejs.com/docs/connections.html
  redis: {
    host: process.env.REDIS_HOST || '0.0.0.0',
    port: process.env.REDIS_PORT || 6379
  },
  session: {
    key: 'express.sid',
    secret: 'crypto cat',

    resave: false,
    saveUninitialized: true,
    rolling: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 15, // would expire after 15 minutes
      httpOnly: false, // The cookie only accessible by the web server
      signed: true // Indicates if the cookie should be signed
    }
  },

  passport: {
    loginBaseUrl: '/login',
    strategies: [{
      name: 'google',
      strategy: require('passport-google-oauth20').Strategy,
      urlName: 'google',
      authOptions: {
        scope: ['profile'],
        hd: 'jacobs-alumni.de'
      },
      callbackOptions: {
        successRedirect: '/',
        failureRedirect: '/'
      },
      config: {
        clientID: process.env.GOOGLE_CLIENT_ID || '473933694379-fqugkhg5esr1bv1m7j5srjbeq44seee1.apps.googleusercontent.com',
        clientSecret: process.env.GOOGLE_SECRET_ID || 'RfuAM1tjF3_A0DiHpGvM3a0D',
        callbackURL: 'http://jacobs-alumni.de/' // // /login/google/return
      }
    }]
  },

  rbac: {
    roles: {
      guest: {
        'cats:collection:get': true
        'cats:collection:post': true
        'users:collection:post': true
      },
      user: {
        'users:item:put': true,
        'users:item:patch': true
      },
      admin: {
        'users:collection:get': true,
        'users:collection:post': true,
        'users:item:get': true,
        'users:item:put': true,
        'users:item:patch': true,
        'users:item:delete': true
      },
      superadmin: {
        'users:collection:get': true,
        'users:collection:post': true,
        'users:collection:put': true,
        'users:collection:patch': true,
        'users:collection:delete': true,
        'users:item:get': true,
        'users:item:post': true,
        'users:item:put': true,
        'users:item:patch': true,
        'users:item:delete': true
      }
    },
    permissions: {
      'users:collection:get': false,
      'users:collection:post': false,
      'users:collection:put': false,
      'users:collection:patch': false,
      'users:collection:delete': false,
      'users:item:get': false,
      'users:item:post': false,
      'users:item:put': false,
      'users:item:patch': false,
      'users:item:delete': false
    }
  }
}

var server = require('csam-api').Server(config)
server.configurePassport(config.passport)

//
// Add models
//

const Cat = {
  name: { type: String, required: true }
}

server.makeRoutes({
  schema: Cat,
  id: 'Cat'
})

// Add default 404 handler
server.addDefaultRoute()

// Run the server
server.run()
