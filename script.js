// Loading overlay removal
document.addEventListener('DOMContentLoaded', function () {
    const loading = document.querySelector('.loading-overlay');
    if (loading) {
        loading.style.opacity = '0';
        loading.style.pointerEvents = 'none';
        setTimeout(() => loading.remove(), 500);
    }
});
