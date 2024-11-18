const button = document.getElementById('appointmentBtn');
const nameRegex = /^[a-zA-Z]$/;
const mailRegex =
  /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z0-9]+\.[a-z]{2,}$/gm;
const twoDotsRegex = /[\.]{2}/gm;
const numRegex = /^[0-9]{9,}$/gm;

button.addEventListener('click', () => {
  let name = prompt('Ingrese su nombre y apellido:');
  if (name === null) return;
  while (!nameRegex.test(name.trim())) {
    console.log('Invalid name:', name);
    // Se considera un nombre valido, un string que contenga al menos 2 palabras
    console.log('Has at least 2 words:', nameRegex.test(name));
    name = prompt('Ingrese un nombre válido:');
  }
  name = name.trim();
  console.log(`name "${name}" was valid`);

  let email = prompt('Ingrese su correo:');
  if (email === null) {
    name = null;
  }
  while (!mailRegex.test(email) || twoDotsRegex.test(email)) {
    // El formato valido de email es <usuario>@<dominio>.<ext>
    // usuario: Permite letras, numeros, puntos y guiones
    // dominio: Permite solo letras y numeros
    // ext: La extensión permite solo letras y debe contener al menos 2 caracteres
    // en ningun caso pueden haber 2 puntos seguidos.
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

  let phone = prompt('Ingrese un número de teléfono');
  if (phone === null) {
    name = null;
    email = null;
    return;
  }
  while (!numRegex.test(phone)) {
    // Se considera un numero telefonico valido cualquier string
    // que contenga solo números y contenga al menos 9 caracteres
    console.log('Invalid phone:', phone);
    phone = prompt('Ingrese un teléfono válido:');
  }
  console.log('Datos ingresados: ');
  console.log('Nombre:', name);
  console.log('correo:', email);
  console.log('telefono:', phone);

  alert(`Se ingresaron los siguientes datos:
    Nombre: ${name}
    correo: ${email}
    Teléfono: ${phone}`);
});
