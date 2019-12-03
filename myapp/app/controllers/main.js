const index = (req, res) => {
    const conteudo = 'Página principal da aplicação';
    res.render('main/index', {
        conteudo: conteudo
    });
};
const sobre = (req, res) => {
    const conteudo = 'Página sobre a aplicação';
    res.render('main/sobre', {
        conteudo: conteudo
    });
};
module.exports = { index, sobre }