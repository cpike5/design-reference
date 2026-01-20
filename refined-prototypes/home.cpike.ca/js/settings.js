/**
 * Settings Page - JavaScript
 * Handles tab navigation, form interactions, and settings functionality
 */

(function() {
    'use strict';

    // ========================================================================
    // TAB SWITCHING
    // ========================================================================

    const tabButtons = document.querySelectorAll('.settings-tab-btn');
    const tabContents = document.querySelectorAll('.settings-tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab;

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const activeTab = document.getElementById(tabName + '-tab');
            if (activeTab) {
                activeTab.classList.add('active');
            }

            // Store last viewed tab in localStorage
            localStorage.setItem('lastSettingsTab', tabName);
        });
    });

    // Restore last viewed tab on page load
    const lastTab = localStorage.getItem('lastSettingsTab');
    if (lastTab) {
        const lastTabButton = document.querySelector(`.settings-tab-btn[data-tab="${lastTab}"]`);
        if (lastTabButton) {
            lastTabButton.click();
        }
    }

    // ========================================================================
    // NUMBER INPUT CONTROLS
    // ========================================================================

    const numberBtns = document.querySelectorAll('.number-btn');
    numberBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const input = this.parentElement.querySelector('.number-input');
            const currentValue = parseInt(input.value) || 0;
            const min = parseInt(input.min) || 0;
            const max = parseInt(input.max) || 100;

            if (this.textContent.includes('−')) {
                // Decrement
                input.value = Math.max(min, currentValue - 1);
            } else {
                // Increment
                input.value = Math.min(max, currentValue + 1);
            }
        });
    });

    // ========================================================================
    // COLOR PICKER SYNC
    // ========================================================================

    const colorPicker = document.getElementById('primary-color');
    const colorPreview = document.querySelector('.color-preview');
    const colorValue = document.querySelector('.color-value');

    if (colorPicker) {
        colorPicker.addEventListener('input', function() {
            const color = this.value.toUpperCase();
            if (colorPreview) {
                colorPreview.style.background = color;
            }
            if (colorValue) {
                colorValue.textContent = color;
            }
        });
    }

    // ========================================================================
    // FILE UPLOAD AREAS
    // ========================================================================

    const fileUploadAreas = document.querySelectorAll('.file-upload-area');
    fileUploadAreas.forEach(area => {
        const input = area.querySelector('input[type="file"]');

        // Click to upload
        area.addEventListener('click', function() {
            input.click();
        });

        // Drag and drop
        area.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.style.borderColor = 'var(--accent)';
        });

        area.addEventListener('dragleave', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.style.borderColor = '';
        });

        area.addEventListener('drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.style.borderColor = '';

            if (input && e.dataTransfer.files.length > 0) {
                input.files = e.dataTransfer.files;
                console.log('File dropped:', e.dataTransfer.files[0].name);
            }
        });

        // File selection
        if (input) {
            input.addEventListener('change', function() {
                if (this.files.length > 0) {
                    console.log('File selected:', this.files[0].name);
                }
            });
        }
    });

    // ========================================================================
    // AVATAR UPLOAD
    // ========================================================================

    const uploadBtn = document.querySelector('.upload-btn');
    const removeBtn = document.querySelector('.avatar-controls .btn-secondary');

    if (uploadBtn) {
        const fileInput = uploadBtn.querySelector('input[type="file"]');
        if (fileInput) {
            fileInput.addEventListener('change', function() {
                if (this.files.length > 0) {
                    console.log('Avatar changed:', this.files[0].name);
                }
            });
        }
    }

    if (removeBtn) {
        removeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Avatar removed');
        });
    }

    // ========================================================================
    // COPY API KEY
    // ========================================================================

    const apiKeyCopyBtn = document.querySelector('.api-key-container .btn-secondary');
    if (apiKeyCopyBtn) {
        apiKeyCopyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const apiKeyInput = document.querySelector('.api-key-input');
            if (apiKeyInput) {
                const apiKey = apiKeyInput.value;
                navigator.clipboard.writeText(apiKey).then(() => {
                    // Visual feedback
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                });
            }
        });
    }

    // ========================================================================
    // FORM SUBMISSION HANDLERS
    // ========================================================================

    const forms = document.querySelectorAll('.settings-form');
    forms.forEach(form => {
        // Cancel button
        const cancelBtn = form.querySelector('.btn-secondary');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', function(e) {
                e.preventDefault();
                form.reset();
            });
        }

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            console.log('Form submitted:', this.id, data);

            // Show success message
            showSuccessMessage('Settings saved successfully!');

            // You would normally send this to your backend here
        });
    });

    // ========================================================================
    // SESSION REVOKE BUTTONS
    // ========================================================================

    const revokeButtons = document.querySelectorAll('.sessions-table .btn-text');
    revokeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const sessionRow = this.closest('.session-row');
            if (sessionRow && confirm('Are you sure you want to revoke this session?')) {
                sessionRow.style.opacity = '0.5';
                setTimeout(() => {
                    sessionRow.remove();
                    showSuccessMessage('Session revoked');
                }, 300);
            }
        });
    });

    // ========================================================================
    // INTEGRATION BUTTONS
    // ========================================================================

    const integrationBtns = document.querySelectorAll('.integration-card .btn-primary, .integration-card .btn-secondary');
    integrationBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.integration-card');
            const integrationName = card.querySelector('.integration-name').textContent;

            if (this.classList.contains('btn-primary')) {
                // Connect button
                console.log('Connecting to:', integrationName);
                showSuccessMessage(`Connecting to ${integrationName}...`);
            } else {
                // Disconnect button
                if (confirm(`Disconnect from ${integrationName}?`)) {
                    card.classList.remove('connected');
                    const badge = card.querySelector('.integration-badge');
                    if (badge) badge.remove();
                    const account = card.querySelector('.integration-account');
                    if (account) {
                        account.replaceWith(
                            Object.assign(document.createElement('div'), {
                                className: 'integration-placeholder',
                                textContent: 'Not connected'
                            })
                        );
                    }
                    const btn = card.querySelector('.btn-secondary');
                    btn.classList.remove('btn-secondary');
                    btn.classList.add('btn-primary');
                    btn.textContent = 'Connect';
                    showSuccessMessage(`Disconnected from ${integrationName}`);
                }
            }
        });
    });

    // ========================================================================
    // ACTION BUTTONS
    // ========================================================================

    const deleteAccountBtn = document.querySelector('.action-card.danger .btn-danger');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you absolutely sure? This action cannot be undone.')) {
                if (confirm('This will permanently delete your account and all data. Type "DELETE" to confirm.')) {
                    console.log('Account deletion initiated');
                    showSuccessMessage('Account deletion process started');
                }
            }
        });
    }

    const exportDataBtn = document.querySelector('.action-card:not(.danger) .btn-secondary');
    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Exporting data...');
            showSuccessMessage('Your data export has started. You\'ll receive an email with the download link.');
        });
    }

    const twoFABtn = document.querySelector('.twofa-card .btn-secondary');
    if (twoFABtn) {
        twoFABtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Setting up 2FA');
            showSuccessMessage('Redirecting to 2FA setup...');
        });
    }

    // ========================================================================
    // UTILITY: SUCCESS MESSAGE
    // ========================================================================

    function showSuccessMessage(message) {
        const msg = document.createElement('div');
        msg.style.cssText = `
            position: fixed;
            top: 24px;
            right: 24px;
            background: var(--success);
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        msg.textContent = message;
        document.body.appendChild(msg);

        setTimeout(() => {
            msg.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => msg.remove(), 300);
        }, 3000);
    }

    // Add keyframe animations if not already in CSS
    if (!document.querySelector('style[data-settings]')) {
        const style = document.createElement('style');
        style.setAttribute('data-settings', 'true');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

})();
