/*CMD
  command: TopRefList.html
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
    <title>Top Referral List</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            color: #333;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            margin-bottom: 20px;
            color: #007bff;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            border: 1px solid #ddd;
            text-align: center;
        }
        th {
            background-color: #007bff;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        a {
            text-decoration: none;
            color: #007bff;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
        .buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }
        button {
            padding: 10px 15px;
            border: none;
            background: #007bff;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }
        button:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Top Referral List</h1>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Referrals</th>
                </tr>
            </thead>
            <tbody id="referralList">
                <tr><td colspan="3">Loading...</td></tr>
            </tbody>
        </table><div class="buttons">
        <button onclick="prevPage()">Previous</button>
        <span id="pageNumber">Page 1</span>
        <button onclick="nextPage()">Next</button>
    </div>
    
    <button onclick="goBack()" style="margin-top: 20px;">Go Back</button>
</div>

<script>
    let currentPage = 1;
    
    async function fetchReferralList(page) {
        try {
            const response = await fetch(`https://api.bots.business/v2/bots/1903298/web-app/getTopRefList?page=${page}&nocache=${new Date().getTime()}`);
            const data = await response.json();
            const referralList = document.getElementById('referralList');
            referralList.innerHTML = '';
            document.getElementById('pageNumber').innerText = `Page ${page}`;
            
            if (data.status === "success" && data.top_referrers.length > 0) {
                data.top_referrers.forEach(user => {
                    const username = user.user_id.username || user.user_id.first_name || "Unknown";
                    const row = `<tr>
                        <td>${user.rank}</td>
                        <td><a href="tg://user?id=${user.user_id.telegramid}" target="_blank">${username}</a></td>
                        <td>${user.referrals}</td>
                    </tr>`;
                    referralList.innerHTML += row;
                });
            } else {
                referralList.innerHTML = '<tr><td colspan="3">No data available</td></tr>';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            document.getElementById('referralList').innerHTML = '<tr><td colspan="3">Failed to load data</td></tr>';
        }
    }

    function nextPage() {
        currentPage++;
        fetchReferralList(currentPage);
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            fetchReferralList(currentPage);
        }
    }

    function goBack() {
        window.history.back();
    }

    fetchReferralList(currentPage);
</script>

</body>
</html>
