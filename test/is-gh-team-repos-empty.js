'use strict';

var test = require('ava');

var isGhTeamReposEmpty = require('../lib/is-gh-team-repos-empty');
var team = {};

test('it should return true if the team is empty', function (t) {
  team['repos_count'] = 0;
  t.true(isGhTeamReposEmpty(team));

  team['repos_count'] = -1;
  t.true(isGhTeamReposEmpty(team));
});

test('it should return false when the team is not empty', function (t) {
  team['repos_count'] = 1;
  t.false(isGhTeamReposEmpty(team));

  team['repos_count'] = 5;
  t.false(isGhTeamReposEmpty(team));

  team['repos_count'] = 10;
  t.false(isGhTeamReposEmpty(team));

  team['repos_count'] = 100;
  t.false(isGhTeamReposEmpty(team));
});
