const {createUpwardServer} = require('@magento/upward-js');

createUpwardServer({
  upwardPath: 'upward.yml',
  bindLocal: true,
  logUrl: true,
  port: 8080,
});
