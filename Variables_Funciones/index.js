//Función clásica
function mostrar() {
  /* Forma 1 */
  let nombres = document.querySelector("#inp_nombre").value;

  /* Sin template string */
  /* nombres = 'nombre y apellido: '+nombres  */

  //Siempre que sea solamente texto usar ''
  /*alert(nombres);*/

  /* Template string */
  const mensaje = `Nombre y apellido:  ${nombres} - DNI 40258963`;
  alert(mensaje);
}

function mifuncion_con_retorno() {
  const ejemplo = "Probando función al retorno";
  /* Retorna una respuesta */
  return;
}

function mostrar_respuesta() {
  /* Acabo de ejecutar la función */
  const respuesta = mifuncion_con_retorno();
  alert(respuesta)
}
