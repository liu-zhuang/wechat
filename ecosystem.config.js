module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
   apps : [
   {
    name      : 'wechat',
    script    : 'app.js',
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
   deploy : {
    production : {
      user : 'root',
      host : '45.78.15.132 ',
      ref  : 'origin/master',
      repo : 'git@github.com:liu-zhuang/wechat.git',
      path : '/var/www/production',
      ssh_options: "StrictHostKeyChecking=no"
    }
  }
};
