function initializeCardScript() {
    const cardsContainer = document.querySelector('.cards');
    const cards = Array.from(document.querySelectorAll('.card'));
    const preview = document.getElementById('preview');
    const filter = document.getElementById('filter');
    let currentSelectedCard = null;

    function handleCardClick(card) {
        if (window.innerWidth >= 768) {
            if (currentSelectedCard && currentSelectedCard !== card) {
                currentSelectedCard.classList.remove('selected');
            }
            if (currentSelectedCard === card) {
                currentSelectedCard.classList.remove('selected');
                currentSelectedCard = null;
                preview.innerHTML = '<p>Hover over a card to preview</p>';
            } else {
                currentSelectedCard = card;
                card.classList.add('selected');
                preview.innerHTML = `
                    <h2>${card.textContent}</h2>
                    <p>${card.dataset.description}</p>
                    <p class="link"><a href="${card.dataset.document}" target="_blank">Open ${card.dataset.document.split('/').pop()} in a new window</a></p>
                `;
            }
        } else {
            if (currentSelectedCard && currentSelectedCard !== card) {
                currentSelectedCard.classList.remove('selected');
                currentSelectedCard.querySelector('.mobile-preview').remove();
            }
            if (currentSelectedCard === card) {
                currentSelectedCard.classList.remove('selected');
                currentSelectedCard.querySelector('.mobile-preview').remove();
                currentSelectedCard = null;
            } else {
                currentSelectedCard = card;
                card.classList.add('selected');
                const previewDiv = document.createElement('div');
                previewDiv.classList.add('mobile-preview');
                previewDiv.innerHTML = `
                    <h2>${card.textContent}</h2>
                    <p>${card.dataset.description}</p>
                    <p class="link"><a href="${card.dataset.document}" target="_blank">Open ${card.dataset.document.split('/').pop()} in a new window</a></p>
                `;
                card.appendChild(previewDiv);
            }
        }
    }

    function handleCardMouseOver(card) {
        if (window.innerWidth >= 768 && !currentSelectedCard) {
            preview.innerHTML = `
                <h2>${card.textContent}</h2>
                <p>${card.dataset.description}</p>
            `;
        }
    }

    function handleCardMouseOut() {
        if (window.innerWidth >= 768 && !currentSelectedCard) {
            preview.innerHTML = '<p>Hover over a card to preview</p>';
        }
    }

    cards.forEach(card => {
        card.addEventListener('click', () => handleCardClick(card));
        card.addEventListener('mouseover', () => handleCardMouseOver(card));
        card.addEventListener('mouseout', handleCardMouseOut);
    });

    filter.addEventListener('change', function () {
        const value = this.value;
        cards.forEach(card => {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.display = (value === 'all-projects' || card.classList.contains(value)) ? 'block' : 'none';
                card.style.opacity = '1';
            }, 300);
        });
        cards.forEach(card => card.classList.remove('selected'));
        currentSelectedCard = null;
        preview.innerHTML = '<p>Hover over a card to preview</p>';
        sortCards(cards, cardsContainer); // Use sortCards from sortCards.js
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            cards.forEach(card => {
                const expandedCard = card.querySelector('.mobile-preview');
                if (expandedCard) {
                    expandedCard.remove();
                }
                card.classList.remove('selected');
            });
            currentSelectedCard = null;
            preview.innerHTML = '<p>Hover over a card to preview</p>';
        }
    });

    sortCards(cards, cardsContainer); // Use sortCards from sortCards.js
}

