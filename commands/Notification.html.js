/*CMD
  command: Notification.html
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

<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telegram Web App Notifications</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .notification-card {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="container mt-4">
        <button class="btn btn-secondary mb-3" onclick="window.history.back()">Back</button>
        <h2 class="text-center">Notifications</h2>
        <div id="notifications" class="mt-3"></div>
    </div><script>
    function getUserDataFromURL() {
        const params = new URLSearchParams(window.location.search);
        const tgWebAppData = params.get("tgWebAppData");
        if (tgWebAppData) {
            try {
                const decodedData = decodeURIComponent(tgWebAppData);
                const urlParams = new URLSearchParams(decodedData);
                const userJson = urlParams.get("user");
                if (userJson) {
                    const user = JSON.parse(decodeURIComponent(userJson));
                    return { id: user.id, name: user.first_name || "Unknown" };
                }
            } catch (error) {
                console.error("Error decoding user data.");
            }
        }
        return null;
    }

    async function fetchNotifications(userId) {
        try {
            let response = await fetch(`https://api.bots.business/v2/bots/1903298/web-app/getProp?propname=NewMsg${userId}`);
            let result = await response.json();
            if (result.status === "success" && result.data.length) {
                displayNotifications(result.data);
            } else {
                document.getElementById("notifications").innerHTML = "<p class='text-center'>No new notifications.</p>";
            }
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    }

    function displayNotifications(data) {
        const container = document.getElementById("notifications");
        container.innerHTML = "";
        
        data.forEach(notification => {
            let card = document.createElement("div");
            card.className = "card notification-card p-3";
            card.innerHTML = `<p>${notification}</p>`;
            container.appendChild(card);
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const user = getUserDataFromURL();
        if (user) {
            fetchNotifications(user.id);
        } else {
            document.getElementById("notifications").innerHTML = "<p class='text-center text-danger'>User data not found.</p>";
        }
    });
</script>

</body>
</html>
