'use strict';

var ghGot = require('gh-got');

var getTeamUrl = require('./lib/get-team-url');
var filterResponse = require('./lib/filter-response');
var isGhTeamReposEmpty = require('./lib/is-gh-team-repos-empty');
var pkg = require('./package.json');
var getGotOptions = {
  headers: {
    'user-agent': pkg.repository.url
  }
};

module.exports = function (teamId) {
  return ghGot.get(getTeamUrl(teamId), getGotOptions)
    .then(filterResponse)
    .then(isGhTeamReposEmpty)
    .catch(console.error);
};
