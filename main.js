// Toast Notification System
function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast`;
    
    // Style adjustments dynamically based on type if needed, but CSS handles .toast
    // We add iconography
    let icon = 'bi-info-circle-fill';
    let colorClass = 'text-primary';
    
    if(type === 'success') {
        icon = 'bi-check-circle-fill';
        colorClass = 'text-success';
        toast.style.borderLeftColor = '#00ff88';
    } else if(type === 'error') {
        icon = 'bi-exclamation-triangle-fill';
        colorClass = 'text-danger';
        toast.style.borderLeftColor = '#ff3366';
    }

    toast.innerHTML = `
        <i class="bi ${icon} ${colorClass}" style="font-size: 1.2rem;"></i>
        <span style="font-weight: 500;">${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Animation
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Mobile Menu Toggle (if we add one later)
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll to anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
