function article() {
    let test = document.getElementById('try');
    test.onclick = load;
}

function load() {
    alert('coucou')

    document.location.href = 'file:///Users/mamantimothee/Documents/devweb/Projet5/projet5/panier.html '
}