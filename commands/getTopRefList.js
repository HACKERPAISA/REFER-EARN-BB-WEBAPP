/*CMD
  command: getTopRefList
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

// Get page parameter (default to page 1)
let { page } = options || options?.web_app;
page = page ? parseInt(page) : 1;

let list = RefLib.getTopList();

// Order by integer value (Top Refs)
list.order_by = "integer_value";
list.order_ascending = false; // Highest first

// Get Top Users
let items = list.get();
let totalUsers = items.length;

// Pagination (Show 20 per page)
let perPage = 20;
let startIndex = (page - 1) * perPage;
let paginatedItems = items.slice(startIndex, startIndex + perPage);

// Format response
let topList = paginatedItems.map((prop, index) => ({
  rank: startIndex + index + 1,
  user_id: prop.user,
  username: prop,
  referrals: prop.value
}));

// Return API Response
return WebApp.render({
  content: {
    status: "success",
    total_users: totalUsers,
    users_per_page: perPage,
    current_page: page,
    top_referrers: topList
  },
  mime_type: "application/json"
});

