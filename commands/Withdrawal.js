/*CMD
  command: Withdrawal
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

function getUrl(command) {
  return WebApp.getUrl({ command: command });
}
  WebApp.render({
    template: "Withdrawal.html",
  });

