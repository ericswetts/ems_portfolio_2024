function sortCards(cards, cardsContainer) {
    cards.sort((a, b) => {
        const starEmoji = '⭐';
        const aHasStar = a.textContent.includes(starEmoji);
        const bHasStar = b.textContent.includes(starEmoji);

        // Prioritize cards with the star emoji
        if (aHasStar && !bHasStar) return -1;
        if (!aHasStar && bHasStar) return 1;

        // Custom alphabetical sorting without localeCompare
        const aText = a.textContent.toLowerCase();
        const bText = b.textContent.toLowerCase();
        if (aText < bText) return -1;
        if (aText > bText) return 1;
        return 0;
    });
    cards.forEach(card => cardsContainer.appendChild(card));
}
