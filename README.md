# is-github-team-repos-empty

> Check if a GitHub team repository list is empty

[![npm version](https://img.shields.io/npm/v/is-github-team-repos-empty.svg)](https://npmjs.org/package/is-github-team-repos-empty)
[![Build Status](https://img.shields.io/travis/alebelcor/is-github-team-repos-empty/master.svg)](https://travis-ci.org/alebelcor/is-github-team-repos-empty)
[![Test Coverage](https://img.shields.io/coveralls/alebelcor/is-github-team-repos-empty/master.svg)](https://coveralls.io/github/alebelcor/is-github-team-repos-empty)

## Install

```bash
npm install --save is-github-team-repos-empty
```

## Setup

Set up `GITHUB_TOKEN` environment variable with your OAuth GitHub access token.

## Usage

```js
var isGithubTeamReposEmpty = require('is-github-team-repos-empty');

isGithubTeamReposEmpty('1234567');
//=> true
```

## API

### isGithubTeamReposEmpty(teamId)

Returns a **promise** that resolves to a boolean value of whether or not a GitHub team repository
list is empty.

#### teamId

Type: `string`

The ID of the GitHub team.

## License

MIT © Alejandro Beltrán
