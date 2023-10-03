# Oura Ring API Client

Typescript client for [Oura Ring API](https://cloud.ouraring.com/v2/docs).
This is a restructuring of the code provided by [Takahiro MITSUOKA](https://github.com/mitsuoka0423/oura-api-v2-client).

[![NPM Version][npm-badge]][npm-url]
[![Linux Build][build-badge]][travis-url]
[![Test Coverage][coveralls-badge]][coveralls-url]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![CodeFactor][codefactor-badge]][codefactor-url]
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flpezet%2Foura-ring-api-client.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Flpezet%2Foura-ring-api-client?ref=badge_shield)

You'll need to create a [personal access token](https://cloud.ouraring.com/personal-access-tokens) on Oura Ring to query their API.

```typescript
import { 
    DailyActivityResponse, 
    HeartROuraApiV2Client, 
    PersonalInfoResponse } from '@lpezet/oura-ring-api-client';

const ouraApiV2Client = new OuraApiV2Client(process.env.OURA_PERSONAL_TOKEN || '');
const main = async () => {

    const dailyActivity:DailyActivityResponse = await ouraApiV2Client.dailyActivity();
    console.log(dailyActivity);
    
    const personalInfo:PersonalInfoResponse = await ouraApiV2Client.personalInfo();
    console.log(personalInfo);
};

main();
```

# Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 14.0 or higher is required.

Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install @lpezet/oura-ring-api-client
```


# License

[MIT](LICENSE)

# Publishing

To publish next version of `oura-ring-api-client`, run the following:

```bash
npm version patch
git push --tags origin master
npm run dist
npm publish --access public
```

[npm-badge]: https://badge.fury.io/js/%40lpezet%2Foura-ring-api-client.svg
[npm-url]: https://npmjs.com/package/@lpezet/oura-ring-api-client
[build-badge]: https://github.com/lpezet/oura-ring-api-client/actions/workflows/default.yml/badge.svg
[coveralls-badge]: https://coveralls.io/repos/github/lpezet/oura-ring-api-client/badge.svg?branch=main
[coveralls-url]: https://coveralls.io/github/lpezet/oura-ring-api-client?branch=main
[vulnerabilities-badge]: https://snyk.io/test/github/lpezet/oura-ring-api-client/badge.svg
[vulnerabilities-url]: https://snyk.io/test/github/lpezet/oura-ring-api-client
[codefactor-badge]: https://www.codefactor.io/repository/github/lpezet/oura-ring-api-client/badge
[codefactor-url]: https://www.codefactor.io/repository/github/lpezet/oura-ring-api-client

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flpezet%2Foura-ring-api-client.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Flpezet%2Foura-ring-api-client?ref=badge_large)