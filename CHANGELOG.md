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
