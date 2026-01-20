/**
 * Advanced Components - Interactive Functions
 * Handles modals, toasts, dropdowns, accordions, tabs, and other interactions
 */

/* ============================================================================
   DROPDOWN FUNCTIONALITY
   ============================================================================ */

function toggleDropdown(button) {
    const dropdown = button.closest('.dropdown');
    const isActive = button.classList.contains('active');

    // Close other open dropdowns
    document.querySelectorAll('.dropdown-toggle.active').forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });

    // Toggle current dropdown
    if (isActive) {
        button.classList.remove('active');
    } else {
        button.classList.add('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-toggle.active').forEach(btn => {
            btn.classList.remove('active');
        });
    }
});

// Handle dropdown item clicks
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        const dropdown = item.closest('.dropdown');
        const button = dropdown.querySelector('.dropdown-toggle');
        button.classList.remove('active');
    });
});

/* ============================================================================
   ACCORDION FUNCTIONALITY
   ============================================================================ */

function toggleAccordion(accordion) {
    accordion.classList.toggle('active');
}

/* ============================================================================
   TAB FUNCTIONALITY
   ============================================================================ */

function switchTab(event, tabId) {
    event.preventDefault();
    const button = event.currentTarget;

    // Hide all panels and deactivate all buttons
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected panel and activate button
    document.getElementById(tabId).classList.add('active');
    button.classList.add('active');
}

/* ============================================================================
   MODAL FUNCTIONALITY
   ============================================================================ */

function toggleModal() {
    const modal = document.getElementById('modal');
    const backdrop = document.getElementById('modal-backdrop');

    modal.classList.toggle('active');
    backdrop.classList.toggle('active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    const backdrop = document.getElementById('modal-backdrop');

    modal.classList.remove('active');
    backdrop.classList.remove('active');
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

/* ============================================================================
   TOAST NOTIFICATIONS
   ============================================================================ */

function showToast(type) {
    const container = document.getElementById('toast-container');

    // Toast messages and icons
    const messages = {
        success: { text: 'Success! Operation completed.', icon: '✓' },
        warning: { text: 'Warning. Please review this.', icon: '!' },
        error: { text: 'Error. Something went wrong.', icon: '×' },
        info: { text: 'Info. This is informational.', icon: 'ℹ' }
    };

    const message = messages[type] || messages.info;

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${message.icon}</div>
        <div class="toast-content">${message.text}</div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;

    container.appendChild(toast);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        toast.classList.add('closing');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
}

/* ============================================================================
   KEYBOARD NAVIGATION
   ============================================================================ */

// Allow dropdown items to be navigable with arrow keys
document.addEventListener('keydown', (e) => {
    const activeButton = document.querySelector('.dropdown-toggle.active');
    if (!activeButton) return;

    const menu = activeButton.nextElementSibling;
    if (!menu) return;

    const items = Array.from(menu.querySelectorAll('.dropdown-item'));
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const firstItem = items[0];
        firstItem.focus();
    }
});

/* ============================================================================
   INITIALIZATION
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize first tab as active
    const firstTabButton = document.querySelector('.tab-button');
    const firstTabId = firstTabButton?.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
    if (firstTabId) {
        document.getElementById(firstTabId)?.classList.add('active');
        firstTabButton.classList.add('active');
    }
});
