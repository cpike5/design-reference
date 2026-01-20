/**
 * Forum JavaScript - home.cpike.ca
 * Interactive forum functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize forum features
    initForumInteractions();
});

function initForumInteractions() {
    // Add click handlers for forum rows
    const forumRows = document.querySelectorAll('.forum-row:not(.forum-row-header)');
    forumRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // Only navigate if clicking on forum name or last post title
            const forumName = this.querySelector('.forum-name a');
            const lastPostTitle = this.querySelector('.last-post-title a');

            if (forumName && e.target.closest('.forum-name')) {
                // Navigate to forum
                console.log('Navigate to forum:', forumName.textContent);
            } else if (lastPostTitle && e.target.closest('.last-post-title')) {
                // Navigate to post
                console.log('Navigate to post:', lastPostTitle.textContent);
            }
        });

        // Change cursor for interactive rows
        row.style.cursor = 'pointer';
    });

    // Category header toggle (for future collapsible categories)
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        // Could add expand/collapse toggle here
    });

    // Who's online section - could refresh periodically
    initOnlineUsers();
}

function initOnlineUsers() {
    // This could be enhanced to refresh user list via AJAX
    const onlineList = document.querySelector('.online-list');
    if (!onlineList) return;

    // Track when users go offline (after 5 minutes)
    // This is a placeholder for actual backend integration
    console.log('Online users initialized');
}

// Utility function to format timestamps
function formatTime(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    // Fall back to formatted date
    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Export for potential use in other scripts
window.forumUtils = {
    formatTime: formatTime
};
