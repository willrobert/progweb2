const showError = function (errors, field) {
    var mensagem;
    if (typeof errors != 'undefined') {        
        errors.forEach(function (error) {
            if (error.path == field) {
                
                mensagem = error.message;
                console.log(mensagem)
                return mensagem;
            }
        });
        return mensagem;
    }
}

module.exports = {showError};