function showGreeting(){
  const g = document.getElementById("greeting");

  if(!g) return;

  let hour = new Date().getHours();

  if(hour < 12){
    g.innerText = "Good Morning!";
  } else if(hour < 18){
    g.innerText = "Good Afternoon!";
  } else {
    g.innerText = "Good Evening!";
  }
}

function validateForm(){
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let m = document.getElementById("message").value;
  let error = document.getElementById("error");

  if(n==""||e==""||m==""){
    error.innerText="Fill all fields";
    return false;
  }

  alert("Sent!");
  return false;
}