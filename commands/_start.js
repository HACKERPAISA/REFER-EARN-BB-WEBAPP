/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function doTouchOwnLink() {
  Bot.sendMessage("You clicked on your own link!");
}

function doAttracted(refUser) {
  // Increase the referrer's resource balance by 1
  let balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  balance.add(1);

  // Notify the referrer
  Bot.sendMessageToChatWithId(
    refUser.telegramid,
    "You just attracted a new user: " + Libs.commonLib.getLinkFor(user)
  );

  // Save a message about the referral
  let msg = "You have referred a new user!\n" +
            "User ID: " + user.telegramid + "\n" +
            "Name: " + user.first_name + "\n" +
            "Username: @" + (user.username || "N/A");

  let msgprop = "NewMsg" + refUser.telegramid;
  let existingMsgs = Bot.getProp(msgprop, "json");

if (!Array.isArray(existingMsgs)) {
    existingMsgs = [];
}

existingMsgs.push(msg); // yaha msg define hai ya nahi dekh lena
Bot.setProp(msgprop, existingMsgs, "json");

  // Notify the new user
  Bot.sendMessage(
    "Hello!\n\nYou were referred by: " + Libs.commonLib.getLinkFor(refUser)
  );
}

function doAlreadyAttracted() {
  Bot.sendMessage("You have already been referred.");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted,
   // Extra debugging info
};

RefLib.track(trackOptions);

// Generate referral link
let link = RefLib.getLink();
let propname = "Referlink" + user.telegramid;

// Check if referral link is already stored
if (!Bot.getProp(propname)) {
  Bot.setProp(propname, link);
}

// Open WebApp
var url = WebApp.getUrl({ command: "index" });

Api.sendMessage({
  text: "OPEN WEBAPP",
  reply_markup: {
    inline_keyboard: [
      [{ text: "Open App", web_app: { url: url } }]
    ]
  }
});
