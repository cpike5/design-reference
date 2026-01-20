/**
 * Blog Editor - Interactivity
 * Handles editor functionality, text transformations, and form interactions
 */

(function() {
    'use strict';

    // ========================================================================
    // INITIALIZATION
    // ========================================================================

    const editor = {
        textarea: document.querySelector('.editor-textarea'),
        titleInput: document.querySelector('.title-input'),
        wordCountEl: document.getElementById('word-count'),
        readingTimeEl: document.getElementById('reading-time'),
        tagsInput: document.querySelector('.tags-input-field'),
        imageUploadArea: document.querySelector('.image-upload-area'),
        imageInput: document.querySelector('.image-input'),
        toolbar: document.querySelector('.editor-toolbar'),
        statusBtns: document.querySelectorAll('.status-btn'),
        featureToggle: document.getElementById('featured-toggle'),
    };

    // Initialize editor
    if (editor.textarea) {
        init();
    }

    // ========================================================================
    // INITIALIZATION FUNCTIONS
    // ========================================================================

    function init() {
        attachEventListeners();
        updateStats();
    }

    function attachEventListeners() {
        // Update stats on content change
        if (editor.textarea) {
            editor.textarea.addEventListener('input', updateStats);
        }

        // Toolbar buttons
        if (editor.toolbar) {
            editor.toolbar.addEventListener('click', handleToolbarClick);
        }

        // Tags input
        if (editor.tagsInput) {
            editor.tagsInput.addEventListener('keypress', handleTagInput);
        }

        // Remove tag buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('tag-remove')) {
                e.target.parentElement.remove();
            }
        });

        // Image upload
        if (editor.imageUploadArea && editor.imageInput) {
            editor.imageUploadArea.addEventListener('click', () => {
                editor.imageInput.click();
            });

            // Drag and drop
            editor.imageUploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                editor.imageUploadArea.style.borderColor = 'var(--accent)';
            });

            editor.imageUploadArea.addEventListener('dragleave', () => {
                editor.imageUploadArea.style.borderColor = 'var(--ink-faint)';
            });

            editor.imageUploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                editor.imageUploadArea.style.borderColor = 'var(--ink-faint)';
                handleImageUpload(e.dataTransfer.files);
            });

            editor.imageInput.addEventListener('change', (e) => {
                handleImageUpload(e.target.files);
            });
        }

        // Status toggle
        editor.statusBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                editor.statusBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Action buttons
        const backBtn = document.querySelector('.action-bar .btn-secondary:first-child');
        const saveDraftBtn = document.querySelector('.action-bar .btn-secondary:nth-child(2)');
        const previewBtn = document.querySelector('.action-bar .btn-secondary:nth-child(3)');
        const publishBtn = document.querySelector('.btn-primary');

        if (backBtn) backBtn.addEventListener('click', handleBack);
        if (saveDraftBtn) saveDraftBtn.addEventListener('click', handleSaveDraft);
        if (previewBtn) previewBtn.addEventListener('click', handlePreview);
        if (publishBtn) publishBtn.addEventListener('click', handlePublish);
    }

    // ========================================================================
    // STATS CALCULATION
    // ========================================================================

    function updateStats() {
        const text = editor.textarea.value.trim();
        const wordCount = text.length === 0 ? 0 : text.split(/\s+/).length;
        const readingTime = Math.max(1, Math.ceil(wordCount / 200));

        if (editor.wordCountEl) {
            editor.wordCountEl.textContent = wordCount;
        }

        if (editor.readingTimeEl) {
            editor.readingTimeEl.textContent = readingTime + ' min';
        }
    }

    // ========================================================================
    // TOOLBAR FUNCTIONS
    // ========================================================================

    function handleToolbarClick(e) {
        const btn = e.target.closest('.toolbar-btn');
        if (!btn) return;

        const action = btn.dataset.action;
        const textarea = editor.textarea;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end) || 'text';

        let before = '';
        let after = '';
        let newPosition = end;

        switch (action) {
            case 'bold':
                before = '**';
                after = '**';
                break;

            case 'italic':
                before = '*';
                after = '*';
                break;

            case 'heading1':
                before = '# ';
                after = '';
                newPosition = end + before.length;
                break;

            case 'heading2':
                before = '## ';
                after = '';
                newPosition = end + before.length;
                break;

            case 'heading3':
                before = '### ';
                after = '';
                newPosition = end + before.length;
                break;

            case 'link':
                before = '[';
                after = '](url)';
                break;

            case 'code':
                before = '`';
                after = '`';
                break;

            case 'quote':
                before = '> ';
                after = '';
                newPosition = end + before.length;
                break;

            case 'list':
                before = '- ';
                after = '';
                newPosition = end + before.length;
                break;

            case 'list-num':
                before = '1. ';
                after = '';
                newPosition = end + before.length;
                break;

            case 'image':
                before = '![alt text](';
                after = ')';
                break;

            default:
                return;
        }

        const newText =
            textarea.value.substring(0, start) +
            before +
            selectedText +
            after +
            textarea.value.substring(end);

        textarea.value = newText;
        textarea.selectionStart = start + before.length;
        textarea.selectionEnd = start + before.length + selectedText.length;
        textarea.focus();

        updateStats();
        e.preventDefault();
    }

    // ========================================================================
    // TAG HANDLING
    // ========================================================================

    function handleTagInput(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tag = editor.tagsInput.value.trim();

            if (tag.length === 0) return;

            // Create tag badge
            const tagBadge = document.createElement('span');
            tagBadge.className = 'tag-badge';
            tagBadge.innerHTML = `
                ${escapeHtml(tag)}
                <button class="tag-remove" data-tag="${escapeHtml(tag)}">×</button>
            `;

            // Insert before input field
            editor.tagsInput.parentElement.insertBefore(tagBadge, editor.tagsInput);
            editor.tagsInput.value = '';
            editor.tagsInput.focus();
        }
    }

    // ========================================================================
    // IMAGE UPLOAD
    // ========================================================================

    function handleImageUpload(files) {
        if (files.length === 0) return;

        const file = files[0];

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }

        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File is too large. Maximum size is 5MB');
            return;
        }

        // Create file reader for preview
        const reader = new FileReader();
        reader.onload = function(e) {
            // Show a success message (in a real app, this would upload)
            alert('Image uploaded: ' + file.name);
        };
        reader.readAsDataURL(file);
    }

    // ========================================================================
    // ACTION HANDLERS
    // ========================================================================

    function handleBack() {
        if (confirm('Are you sure? Any unsaved changes will be lost.')) {
            window.location.href = 'index.html';
        }
    }

    function handleSaveDraft() {
        const title = editor.titleInput.value;
        const content = editor.textarea.value;

        if (!title.trim()) {
            alert('Please enter a post title');
            return;
        }

        if (!content.trim()) {
            alert('Please enter post content');
            return;
        }

        // In a real app, this would send data to server
        alert('Draft saved successfully!');
        updatePageSubtitle('Draft • Saved just now');
    }

    function handlePreview() {
        // In a real app, this would open a preview modal or new window
        alert('Preview functionality would open in a modal or new tab');
    }

    function handlePublish() {
        const title = editor.titleInput.value;
        const content = editor.textarea.value;
        const isDraft = document.querySelector('.draft-btn').classList.contains('active');

        if (!title.trim()) {
            alert('Please enter a post title');
            return;
        }

        if (!content.trim()) {
            alert('Please enter post content');
            return;
        }

        if (isDraft) {
            alert('Please change status to Published before publishing');
            return;
        }

        // In a real app, this would send data to server
        alert('Post published successfully!');
        updatePageSubtitle('Published • Jan 22, 2024');
    }

    // ========================================================================
    // UTILITY FUNCTIONS
    // ========================================================================

    function updatePageSubtitle(text) {
        const subtitle = document.querySelector('.page-subtitle');
        if (subtitle) {
            subtitle.textContent = text;
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
})();
