# changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

Change categories are:

* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for once-stable features removed in upcoming releases.
* `Removed` for deprecated features removed in this release.
* `Fixed` for any bug fixes.
* `Security` to invite users to upgrade in case of vulnerabilities.

## [Unreleased]
* Nothing documented.

## [5.0.0] - 2021-07-30
### Added
* Support for using [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
	instead of some external lib.
* Added support for NodeJS 16.
### Changed
* Optimized to run through query parameter set only once, instead of 3 times.
* Standardized code styles with ESLint and editorconfig.
* **Breaking:** Dropped support for NodeJS 10, now officially
	supporting only LTS versions, which are 12 and 14.

## [4.0.0] - 2020-07-24
### Changed
* **Breaking:** Dropped support for NodeJS 6 and 8, now officially
	supporting only LTS versions, which are 10 and 12.
* **Breaking:** Moved location of `/index.js` to `/src/index.js` which
	you shouldn't use. Instead, if you can't import/require `'query-to-json-api'`
	directly, use one of the files in `/dist` which are CommonJS, ES exports,
	and a minimized version for the browser. See comments and changes in
	[this pull request](https://github.com/saibotsivad/query-to-json-api/pull/2)
	for more details.

## [3.0.0] - 2018-05-17
### Changed
* **Breaking:** In an attempt to stick with the JSON-API specs more
    carefully, the `filter` parameter is left as-is and if it has
    square brackets those will not be processed. For more details
    see: https://github.com/saibotsivad/query-to-json-api/issues/1

## [2.0.0] - 2018-04-06
### Changed
* **Breaking:** Removed dependency on `query-string`, instead pass
    in a pre-parsed query object.

## [1.0.1] - 2018-01-30
Initial release!

[Unreleased]: https://github.com/saibotsivad/imap-box-names/compare/develop...master
[3.0.0]: https://github.com/saibotsivad/imap-box-names/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/saibotsivad/imap-box-names/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/saibotsivad/imap-box-names/compare/v1.0.0...v1.0.1
