let A = true;

function toggle() {
  if (A) {
    document.getElementById("message").innerText = "Yo how are u?";
    A = false;
  } else {
    document.getElementById("message").innerText = "Happened isn't it";
    A = true;
  }
}
