const API = "https://api--n4y4n7.repl.co/api/textpro?number=1111&text="
module.exports.config = {
	name: "nameedit1",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Abdulla Tech 49",
	description: "logo",
	commandCategory: "text maker",
	usages: "blood<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage(`🦋আপনার লগো তৈরি হচ্ছে🌺\n\n🌺প্লিজ ওয়েট করুন🦋`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 3000));
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `⏩এইজে আপনার লগো⏩\n\n➤CYBER-CAT➤`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};