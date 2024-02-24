const fs = require("fs");
module.exports.config = {
	name: "x1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "\x41\x62\x64\x75\x6c\x6c\x61", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "vai",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Rakib")==0 || event.body.indexOf("🇧🇩")==0 || event.body.indexOf("Abdullah")==0 || event.body.indexOf("@Sakib")==0) {
		var msg = {
				body: "কিরে এত চিল্লা চিল্লি করো কেন চুপ করো 😾",
				attachment: fs.createReadStream(__dirname + `/CYBER-CAT/cat99.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }