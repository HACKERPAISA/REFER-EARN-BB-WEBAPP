/*CMD
  command: Refer.html
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
    <title>Refer Link</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        button {
            padding: 10px 20px;
            margin: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .copy-btn {
            background-color: #28a745;
            color: white;
        }
        .back-btn {
            background-color: #dc3545;
            color: white;
        }
        .Topreflist{
          position: relative;
          background-color: white;
          
        }
    </style>
</head>
<body>
<button class="Topreflist" onclick=redirectTo("TopRefList")> Top Ref List</button>
    <div class="container">
    
        <h2>Your Refer Link</h2>
        <p id="refer-link">Fetching...</p>
        <button class="copy-btn" onclick="copyToClipboard()">Copy to Clipboard</button>
        <button class="back-btn" onclick="window.history.back()">Back</button>
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
                    return user.id;
                }
            } catch (error) {
                console.error("Error decoding user data.");
            }
        }
        return null;
    }

    async function fetchReferLink() {
        const userId = getUserDataFromURL();
        if (!userId) {
            document.getElementById('refer-link').textContent = 'User ID not found';
            return;
        }
        const url = `https://api.bots.business/v2/bots/1903298/web-app/getProp?propname=Referlink${userId}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            document.getElementById('refer-link').textContent = data.data || 'No refer link found';
        } catch (error) {
            document.getElementById('refer-link').textContent = 'Error fetching refer link';
        }
    }
    
    function copyToClipboard() {
        const referText = document.getElementById('refer-link').textContent;
        navigator.clipboard.writeText(referText).then(() => {
            alert('Copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy: ' + err);
        });
    }
    
    fetchReferLink();
    function redirectTo(page) {
    window.location.href = `https://api.bots.business/v2/bots/1903298/web-app/${page}`;
}
      
    
</script>

</body>
</html>
