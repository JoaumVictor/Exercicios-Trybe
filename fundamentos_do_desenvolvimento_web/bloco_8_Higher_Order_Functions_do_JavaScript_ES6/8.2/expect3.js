const musicas = [
    { id: '31', title: 'Pisadinha' },
    { id: '32', title: 'Brega Funk' },
    { id: '33', title: 'Trap' },
]
function buscarMusicas(musica) {
    return musica.id === '32';
}
console.log(musicas.find(buscarMusicas));