var textRules = [
    {
        cultures:   ['US>IL'],
        severity:	'WARN',
		patterns:   [/\bissues?\b/],
		read:       'An "issue" might mean a problem that must be addressed.',
        write:      'An "issue" might be interpreted as a rather trivial matter, not a serious obstacle.'
	},
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\bissues?\b/],
        read:       'An "issue" might mean a rather trivial matter, not a serious obstacle.',
        write:      'An "issue" might be interpreted as a problem that must be addressed.'
    },
    {
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\bconcerns?\b/],
        read:       'A "concern" might mean a problem that must be addressed.',
        write:      'A "concern" might be interpreted as a rather trivial matter, not a serious obstacle.'
    },
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\bconcerns?\b/],
        read:       'A "concern" might mean a rather trivial matter, not a serious obstacle.',
        write:      'A "concern" might be interpreted as a problem that must be addressed.'
    },
	{
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\bchalleng(e|es|ing)\b/],
        read:       'A "challenge" might mean a problem that must be solved.',
        write:      'A "challenge" might be interpreted as something that would be interesting to overcome, but not as a problem that must be solved.'
    },
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\bchalleng(e|es|ing)\b/],
        read:       'A "challenge" might mean something that would be interesting to overcome, but not as a problem that must be solved.',
        write:      'A "challenge" might be interpreted as a problem that must be solved.'
    },
    {
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\byou may want to\b/],
        read:       '"You may want to..." might mean something needs to be changed because there is a problem.',
        write:      '"You may want to..." might be interpreted as a mere recommendation.'
    },
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\byou may want to\b/],
        read:       '"You may want to..." might mean a mere recommendation.',
        write:      '"You may want to..." might be interpreted as something needs to be changed because there is a problem.'
    },
    {
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\bdid i understand you correctly when you said\b/],
        read:       '"Did I understand you correctly when you said..." might mean I am amazed that you said something so ridiculous.',
        write:      '"Did I understand you correctly when you said..." might be interpreted as a straightforward request for clarification.'
    },
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\bdid i understand you correctly when you said\b/],
        read:       '"Did I understand you correctly when you said..." might mean a straightforward request for clarification.',
        write:      '"Did I understand you correctly when you said..." might be interpreted as I am amazed that you said something so ridiculous.'
    },
    {
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\bi(\'d| will| would) appreciate\b/],
        read:       '"I would appreciate..." might mean something essential that must be performed or addressed.',
        write:      '"I would appreciate..." might be interpreted as merely a polite request.'
    },
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\bi(\'d| will| would) appreciate\b/],
        read:       '"I would appreciate..." might mean merely a polite request.',
        write:      '"I would appreciate..." might be interpreted as something essential that must be performed or addressed.'
    },
	{
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\b(will be|would be|is) appreciated\b/],
        read:       '"...would be appreciated" might mean something essential that must be performed or addressed.',
        write:      '"...would be appreciated" might be interpreted as merely a polite request.'
    },
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\b(will be|would be|is) appreciated\b/],
        read:       '"...would be appreciated" might mean merely a polite request.',
        write:      '"...would be appreciated" might be interpreted as something essential that must be performed or addressed.'
    },
	{
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\bi(\'d| will) make an effort\b/],
        read:       '"I will make an effort" might mean I do NOT really commit, hence I may or may not change priorities or try harder than usual.',
        write:      '"I will make an effort" might be interpreted as a real commitment to make an extra effort.'
    },
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\bi(\'d| will) make an effort\b/],
        read:       '"I will make an effort" might mean a real commitment to make an extra effort.',
        write:      '"I will make an effort" might be interpreted as I do NOT really commit, hence I may or may not change priorities or try harder than usual.'
    },
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\b(ASAP|asap|A\.S\.A\.P|a\.s\.a\.p)\b/],
        read:       '"ASAP" is usually not meant to be interpreted as an order, but something more like "at your earliest convenience".',
        write:      '"ASAP" might be interpreted as a rude order.'
    },
    {
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\bnext (sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/],
        read:       '"Next X-day" might mean the nearest X-day (this week). It is better to ask for a specific date.',
        write:      '"Next X-day" might be interpreted as the X-day more than a week away. It is better to use a specific date.'
    },
	{
        cultures:   ['IL>US'],
		severity:	'WARN',
        patterns:   [/\bnext (sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/],
        read:       '"Next X-day" might mean the X-day more than a week away. It is better to ask for a specific date.',
        write:      '"Next X-day" might be interpreted as the nearest X-day (this week). It is better to use a specific date.'
    },
//	{
//        cultures:   ['US>IL'],
//		severity:	'WARN',
//        patterns:   [/\b1\/2\b|\b1\/3\b|\b1\/4\b|\b1\/5\b|\b1\/6\b|\b1\/7\b|\b1\/8\b|\b1\/9\b|\b1\/10\b|\b1\/11\b|\b1\/12\b|\b2\/1\b|\b2\/3\b|\b2\/4\b|\b2\/5\b|\b2\/6\b|\b2\/7\b|\b2\/8\b|\b2\/9\b|\b2\/10\b|\b2\/11\b|\b2\/12\b|\b3\/1\b|\b3\/2\b|\b3\/4\b|\b3\/5\b|\b3\/6\b|\b3\/7\b|\b3\/8\b|\b3\/9\b|\b3\/10\b|\b3\/11\b|\b3\/12\b|\b4\/1\b|\b4\/2\b|\b4\/3\b|\b4\/5\b|\b4\/6\b|\b4\/7\b|\b4\/8\b|\b4\/9\b|\b4\/10\b|\b4\/11\b|\b4\/12\b|\b5\/1\b|\b5\/2\b|\b5\/3\b|\b5\/4\b|\b5\/6\b|\b5\/7\b|\b5\/8\b|\b5\/9\b|\b5\/10\b|\b5\/11\b|\b5\/12\b|\b6\/1\b|\b6\/2\b|\b6\/3\b|\b6\/4\b|\b6\/5\b|\b6\/7\b|\b6\/8\b|\b6\/9\b|\b6\/10\b|\b6\/11\b|\b6\/12\b|\b7\/1\b|\b7\/2\b|\b7\/3\b|\b7\/4\b|\b7\/5\b|\b7\/6\b|\b7\/8\b|\b7\/9\b|\b7\/10\b|\b7\/11\b|\b7\/12\b|\b8\/1\b|\b8\/2\b|\b8\/3\b|\b8\/4\b|\b8\/5\b|\b8\/6\b|\b8\/7\b|\b8\/9\b|\b8\/10\b|\b8\/11\b|\b8\/12\b|\b9\/1\b|\b9\/2\b|\b9\/3\b|\b9\/4\b|\b9\/5\b|\b9\/6\b|\b9\/7\b|\b9\/8\b|\b9\/10\b|\b9\/11\b|\b9\/12\b|\b10\/1\b|\b10\/2\b|\b10\/3\b|\b10\/4\b|\b10\/5\b|\b10\/6\b|\b10\/7\b|\b10\/8\b|\b10\/9\b|\b10\/11\b|\b10\/12\b|\b11\/1\b|\b11\/2\b|\b11\/3\b|\b11\/4\b|\b11\/5\b|\b11\/6\b|\b11\/7\b|\b11\/8\b|\b11\/9\b|\b11\/10\b|\b11\/12\b|\b12\/1\b|\b12\/2\b|\b12\/3\b|\b12\/4\b|\b12\/5\b|\b12\/6\b|\b12\/7\b|\b12\/8\b|\b12\/9\b|\b12\/10\b|\b12\/11\b/],
//        read:       'If the sentence contains a date, something like "1/2" probably means January 2nd and not February 1st.',
//        write:      'If the sentence contains a date, it is better to write dates like "January 2nd" instead of "1/2".'
//    },
//	{
//        cultures:   ['IL>*'],
//		severity:	'WARN',
//        patterns:   [/\b1\/2\b|\b1\/3\b|\b1\/4\b|\b1\/5\b|\b1\/6\b|\b1\/7\b|\b1\/8\b|\b1\/9\b|\b1\/10\b|\b1\/11\b|\b1\/12\b|\b2\/1\b|\b2\/3\b|\b2\/4\b|\b2\/5\b|\b2\/6\b|\b2\/7\b|\b2\/8\b|\b2\/9\b|\b2\/10\b|\b2\/11\b|\b2\/12\b|\b3\/1\b|\b3\/2\b|\b3\/4\b|\b3\/5\b|\b3\/6\b|\b3\/7\b|\b3\/8\b|\b3\/9\b|\b3\/10\b|\b3\/11\b|\b3\/12\b|\b4\/1\b|\b4\/2\b|\b4\/3\b|\b4\/5\b|\b4\/6\b|\b4\/7\b|\b4\/8\b|\b4\/9\b|\b4\/10\b|\b4\/11\b|\b4\/12\b|\b5\/1\b|\b5\/2\b|\b5\/3\b|\b5\/4\b|\b5\/6\b|\b5\/7\b|\b5\/8\b|\b5\/9\b|\b5\/10\b|\b5\/11\b|\b5\/12\b|\b6\/1\b|\b6\/2\b|\b6\/3\b|\b6\/4\b|\b6\/5\b|\b6\/7\b|\b6\/8\b|\b6\/9\b|\b6\/10\b|\b6\/11\b|\b6\/12\b|\b7\/1\b|\b7\/2\b|\b7\/3\b|\b7\/4\b|\b7\/5\b|\b7\/6\b|\b7\/8\b|\b7\/9\b|\b7\/10\b|\b7\/11\b|\b7\/12\b|\b8\/1\b|\b8\/2\b|\b8\/3\b|\b8\/4\b|\b8\/5\b|\b8\/6\b|\b8\/7\b|\b8\/9\b|\b8\/10\b|\b8\/11\b|\b8\/12\b|\b9\/1\b|\b9\/2\b|\b9\/3\b|\b9\/4\b|\b9\/5\b|\b9\/6\b|\b9\/7\b|\b9\/8\b|\b9\/10\b|\b9\/11\b|\b9\/12\b|\b10\/1\b|\b10\/2\b|\b10\/3\b|\b10\/4\b|\b10\/5\b|\b10\/6\b|\b10\/7\b|\b10\/8\b|\b10\/9\b|\b10\/11\b|\b10\/12\b|\b11\/1\b|\b11\/2\b|\b11\/3\b|\b11\/4\b|\b11\/5\b|\b11\/6\b|\b11\/7\b|\b11\/8\b|\b11\/9\b|\b11\/10\b|\b11\/12\b|\b12\/1\b|\b12\/2\b|\b12\/3\b|\b12\/4\b|\b12\/5\b|\b12\/6\b|\b12\/7\b|\b12\/8\b|\b12\/9\b|\b12\/10\b|\b12\/11\b/],
//        read:       'If the sentence contains a date, something like "1/2" might mean February 1st and not January 2nd.',
//        write:      'If the sentence contains a date, it is better to write dates like "January 2nd" instead of "1/2".'
//    },
	{
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\b10[X|x]\b/],
        read:       '"10x" is often used as an abbreviation for "thanks", or "thank you".',
        write:      'It is better to use "thanks" or "thank you" instead of "10x".'
    },
	{
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\bpls[\.,]?\s\b/],
        read:       '"pls." is often used as an abbreviation for "please".',
        write:      'It is better to use "please" instead of "pls.".'
    },
	{
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\blisten to (me|what i)\b/],
        read:       '"Listen to me" might mean I want to get your attention.',
        write:      '"Listen to me" might be interpreted as an arrogant command.'
    },
    {
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\byou (are|were) wrong\b/],
        read:       '"You are wrong" might mean I disagree with your point of view and want to discuss it some more, so that we can reach an agreement as to the best approach.',
        write:      '"You are wrong" might be interpreted as a very strong insult.'
    },
    {
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\bok,? i understand\b/],
        read:       '"OK, I understand" might mean I understand and agree with your point of view, i.e. you have persuaded me.',
        write:      '"OK, I understand" might be interpreted as a way of saying I disagree but do not wish to discuss it any further.'
    },
    {
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\blet us move on\b/],
        read:       '"Let us move on" might mean I understand and agree with your point of view, i.e. you have persuaded me.',
        write:      '"Let us move on" might be interpreted as a way of saying I disagree and do not wish to discuss it any further.'
    },
    {
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\b(is|was) your fault\b/],
        read:       '"It is your fault" might mean I need you to acknowledge that is was not my fault, but this has nothing to do with our working together as appreciative colleagues.',
        write:      '"It is your fault" might be interpreted as an serious accusation.'
    },
    {
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\byou (are|were) the one who\b/],
        read:       '"You were the one who..." might mean I need you to acknowledge that is was not my fault. However, that has nothing to do with our working together as respectful colleagues.',
        write:      '"You were the one who..." might be interpreted as an insult and a sign of disrespect.'
    },
    {
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\b(is|are|was|were|will be) (ok|fine)\b/],
        read:       '"X is ok/fine" might mean X is really good.',
        write:      '"X is ok/fine" might be interpreted as I think X is just acceptable.'
    },
    {
        cultures:   ['IL>*'],
		severity:	'WARN',
        patterns:   [/\bdo it (\w|\s)*other way\b/],
        read:       '"Do it in another way" might mean I am giving you a helpful suggestion because I am interested in improving the result.',
        write:      '"Do it in another way" might be interpreted as a command.'
    },
	{
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bi hear what you (say|are saying)\b/],
        read:       '"I hear what you are saying" might mean I disagree but do not wish to discuss it any further.',
        write:      '"I hear what you are saying" might be interpreted as I accept what you said or wrote.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bwith the greatest respect\b/],
        read:       '"With the greatest respect" might mean I do not respect you at all...',
        write:      '"With the greatest respect" might be interpreted as a sign of courtesy.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\b(this|that) is not bad\b/],
        read:       '"That is not bad" might mean That’s good.',
        write:      '"That is not bad" might be interpreted as That is not good enough.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bbrave proposal\b/],
        read:       'A "brave proposal" might mean An insane proposal.',
        write:      'A "brave proposal" might be interpreted as a sign of respect and recognition of a bold statement.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bquite good\b/],
        read:       '"Quite good" might mean A bit disappointing.',
        write:      '"Quite good" might be interpreted as pretty good.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bi(\'d| will| would) suggest\b/],
        read:       '"I would suggest" might mean Do it or be prepared to justify yourself.',
        write:      '"I would suggest" might be interpreted as an optional proposal.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bincidentally\b/],
        read:       '"Incidentally..." might mean The primary purpose of our discussion is...',
        write:      '"Incidentally..." might be interpreted as something insignificant or not really important.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bby the way\b/],
        read:       '"By the way..." might mean The primary purpose of our discussion is...',
        write:      '"By the way..." might be interpreted as something insignificant or not really important.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bbit disappoin(t|ts|ted|ting)\b/],
        read:       '"Bit disappointing" might mean annoying or frustrating',
        write:      '"Bit disappointing" might be interpreted as some insignificant disappointment.'
    },
    {
        cultures:   ['GB>*', 'US>IL'],
		severity:	'WARN',
        patterns:   [/\bvery interesting\b/],
        read:       '"Very interesting" might mean This is nonsense.',
        write:      '"Very interesting" might be interpreted as pretty interesting.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bi(\'d| will| would) bear it in mind\b/],
        read:       '"I would bear it in mind" might mean I do not think it is important.',
        write:      '"I would bear it in mind" might be interpreted as I recognize the importance of this issue.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bit (is|was) my fault\b/],
        read:       '"It is my fault" might mean It is YOUR fault.',
        write:      '"It is my fault" might be interpreted as taking responsibility for what went wrong.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\byou (should|must) come for dinner\b/],
        read:       '"You must come for dinner" might mean that it is not really an invitation (particularly if no specific date is indicated), just being polite...',
        write:      '"You must come for dinner" might be interpreted as a genuine invitation for a meal.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bi almost agree\b/],
        read:       '"I almost agree" might mean I do not agree at all.',
        write:      '"I almost agree" might be interpreted as an agreement with just some trivial issue to be resolved.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bminor comments?\b/],
        read:       '"Minor comments" might mean A complete rewrite is needed.',
        write:      '"Minor comments" might be interpreted as I have minor insignificant issues with this.'
    },
    {
        cultures:   ['GB>*'],
		severity:	'WARN',
        patterns:   [/\bconsider (\w|\s)*other options?\b/],
        read:       '"Consider other options" might mean I do not like your idea.',
        write:      '"Consider other options" might be interpreted as a polite request to look for alternatives, although the current proposal is okay as well.'
    },
    {
        cultures:   ['*>CN'],
		severity:	'WARN',
        patterns:   [/\b(4|four|14|fourteen)\b/],
        read:       '14 and 4 are not considered to be unlucky numbers.',
        write:      '14 and 4 are considered to be extremely unlucky numbers and should be avoided, while 8 and 3 are considered lucky.'
    },
    {
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\bballpark figure\b/],
        info:       'A "ballpark figure" means a rough estimate.'
    },
    {
        cultures:   ['US>IL'],
		severity:	'WARN',
        patterns:   [/\bsilver lining\b/],
        info:       'A "silver lining" means a bright side.'
    }
//    {
//        ALL CAPS
//    }
];

module.exports.textRules = textRules;
