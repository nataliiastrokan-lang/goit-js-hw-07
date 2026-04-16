const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
  event.preventDefault(); // ❗ не перезавантажує сторінку

  const { email, password } = event.target.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // перевірка
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  // створюємо об'єкт
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  // очищаємо форму
  form.reset();
});
