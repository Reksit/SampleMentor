// Common JavaScript functions

// Check authentication
function checkAuth() {
    const userRole = sessionStorage.getItem('userRole');
    const userName = sessionStorage.getItem('userName');

    if (!userRole || !userName) {
        window.location.href = '../index.html';
        return false;
    }
    return true;
}

// Logout function
function logout() {
    sessionStorage.clear();
    window.location.href = '../index.html';
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Get status badge HTML
function getStatusBadge(status) {
    const badges = {
        'APPROVED': '<span class="badge badge-success">Approved</span>',
        'PENDING_REVIEW': '<span class="badge badge-warning">Pending Review</span>',
        'REJECTED': '<span class="badge badge-danger">Rejected</span>',
        'RESUBMITTED': '<span class="badge badge-info">Resubmitted</span>'
    };
    return badges[status] || status;
}

// Show modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

// Hide modal
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Show alert
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;

    const container = document.querySelector('.main-content');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
}

// Calculate progress color
function getProgressColor(percentage) {
    if (percentage >= 75) return 'success';
    if (percentage >= 50) return 'warning';
    return 'danger';
}

// Search and filter table
function filterTable(searchTerm, filterColumn = null) {
    const table = document.querySelector('table tbody');
    if (!table) return;

    const rows = table.getElementsByTagName('tr');
    searchTerm = searchTerm.toLowerCase();

    Array.from(rows).forEach(row => {
        const cells = row.getElementsByTagName('td');
        let found = false;

        if (filterColumn !== null) {
            const cell = cells[filterColumn];
            if (cell && cell.textContent.toLowerCase().includes(searchTerm)) {
                found = true;
            }
        } else {
            Array.from(cells).forEach(cell => {
                if (cell.textContent.toLowerCase().includes(searchTerm)) {
                    found = true;
                }
            });
        }

        row.style.display = found ? '' : 'none';
    });
}

// Export to CSV
function exportToCSV(data, filename) {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
}

function convertToCSV(data) {
    if (data.length === 0) return '';

    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(obj =>
        Object.values(obj).map(val =>
            typeof val === 'string' && val.includes(',') ? `"${val}"` : val
        ).join(',')
    );

    return [headers, ...rows].join('\n');
}

// Chart rendering (simple text-based for demo)
function renderProgressChart(canvasId, progress) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw simple bar chart
    const barWidth = width / progress.length;
    const maxMarks = Math.max(...progress.map(p => p.maxMarks));

    progress.forEach((item, index) => {
        const barHeight = (item.currentMarks / maxMarks) * (height - 20);
        const x = index * barWidth;
        const y = height - barHeight;

        // Draw bar
        ctx.fillStyle = '#4f46e5';
        ctx.fillRect(x + 5, y, barWidth - 10, barHeight);

        // Draw label
        ctx.fillStyle = '#000';
        ctx.font = '10px Arial';
        ctx.fillText(item.currentMarks, x + barWidth/2 - 5, y - 5);
    });
}

// Initialize tooltips (simple implementation)
function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);

            const rect = e.target.getBoundingClientRect();
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
            tooltip.style.left = rect.left + 'px';
        });

        el.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
}

// Validate file upload
function validateFile(file, allowedTypes, maxSizeMB = 5) {
    const fileType = file.type;
    const fileSize = file.size / 1024 / 1024; // Convert to MB

    if (!allowedTypes.includes(fileType)) {
        return { valid: false, message: 'Invalid file type' };
    }

    if (fileSize > maxSizeMB) {
        return { valid: false, message: `File size must be less than ${maxSizeMB}MB` };
    }

    return { valid: true };
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize tooltips
    initTooltips();

    // Close modals on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});
