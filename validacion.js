document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar envío automático del formulario
      
      // Validar los campos del formulario
      var nameInput = document.querySelector('input[type="text"][placeholder="Nombre"]');
      var emailInput = document.querySelector('input[type="email"][placeholder="Correo electrónico"]');
      var subjectInput = document.querySelector('input[type="text"][placeholder="Asunto"]');
      var messageInput = document.querySelector('textarea[placeholder="Mensaje"]');
      
      var isValid = true; // Variable para verificar la validez del formulario
      
      // Validar el campo de nombre
      if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('error');
      } else {
        nameInput.classList.remove('error');
      }
      
      // Validar el campo de correo electrónico
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add('error');
      } else {
        emailInput.classList.remove('error');
      }
      
      // Validar el campo de asunto
      if (subjectInput.value.trim() === '') {
        isValid = false;
        subjectInput.classList.add('error');
      } else {
        subjectInput.classList.remove('error');
      }
      
      // Validar el campo de mensaje
      if (messageInput.value.trim() === '') {
        isValid = false;
        messageInput.classList.add('error');
      } else {
        messageInput.classList.remove('error');
      }
      
      // Enviar el formulario si es válido
      if (isValid) {
        // Enviar los datos del formulario al servidor utilizando AJAX (requiere una biblioteca como Axios)
        axios.post('/ruta-del-servidor', {
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          subject: subjectInput.value.trim(),
          message: messageInput.value.trim()
        })
        .then(function(response) {
          // Éxito
          console.log(response);
        })
        .catch(function(error) {
          // Error
          console.error(error);
        });
      }
    });
  });



  