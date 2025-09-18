// Later, replace with your Render backend URL
const API_BASE = "http://localhost:10000";

let currentUser = null;

async function registerUser() {
  const username = document.getElementById("username").value;
  const name = document.getElementById("name").value;

  const res = await fetch(`${API_BASE}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, name })
  });
  currentUser = await res.json();

  document.getElementById("currentUser").innerText = currentUser.name;
  document.getElementById("login").style.display = "none";
  document.getElementById("content").style.display = "block";
}

async function loadQuizzes() {
  const res = await fetch(`${API_BASE}/api/quizzes`);
  const quizzes = await res.json();

  const quizList = document.getElementById("quizList");
  quizList.innerHTML = "";
  quizzes.forEach(q => {
    const div = document.createElement("div");
    div.innerHTML = `<b>${q.title}</b><br>${q.description}<br><hr>`;
    quizList.appendChild(div);
  });
}


