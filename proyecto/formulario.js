
        function validar(){
        var form = document.form;

        if (form.nombre.value==0) {
            alert("El campo nombre esta vacío");
            form.nombre.value = "";
            form.nombre.focus();
            return false;
        }

        if (form.edad.value == 0) {
            alert("El campo edad esta vacío");
            form.edad.value = "";
            form.edad.focus();
            return false;
        }

        if (form.correo.value == 0) {
            alert("El campo email esta vacío");
            form.correo.value = "";
            form.correo.focus();
            return false;
        }

        if (form.localidad.value == 0) {
            alert("El campo localidad esta vacío");
            form.localidad.value = "";
            form.localidad.focus();
            return false;
        }

        alert("Datos enviados con éxito");
        form.submit();

    }