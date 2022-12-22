let firstname = document.getElementsByClassName("fn")[0];
let lastname = document.getElementsByClassName("ln")[0];
let email = document.getElementsByClassName("em")[0];
let password = document.getElementsByClassName("ps")[0];
let firstnamee = document.getElementsByClassName("fnn")[0];
let lastnamee = document.getElementsByClassName("lnn")[0];
let emaill = document.getElementsByClassName("emm")[0];
let passwordd = document.getElementsByClassName("pss")[0];
function val(value, svalue) {
  value.onblur = function (e) {
    if (value.value === "") {
      value.classList.add("invd");
      svalue.classList.add("if");
      svalue.classList.add("d-block");
      svalue.classList.remove("d-none");
    } else {
      value.classList.remove("invd");
      svalue.classList.remove("if");
      svalue.classList.remove("d-block");
      svalue.classList.add("d-none");
    }
  };
}

val(firstname, firstnamee);
val(lastname, lastnamee);
val(password, passwordd);

let valid = /\w+@\w.\w{1,3}/;
email.onblur = function (e) {
  if (valid.test(email.value) == false) {
    email.classList.add("invd");
    emaill.classList.add("if");
    emaill.classList.add("d-block");
    emaill.classList.remove("d-none");
    email.style.color = "red";
  } else {
    email.classList.remove("invd");
    emaill.classList.remove("if");
    emaill.classList.remove("d-block");
    emaill.classList.add("d-none");
  }
};
