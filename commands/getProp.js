/*CMD
  command: getProp
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

let propname = options?.propname; // Get prop name from URL parameter
if (!propname) {
  return WebApp.render({
    content: {
      status: "error",
      msg: "Missing 'propname' parameter"
    },
    mime_type: "application/json"
  });
}

let data = Bot.getProp(propname) || [];
return WebApp.render({
  content: {
    status: "success",
    data: data
  },
  mime_type: "application/json"
});

