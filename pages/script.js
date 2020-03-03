function botonLogin() {
    $.ajax('/eventoBoton', {
        success: function(data, status, xhr) { // success callback function
            alert(data.result);
        }
    });
}

function clickInput() {
    $.ajax('/eventoInput', {
        success: function(data, status, xhr) { // success callback function
            alert(data.result);
        }
    });
}

function writing() {
    $.ajax('/writing', {
        success: function(data, status, xhr) { // success callback function
            alert(data.result);
        }
    });
}

function recordar() {
    $.ajax('/recordar', {
        success: function(data, status, xhr) { // success callback function
            alert(data.result);
        }
    });
}