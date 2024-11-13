const button = document.getElementById('appointBtn');
const nameRegex = /^\S+\s+\S+$/;
const mailRegex =
  /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z0-9]+\.[a-z]{2,}$/gm;
const twoDotsRegex = /[\.]{2}/gm;

button.addEventListener('click', () => {
  let name = prompt('Ingrese su nombre y apellido:');
  while (!name || !nameRegex.test(name.trim())) {
    console.log('Invalid name:', name);
    console.log('Has at least 2 words:', nameRegex.test(name));
    name = prompt('Ingrese un nombre válido:');
  }
  name = name.trim();
  console.log(`name "${name}" was valid`);

  let email = prompt('Ingrese su correo:');
  while (!email || !mailRegex.test(email) || twoDotsRegex.test(email)) {
    console.log('Invalid email:', email);
    console.log('Has email format:', mailRegex.test(email.trim));
    console.log(
      "Doesn't have two consecutive dots '..':",
      !twoDotsRegex.test(email)
    );
    email = prompt('Ingrese un correo válido:');
  }
  email = email.trim();
  console.log(`email "${email}" was valid`);

  const phone = prompt('Ingrese un número de teléfono');
});
