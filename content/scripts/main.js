
document.addEventListener('DOMContentLoaded', () => {

    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach((button) => {

        button.addEventListener('click', () => {

            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Close all accordion items.
            accordionButtons.forEach((item) => {
                item.setAttribute('aria-expanded', 'false');
            });

            // Open clicked item if it was previously closed.
            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
            }

        });

    });

});
