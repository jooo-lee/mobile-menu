const trackActiveTab = function trackActiveTab() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) =>
        tab.addEventListener('click', () => {
            document
                .querySelector('.active-tab')
                .classList.remove('active-tab');
            tab.classList.add('active-tab');
        })
    );
};

export default trackActiveTab;
