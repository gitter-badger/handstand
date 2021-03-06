let fs = require('fs'),
util = require('../../../node_modules/istanbul/lib/object-utils.js'),
coverageJsonFile = process.argv[2];
coverageJson = fs.readFileSync(coverageJsonFile);
coverageReport = JSON.parse(coverageJson);
coverageSummary = util.summarizeCoverage(coverageReport),
cheer = function() {
    // woot!
},
blowUp = function(thing, summary) {
    console.log('coverage of ' + thing + ' failed');
    console.log('expected: 0 skipped, above 90% covered');
    console.log('actual: ', summary.skipped + ' skipped, ' + summary.pct + '% covered');
    process.exit(-1);
},
audit = function(summary, key) {
    if (summary[key].skipped === 0 &&
        summary[key].pct >= 90) {
        cheer()
    } else {
        blowUp(key, summary[key]);
    }
};

audit(coverageSummary, 'lines');
audit(coverageSummary, 'statements');
audit(coverageSummary, 'functions');
audit(coverageSummary, 'branches');