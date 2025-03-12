//Optional, but good for performance.
document.addEventListener('DOMContentLoaded', () => {

    const banner = document.querySelector('.construction-banner');
    const container = document.querySelector('.construction-banner-container');

    function adjustSpeed() {
        const bannerWidth = banner.offsetWidth;
        const containerWidth = container.offsetWidth;
        const duration = (bannerWidth / containerWidth) * 15; //adjust 15 to change overall speed.
        banner.style.animationDuration = `${duration}s`;
    }

    adjustSpeed();
    window.addEventListener('resize', adjustSpeed);
});