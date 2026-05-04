
/* ======================
   LOGIN
====================== */
function login(){

  let email = document.querySelector("input[type='email']").value;
  let pass = document.querySelector("input[type='password']").value;

  if(!email || !pass){
    alert("Please fill all fields ❌");
    return;
  }

  localStorage.setItem("user", email);

  alert("Login Successful 🚀");
  window.location.href = "dashboard.html";
}


/* ======================
   SIGNUP
====================== */
function signup(){

  let inputs = document.querySelectorAll("input");

  for(let i=0;i<inputs.length;i++){
    if(inputs[i].value === ""){
      alert("Fill all fields ❌");
      return;
    }
  }

  alert("Account Created 🎉");
  window.location.href = "login.html";
}


/* ======================
   APPLY JOB
====================== */
function applyJob(title="Frontend Developer", company="TechNova"){

  let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];

  applied.push({ title, company });

  localStorage.setItem("appliedJobs", JSON.stringify(applied));

  alert("Job Applied Successfully 🚀");

  updateDashboard();
}


/* ======================
   SAVE JOB
====================== */
function saveJob(title, company){

  let saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

  saved.push({ title, company });

  localStorage.setItem("savedJobs", JSON.stringify(saved));

  alert("Job Saved 🔖");

  updateDashboard();
}


/* ======================
   DASHBOARD UPDATE
====================== */
function updateDashboard(){

  let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
  let saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

  if(document.getElementById("appliedCount")){
    document.getElementById("appliedCount").innerText = applied.length;
  }

  if(document.getElementById("savedCount")){
    document.getElementById("savedCount").innerText = saved.length;
  }
}


/* ======================
   AUTO RUN ON PAGE LOAD
====================== */
window.onload = function(){
  updateDashboard();
}


function sendMessage(){

  let inputs = document.querySelectorAll(".contact-form input");
  let message = document.querySelector(".contact-form textarea").value;

  let name = inputs[0].value;
  let email = inputs[1].value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields ❌");
    return;
  }

  alert("Message Sent Successfully 🚀");

  // clear form
  inputs[0].value = "";
  inputs[1].value = "";
  document.querySelector(".contact-form textarea").value = "";
}






/* =========================
   LOGIN FUNCTION
========================= */
function login(){

  let email = document.querySelector("input[type='email']");
  let pass = document.querySelector("input[type='password']");

  if(!email || !pass || email.value === "" || pass.value === ""){
    alert("Please fill all fields ❌");
    return;
  }

  localStorage.setItem("user", email.value);

  alert("Login Successful 🚀");
  window.location.href = "dashboard.html";
}


/* =========================
   SIGNUP FUNCTION
========================= */
function signup(){

  let inputs = document.querySelectorAll("input");

  for(let i=0;i<inputs.length;i++){
    if(inputs[i].value === ""){
      alert("Please fill all fields ❌");
      return;
    }
  }

  alert("Account Created 🎉");
  window.location.href = "login.html";
}


/* =========================
   APPLY JOB (NO HTML CHANGE NEEDED)
========================= */
function applyJob(title, company){

  if(!title) title = "Frontend Developer";
  if(!company) company = "TechNova";

  let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];

  applied.push({ title, company });

  localStorage.setItem("appliedJobs", JSON.stringify(applied));

  alert("Job Applied 🚀");

  updateDashboard();
}


/* =========================
   SAVE JOB
========================= */
function saveJob(title, company){

  if(!title) title = "Job Role";
  if(!company) company = "Company";

  let saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

  saved.push({ title, company });

  localStorage.setItem("savedJobs", JSON.stringify(saved));

  alert("Job Saved 🔖");

  updateDashboard();
}


/* =========================
   DASHBOARD UPDATE (AUTO WORKS)
========================= */
function updateDashboard(){

  let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
  let saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

  let appliedCount = document.getElementById("appliedCount");
  let savedCount = document.getElementById("savedCount");

  if(appliedCount){
    appliedCount.innerText = applied.length;
  }

  if(savedCount){
    savedCount.innerText = saved.length;
  }

  // OPTIONAL: fill lists if containers exist
  let appliedList = document.getElementById("appliedJobsList");
  let savedList = document.getElementById("savedJobsList");

  if(appliedList){
    appliedList.innerHTML = "";
    applied.forEach(job=>{
      appliedList.innerHTML += `
        <div class="job-item">
          <h3>${job.title}</h3>
          <p>${job.company}</p>
          <span class="status applied">Applied</span>
        </div>
      `;
    });
  }

  if(savedList){
    savedList.innerHTML = "";
    saved.forEach(job=>{
      savedList.innerHTML += `
        <div class="job-item">
          <h3>${job.title}</h3>
          <p>${job.company}</p>
          <span class="status saved">Saved</span>
        </div>
      `;
    });
  }
}


/* =========================
   AUTO LOAD ON EVERY PAGE
========================= */
window.onload = function(){
  updateDashboard();
}