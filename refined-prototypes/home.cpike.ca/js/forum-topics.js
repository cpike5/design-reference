/**
 * Forum Topics Scripts - home.cpike.ca
 * Interactions for the forum topics listing page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Quick Jump functionality
    const quickJumpSelect = document.getElementById('quick-jump');
    if (quickJumpSelect) {
        quickJumpSelect.addEventListener('change', function() {
            if (this.value) {
                // In a real application, this would navigate to the selected forum
                console.log('Navigate to forum:', this.value);
                // window.location.href = `forum-topics.html?forum=${this.value}`;
            }
        });
    }

    // New Topic button
    const newTopicBtn = document.querySelector('.btn-new-topic');
    if (newTopicBtn) {
        newTopicBtn.addEventListener('click', function() {
            console.log('Open new topic dialog');
            // In a real application, this would open a modal or navigate to a new topic form
            // window.location.href = 'forum-new-topic.html';
        });
    }

    // Moderator action buttons
    const moderatorBtns = document.querySelectorAll('.moderator-btn');
    moderatorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log('Moderator action:', action);
            // In a real application, this would trigger the appropriate action
        });
    });

    // Topic row click handling (navigate to post)
    const topicRows = document.querySelectorAll('.topics-row:not(.topics-row-header)');
    topicRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // Check if click was on a link (don't navigate if clicking a link)
            if (e.target.tagName !== 'A') {
                const topicLink = this.querySelector('.topic-title a');
                if (topicLink) {
                    window.location.href = topicLink.href;
                }
            }
        });

        // Add cursor pointer on hover to indicate clickability
        row.style.cursor = 'pointer';
    });

    // Pagination link handling
    const pageLinks = document.querySelectorAll('.page-links a.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageNum = this.textContent;
            console.log('Navigate to page:', pageNum);
            // In a real application, this would handle pagination
            // The URL would be updated with the page parameter
        });
    });
});
