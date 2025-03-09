/*CMD
  command: index.html
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
    <title>Dashboard</title>
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

        h1 {
            color: #333;
            margin-bottom: 20px;
            font-size: 22px;
        }

        .button-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .button {
            width: 100%;
            padding: 15px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: bold;
            transition: all 0.3s ease-in-out;
        }

        .account { background-color: #4CAF50; color: white; }
        .bonus { background-color: #FF9800; color: white; }
        .withdrawal { background-color: #2196F3; color: white; }
        .refer { background-color: #9C27B0; color: white; }

        .button:hover {
            opacity: 0.9;
            transform: scale(1.03);
        }
        .notification-icon { position: absolute; top: 10px; right: 10px; width: 40px; cursor: pointer; }
    </style>
</head>
<body>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZFbmz1dsMQ1sxbzxIcAveTpbx8ztZnAlXg&s" class="notification-icon" onclick="redirectTo('Notification')">
<div class="container">
    <h1>Welcome to Your Dashboard</h1>
    <div class="button-container">
        <button class="button account" onclick="redirectTo('Account')">Account</button>
        <button class="button bonus" onclick="redirectTo('Bonus')">Bonus</button>
        <button class="button withdrawal" onclick="Popup()">Withdrawal</button>
        <button class="button refer" onclick="redirectTo('Refer')">Refer & Earn</button>
    </div>
</div>

<script>

const tgWebAppData = window.Telegram?.WebApp?.initData || "";

// Function to redirect with the correct tgWebAppData
function Popup() {
  alert("Withdrawal function is not implemented yet.");
}
function redirectTo(page) {
    window.location.href = `https://api.bots.business/v2/bots/1903298/web-app/${page}?tgWebAppData=${encodeURIComponent(tgWebAppData)}`;
}
</script>

</body>
</html>

