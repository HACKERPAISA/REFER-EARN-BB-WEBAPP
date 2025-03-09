/*CMD
  command: TopRefList
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

function getUrl(command){
  return WebApp.getUrl({ command: command })
}

WebApp.render({
   // command "index.html" will be used as page html template
   template: "TopRefList.html",
   // we can pass vars to template
   
   
})

