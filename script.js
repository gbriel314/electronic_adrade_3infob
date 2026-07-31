function switchTab(event, tabName) {
    // 1. Selecciona todas las pestañas del buscador
    const tabs = document.querySelectorAll('.tab-btn');
    
    // 2. Remueve la clase activa de todos ellos
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 3. Activa la pestaña cliqueada
    event.currentTarget.classList.add('active');

    console.log("Cambiando formulario a la sección: " + tabName);
}

function toggleCardFocus(cardEl) {
    const grid = document.getElementById('cardsGrid');
    const isAlreadySelected = cardEl.classList.contains('selected');

    // Quita la selección de todas las tarjetas
    const cards = grid.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('selected'));

    if (isAlreadySelected) {
        // Si ya estaba seleccionada, se vuelve a dar clic para "des-seleccionarla"
        grid.classList.remove('has-selected');
    } else {
        // Marca la tarjeta clickeada como seleccionada
        cardEl.classList.add('selected');
        grid.classList.add('has-selected');
    }
}

function switchTab(event, tabName) {
    // 1. Selecciona todas las pestañas del buscador y remueve la clase activa
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 2. Activa la pestaña cliqueada
    event.currentTarget.classList.add('active');

    // 3. Oculta todos los bloques de contenido de las pestañas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // 4. Muestra el contenido que coincide con el ID recibido en 'tabName'
    const activeContent = document.getElementById(tabName);
    if (activeContent) {
        activeContent.style.display = 'block';
    }

    console.log("Cambiando formulario a la sección: " + tabName);
}