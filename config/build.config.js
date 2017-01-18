var pkg = require('../package.json');
var bower = require('../bower.json');
var fs = require('fs');

module.exports = {
  // Name that will be used in angular.module
  moduleName: 'angular.confirm.bootstrap',

  // Name of the js file in dist
  distFileName: 'angular-confirm-bootstrap',

  // Name that will show up in text
  readableName: '"Angular Confirm Bootstrap"',

  // Your google analytics id, if you have one and want it on this site
  googleAnalytics: '',

  pkg: pkg,
  name: pkg.name,
  version: pkg.version,
  repository: (pkg.repository && pkg.repository.url) ? pkg.repository.url
    .replace(/^git/, 'https')
    .replace(/(\.git)?\/?$/, '')
    : null,
};
