type="text/javascript">
        function validar(){
        var form = document.form;

        if (form.nombre.value==0) {
            alert("el campo nombre esta vacio");
            form.nombre.value = "";
            form.nombre.focus();
            return false;
        }

        if (form.edad.value == 0) {
            alert("el campo edad esta vacio");
            form.edad.value = "";
            form.edad.focus();
            return false;
        }

        if (form.correo.value == 0) {
            alert("el campo email esta vacio");
            form.correo.value = "";
            form.correo.focus();
            return false;
        }

        if (form.localidad.value == 0) {
            alert("el campo localidad esta vacio");
            form.localidad.value = "";
            form.localidad.focus();
            return false;
        }

        alert("datos enviados con exito");
        form.submit();

    }