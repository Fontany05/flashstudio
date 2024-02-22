window.addEventListener("load", () => {
  const form = document.querySelector("#form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const asunto = document.getElementById("asunto");
  const messag = document.getElementById("menssage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validaCampos();
  });

  const validaCampos = () => {
    const nameValor = name.value.trim();
    const emaiValor = email.value.trim();
    const asuntoValor = asunto.value.trim();
    const messagValor = messag.value.trim();

    //validar name

    if (!nameValor) {
      validaIncorrecto(name, "por favor ingrese su nombre");
    } else {
      validaCorrecto(name);
    }

    //v.email
    if (!emaiValor) {
      validaIncorrecto(email, "por favor ingrese su email");
    } else if (!validarEmail(emaiValor)) {
      validaIncorrecto(email, "el email no es valido");
    } else {
      validaCorrecto(email);
    }

    //v.asunto
    if (!asuntoValor) {
      validaIncorrecto(asunto, "por favor escriba su asunto");
    } else if (asuntoValor.length < 4) {
      validaIncorrecto(
        asunto,
        "su mensaje es muy corto, escriba el motivo de su mensaje"
      );
    } else {
      validaCorrecto(asunto);
    }

    //v.mensaje
    if (!messagValor) {
      validaIncorrecto(messag, "por favor escriba su mensaje");
    } else if (messagValor.length < 8) {
      validaIncorrecto(
        messag,
        "su mensaje es muy corto, deje un mensaje valido"
      );
    } else {
      validaCorrecto(messag);
    }
  };

  const validaIncorrecto = (input, msje) => {
    const formControl = input.parentElement;
    const notifica = formControl.querySelector("p");
    notifica.innerText = msje;
    formControl.className = "control incorrecto";
    Swal.fire({
      text: "complete el formulario antes de enviar",
      icon: "error",
    });
  };
  const validaCorrecto = (input) => {
    const formControl = input.parentElement;
    formControl.className = "control correcto";
    Swal.fire({
      text: "mensaje enviado!",
      icon: "success",
    });
  };

  //cheque que sea un email
  const validarEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
});
