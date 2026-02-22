<!DOCTYPE html>
<html>
<head>
  <title>Rebirth Studio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="background:black;color:white;text-align:center;padding:20px;">

<h1>Rebirth Studio</h1>

<button onclick="githubLogin()">Login with GitHub</button>

<div id="admin" style="display:none;">
  <h2>Admin Panel (Creator)</h2>
  <p>คุณคือเจ้าของระบบ 👑</p>
</div>

<script>
const CLIENT_ID = "ใส่ client id จาก github";

function githubLogin(){
  window.location.href =
  "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID;
}

// หลัง login GitHub จะ redirect กลับ
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code");

if(code){
  // ปกติต้องส่ง code ไป server แลก token
  // แต่บน GitHub Pages ต้องใช้ Netlify / Backend ช่วย
  console.log("GitHub code:",code);
}

// Demo check (ใช้ username เจ้าของ)
const CREATOR_USERNAME = "ใส่ชื่อ github ของเคน";

async function checkUser(){
  const res = await fetch("https://api.github.com/user");
  if(res.ok){
    const data = await res.json();
    if(data.login === CREATOR_USERNAME){
      document.getElementById("admin").style.display="block";
    }
  }
}

</script>

</body>
</html>
