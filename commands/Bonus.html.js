/*CMD
  command: Bonus.html
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
    <title>Bonus</title>
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

        h2 {
            color: #333;
            margin-bottom: 20px;
        }

        .message {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
        }

        .claim-button {
            padding: 15px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .claim-button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        .back-button {
            margin-top: 15px;
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
    <h2>Daily Bonus</h2>
    <p class="message" id="bonusMessage">Claim ₹1 every 24 hours!</p>
    <button class="claim-button" id="claimBonus" onclick="claimBonus()">Claim Bonus</button>
    <br>
    <button class="back-button" onclick="goBack()">Back</button>
</div>

<script>
    function getTelegramUserId() {
        let tgData = window.Telegram?.WebApp?.initDataUnsafe;
        return tgData?.user?.id || null;
    }

    function canClaimBonus(userId) {
        let lastClaimTime = localStorage.getItem("lastClaim_" + userId);
        if (!lastClaimTime) return true;  // First-time claim allowed

        let lastClaimDate = new Date(parseInt(lastClaimTime));
        let now = new Date();
        let diffHours = (now - lastClaimDate) / (1000 * 60 * 60);

        return diffHours >= 24;  // Only allow if 24 hours have passed
    }

    function claimBonus() {
        let userId = getTelegramUserId();
        if (!userId) {
            document.getElementById("bonusMessage").innerText = "User not found.";
            return;
        }

        if (!canClaimBonus(userId)) {
            document.getElementById("bonusMessage").innerText = "You can claim your next bonus after 24 hours.";
            document.getElementById("claimBonus").disabled = true;
            return;
        }

        let botId = <%bot.id%>; // Replace with actual bot ID
        let apiUrl = `https://api.bots.business/v2/bots/${botId}/web-app/savebalance?id=${userId}&amount=1`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    document.getElementById("bonusMessage").innerText = "Bonus claimed! Your new balance is ₹" + data.newbalance;
                    document.getElementById("claimBonus").disabled = true;
                    localStorage.setItem("lastClaim_" + userId, Date.now().toString());
                } else {
                    document.getElementById("bonusMessage").innerText = "Error claiming bonus.";
                }
            })
            .catch(() => {
                document.getElementById("bonusMessage").innerText = "Network error.";
            });
    }

    function checkClaimStatus() {
        let userId = getTelegramUserId();
        if (!userId) return;

        if (!canClaimBonus(userId)) {
            document.getElementById("bonusMessage").innerText = "You can claim your next bonus after 24 hours.";
            document.getElementById("claimBonus").disabled = true;
        }
    }

    function goBack() {
        window.history.back();
    }

    window.onload = checkClaimStatus;
</script>

</body>
</html>
