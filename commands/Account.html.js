/*CMD
  command: Account.html
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

<!DOCTYPE html>
<html lang="en">
<head>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 400px;
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .profile-pic {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
        }

        h2 {
            color: #333;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            color: #555;
            margin-bottom: 10px;
        }

        .balance {
            font-size: 18px;
            font-weight: bold;
            color: #4CAF50;
            margin-bottom: 20px;
        }

        .back-button {
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #2196F3;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .back-button:hover {
            background-color: #1976D2;
        }
    </style>
</head>
<body>

<div class="container">
    <img id="profilePic" class="profile-pic" src="https://i.ibb.co/LzL6Ywqf/IMG-20250220-170926-346.jpg" alt="Profile Picture">
    <h2 id="fullName">Loading...</h2>
    <p id="username">@username</p>
    <p class="balance">Balance: <span id="balance">Loading...</span></p>
    <button class="back-button" onclick="goBack()">Back</button>
</div>

<script>
    function getTelegramData() {
        let tgData = window.Telegram?.WebApp?.initDataUnsafe;
        if (!tgData || !tgData.user) {
            document.getElementById("fullName").innerText = "User not found";
            return;
        }

        let user = tgData.user;
        let userId = user.id;
        let botId = 1903298;  // Replace with the actual bot ID from the template

        document.getElementById("fullName").innerText = user.first_name + (user.last_name ? " " + user.last_name : "");
        document.getElementById("username").innerText = user.username ? "@" + user.username : "No username";

        if (user.photo_url) {
            document.getElementById("profilePic").src = user.photo_url;
        }

        // Fetch balance from API
        fetch(`https://api.bots.business/v2/bots/1903298/web-app/getbalance?id=${userId}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    document.getElementById("balance").innerText = data.balance + " RS";
                } else {
                    document.getElementById("balance").innerText = "Error fetching balance";
                }
            })
            .catch(() => {
                document.getElementById("balance").innerText = "Network error";
            });
    }

    function goBack() {
        window.history.back();
    }

    window.onload = getTelegramData;
</script>

</body>
</html>
