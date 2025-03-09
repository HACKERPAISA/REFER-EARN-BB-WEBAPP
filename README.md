# 🚀 Refer & Earn Webapp

Welcome to **Refer & Earn Webapp**, a simple and efficient referral-based earning system! 💰

## 🌟 Features

- **Account Management**: View and manage your account details in [`account.html`](account.html).
- **Bonus Rewards**: Earn **₹1 bonus every 24 hours** by claiming it in [`bonus.html`](bonus.html).
- **Referral System**: Get your referral link and check the **Top Referrers** in [`refer.html`](refer.html).
- **Top Referral List**: Track the best referrers on the leaderboard in [`TopRefList.html`](TopRefList.html).
- **Notifications**: Receive important updates and event alerts in [`notification.html`](notification.html).
- **Withdrawal System**: Not implemented yet! You can create it in [`withdrawal.html`](withdrawal.html). 🚀

## 📌 How It Works

1. **Sign up & log in** – Manage your account in `account.html`.
2. **Claim your daily bonus** – Get ₹1 every 24 hours from `bonus.html`.
3. **Refer & Earn** – Share your referral link from `refer.html` and increase your earnings!
4. **Track Top Referrers** – View the leaderboard in `TopRefList.html`.
5. **Stay Updated** – Check `notification.html` for event alerts.

## 🚧 Upcoming Features

- ✅ **Withdrawal System** – Coming soon in `withdrawal.html`.
- ✅ **More Bonuses & Rewards**
- ✅ **Improved UI & Performance**

## 📞 Need Help?

If you have any questions or suggestions, feel free to contribute or report issues! 🚀

---

🔗 **Start Earning Now!**



# referearwebappbot - chat bot
It is repository for chat bot: [@referearwebappbot](https://t.me/referearwebappbot)

## What it is?
This repository can be imported to [Bots.Business](https://bots.business) as a worked chat bot.

[Bots.Business](https://bots.business) - it is probably the first CBPaaS - Chat Bot Platform as a Service.

A CBPaaS is a cloud-based platform that enables developers to create chatbots without needing to build backend infrastructure.

## Create your own bot for Telegram from this Git repo

How to create bot?
1. Create bot with [@BotFather](https://telegram.me/BotFather) and take Secret Token
2. Create bot in App and add Secret Token
3. Add Public Key from App as [Deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) with read access (and write access for bot exporting if you need it)
4. Do import for this git repo

Now you can talk with yours new Telegram Bot

See [more](https://help.bots.business/getting-started)

## Commands - in commands folder
File name - it is command name (Bot it can be rewritten in command description)

Command can have: `name`, `help`, `aliases` (second names), `answer`, `keyboard`, `scnarios` (for simple logic) and other options.

### Command description
It is file header:

    /*CMD
      command: /test
      help: this is help for ccommand
      need_reply: [ true or false here ]
      auto_retry_time: [ time in sec ]
      answer: it is example answer for /test command
      keyboard: button1, button2
      aliases: /test2, /test3
    CMD*/

See [more](https://help.bots.business/commands)

### Command body
It is command code in JavaScript.
Use Bot Java Script for logic in command.

For example:
> Bot.sendMessage(2+2);

See [more](https://help.bots.business/scenarios-and-bjs)


## Libraries - in libs folder
You can store common code in the libs folder. File name - it is library name.

For example code in myLib.js:

    function hello(){ Bot.sendMessage("Hello from lib!") }
    function goodbye(name){ Bot.sendMessage("Goodbye, " + name) }

    publish({
      sayHello: hello,
      sayGoodbyeTo: goodbye
    })

then you can run in any bot's command:

    Libs.myLib.hello()
    Libs.myLib.sayGoodbyeTo("Alice")

See [more](https://help.bots.business/git/library)

## Other bots example
See other bots examples in the [github](https://github.com/bots-business?utf8=✓&tab=repositories&q=&type=public&language=javascript) or in the [Bot Store](https://bots.business/)


## Other help
[Help.bots.business](https://help.bots.business)

## API
See [API](https://api.bots.business/docs#/docs/summary)


![](https://bots.business/images/web-logo.png)
