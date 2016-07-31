var taskCodes = require('./constants').taskCodes;
var severityLevels = require('./constants').severityLevels;
var textRules = require('./text-rules').textRules;
var http = require('http');
var https = require('https');
var rp = require('request-promise');

var helper = {
    splitTextIntoSentences: function(text) {
        var i, sentences;
        if (!text){
            return [];
        }
        sentences = text.split('\n');
        for (i = 0; i < sentences.length; ) {
            if (sentences[i]) {
                i += 1;
            } else {
                sentences.splice(i, 1);
            }
        }
        return sentences;
    },
    prepareTextForRulesCheck: function(text) {
        var i;
        if (!text){
            return '';
        }
        text = text.toLowerCase();
        text = text.replace(/\s{2,}/g, ' ');
        text = text.replace(/(‘|’)/g, '\'').replace(/(“|”)/g, '"');
        text = text.replace(/\bi\'m\b/g, 'i am');
        text = text.replace(/\b(you|we)\'re\b/g, '$1 are');
        text = text.replace(/\b(he|she|it|that)\'s\b/g, '$1 is');
        text = text.replace(/\b(i|you|we|he|she|it)\'ll\b/g, '$1 will');
        text = text.replace(/n\'t\b/g, ' not');
        text = text.replace(/\blet\'s\b/g, 'let us');
        text = text.replace(/\bokay\b/g, 'ok');
        return text;
    },
    isRuleRelevant: function(rule, taskCode, fromCultureCode, toCultureCode) {
        var c;
		switch (taskCode) {
            case taskCodes.READ: {
                if (!rule.read && !rule.info) {
                    return false;
                }
                break;
            }
            case taskCodes.WRITE: {
                if (!rule.write) {
                    return false;
                }
                break;
            }
        }
        for (c = 0; c < rule.cultures.length; c += 1) {
            var cultures = [];
		    cultures = rule.cultures[c].split(">");
			if (cultures[0] === fromCultureCode && cultures[1] === toCultureCode ||
                cultures[0] === fromCultureCode && cultures[1] === '*' ||
                cultures[0] === '*' && cultures[1] === toCultureCode ||
				cultures[0] === '*' && cultures[1] === '*') {
				return true;
            }
        }
        return false;
    },
	getIssues: function(taskCode, fromCultureCode, toCultureCode, text) {
        var result, r, p, warnings = [];
		result = {
				warnings: [],
				hints: []
		};
		//this.detectLanguage('this%20is%20a%20house');
        for (r = 0; r < textRules.length; r += 1) {
            if (this.isRuleRelevant(textRules[r], taskCode, fromCultureCode, toCultureCode)) {
                for (p = 0; p < textRules[r].patterns.length; p += 1) {
					if (text === '*' || textRules[r].patterns[p].test(text)) {
						if ((taskCode === taskCodes.WRITE) && textRules[r].write && (textRules[r].severity === severityLevels.WARN)) {
							result.warnings.push(textRules[r].write);
						} else if ((taskCode === taskCodes.WRITE) && textRules[r].write && (textRules[r].severity === severityLevels.HINT)) {
							result.hints.push(textRules[r].write);
						} else if ((taskCode === taskCodes.READ) && textRules[r].read && (textRules[r].severity === severityLevels.WARN)) {
							result.warnings.push(textRules[r].read);
						} else if ((taskCode === taskCodes.READ) && textRules[r].read && (textRules[r].severity === severityLevels.HINT)) {
							result.hints.push(textRules[r].read);
						}						
						if (text !== '*') {
                            break;
                        }
                    }
                }
            }
        }
        return result;
    },
	detectLanguage: function(text) {

		var options = {
			uri: 'https://api.idolondemand.com/1/api/sync/identifylanguage/v1?text=this%20is%20a%20house&apikey=322bc521-3d87-4906-b66b-4364b61b1098',
			method: 'GET'
		};

	rp(options)
		.then(console.log('##### eyald ############'))
		.catch(console.error);
		
		//https://api.idolondemand.com/1/api/sync/identifylanguage/v1?text=this%20is%20a%20house&apikey=322bc521-3d87-4906-b66b-4364b61b1098
	}
}

exports.helper = helper;