# Website
This is my first website.
<hr> 

<a href="https://www.linkedin.com/in/abdalrahman-gaber-813029339">My Linkedin</a>
<hr> 
<a href="https://github.com/AbdalrahmanGaber">My GitHub</a>

<hr> 
<a href=https://abdalrahmangaber.github.io/Website>  <img src="https://abdalrahmangaber.github.io/Website/abdo.jpg" alt="My Profile Picture" width="300"></a>
<hr> 


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Display Date and Time</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      text-align: center;
      margin-top: 100px;
    }

    button {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }

    #datetime {
      margin-top: 20px;
      font-size: 20px;
      color: #333;
    }
  </style>
</head>
<body>

  <button onclick="showDateTime()">Show Date and Time</button>
  <div id="datetime"></div>

  <script>
    function showDateTime() {
      const now = new Date();
      const formatted = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      document.getElementById('datetime').textContent = "Current date and time: " + formatted;
    }
  </script>

</body>
</html>
 