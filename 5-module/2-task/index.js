function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  let text = document.querySelector('#text'); 

  btn.addEventListener("click", handler);

  function handler() {
      text.hidden = !text.hidden;
  }
}
