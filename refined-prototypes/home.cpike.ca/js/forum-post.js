/**
 * Forum Post Scripts - home.cpike.ca
 * Interactions for the forum thread/post view page
 */

document.addEventListener('DOMContentLoaded', function() {
    // BBCode toolbar functionality
    const bbcodeBtns = document.querySelectorAll('.bbcode-btn');
    const replyTextarea = document.getElementById('reply-text');

    bbcodeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const tag = this.getAttribute('data-tag');
            if (tag && replyTextarea) {
                insertBBCode(replyTextarea, tag);
            }
        });
    });

    // Quote button functionality
    const quoteBtns = document.querySelectorAll('.quote-btn');
    quoteBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const postContent = this.closest('.post-content').querySelector('.post-text').textContent;
            const authorName = this.closest('.forum-post').querySelector('.author-name a').textContent;

            if (replyTextarea) {
                const quote = `[quote="${authorName}"]${postContent}[/quote]\n\n`;
                replyTextarea.value += quote;
                replyTextarea.focus();
                replyTextarea.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Like button functionality
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const isLiked = this.classList.toggle('liked');
            const countSpan = this.querySelector('span');

            if (isLiked) {
                let count = parseInt(countSpan.textContent) || 0;
                countSpan.textContent = count + 1;
            } else {
                let count = parseInt(countSpan.textContent) || 1;
                countSpan.textContent = count - 1;
            }

            console.log('Post liked:', isLiked);
        });
    });

    // Edit button functionality
    const editBtns = document.querySelectorAll('.edit-btn');
    editBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const postContent = this.closest('.post-content').querySelector('.post-text');
            console.log('Edit post:', postContent.textContent);
            // In a real application, this would open an edit modal or inline editor
        });
    });

    // Report button functionality
    const reportBtns = document.querySelectorAll('.report-btn');
    reportBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Report post');
            // In a real application, this would open a report modal
            alert('Thank you for reporting. A moderator will review this post.');
        });
    });

    // Thread tools
    const subscribeBtn = document.querySelector('[title="Subscribe to thread"]');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const isSubscribed = this.classList.toggle('subscribed');
            console.log('Subscription changed:', isSubscribed);
            // In a real application, this would send a request to the server
        });
    }

    const printBtn = document.querySelector('[title="Print thread"]');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }

    const emailBtn = document.querySelector('[title="Email thread"]');
    if (emailBtn) {
        emailBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Email thread');
            // In a real application, this would open an email dialog
            alert('Email functionality would open here');
        });
    }

    // Preview button
    const previewBtn = document.querySelector('.btn-preview');
    if (previewBtn) {
        previewBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const content = replyTextarea.value;
            console.log('Preview:', content);
            // In a real application, this would show a preview modal
            alert('Preview would show rendered content:\n\n' + content);
        });
    }

    // Submit button
    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const content = replyTextarea.value;

            if (!content.trim()) {
                alert('Please enter some content for your reply');
                return;
            }

            console.log('Submit post:', content);
            // In a real application, this would send the post to the server
            alert('Post submitted successfully!');
            replyTextarea.value = '';
        });
    }

    // Pagination
    const pageLinks = document.querySelectorAll('.page-links a.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageNum = this.textContent;
            console.log('Navigate to page:', pageNum);
            // In a real application, this would handle pagination
        });
    });
});

/**
 * Insert BBCode tags into textarea
 */
function insertBBCode(textarea, tag) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end) || 'text';

    let bbcode = '';
    let cursorOffset = 0;

    switch (tag) {
        case 'b':
            bbcode = `[b]${selectedText}[/b]`;
            cursorOffset = selectedText.length + 3;
            break;
        case 'i':
            bbcode = `[i]${selectedText}[/i]`;
            cursorOffset = selectedText.length + 3;
            break;
        case 'u':
            bbcode = `[u]${selectedText}[/u]`;
            cursorOffset = selectedText.length + 3;
            break;
        case 'url':
            bbcode = `[url=http://example.com]${selectedText}[/url]`;
            cursorOffset = selectedText.length + 26;
            break;
        case 'img':
            bbcode = `[img]http://example.com/image.jpg[/img]`;
            cursorOffset = 5;
            break;
        case 'code':
            bbcode = `[code]${selectedText}[/code]`;
            cursorOffset = selectedText.length + 6;
            break;
        case 'quote':
            bbcode = `[quote]${selectedText}[/quote]`;
            cursorOffset = selectedText.length + 7;
            break;
        case 'list':
            bbcode = `[list]\n[*]${selectedText}\n[/list]`;
            cursorOffset = selectedText.length + 5;
            break;
        default:
            return;
    }

    const newText = text.substring(0, start) + bbcode + text.substring(end);
    textarea.value = newText;
    textarea.selectionStart = textarea.selectionEnd = start + cursorOffset;
    textarea.focus();
}

/**
 * Format timestamp to local timezone
 */
function formatTimestamp(utcTimestamp) {
    return new Date(utcTimestamp).toLocaleString('en-US', {
        dateStyle: 'short',
        timeStyle: 'short'
    });
}
