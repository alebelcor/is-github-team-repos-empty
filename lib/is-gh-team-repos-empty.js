'use strict';

module.exports = function (team) {
  return team['repos_count'] <= 0;
};
