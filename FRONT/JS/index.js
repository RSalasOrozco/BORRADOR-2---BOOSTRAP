document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombrePropietario = document.getElementById('inputEmail4').value;
      const telefonoPropietario = document.getElementById('inputAddress').value;
      const nombreMascota = document.getElementById('inputAddress2').value;
      const ciudadResidencia = document.getElementById('inputCity').value;
      const descripcionMascota = document.getElementById('inputZip').value;
  
      const mascota = {
        nombrePropietario,
        telefonoPropietario,
        nombreMascota,
        ciudadResidencia,
        descripcionMascota
      };
  
      mostrarTarjetaMascota(mascota);
    });
  
    function mostrarTarjetaMascota(mascota) {
      const tarjetaHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${mascota.nombreMascota}</h5>
            <p class="card-text">Propietario: ${mascota.nombrePropietario}</p>
            <p class="card-text">Teléfono: ${mascota.telefonoPropietario}</p>
            <p class="card-text">Ciudad de residencia: ${mascota.ciudadResidencia}</p>
            <p class="card-text">Descripción: ${mascota.descripcionMascota}</p>
          </div>
        </div>
      `;
  
      const contenedorTarjetas = document.getElementById('contenedorTarjetas');
      contenedorTarjetas.innerHTML += tarjetaHTML;
    }
  });
  