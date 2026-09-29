/* ─────────────────────────────────────────────
   DJ SORREN — Home Split-Screen JS
   Handles panel hover symmetry & cursor effects
───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    const panelPersian = document.getElementById('panel-persian');
    const panelHouse = document.getElementById('panel-house');

    if (!panelPersian || !panelHouse) return;

    // Keyboard accessibility: Enter / Space triggers navigation
    [panelPersian, panelHouse].forEach(panel => {
        panel.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = panel.getAttribute('href');
            }
        });
    });
});
