// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 科研成果页标签切换效果
const pubTabs = document.querySelector('#pubTabs');
if(pubTabs) {
    pubTabs.addEventListener('click', function(e) {
        if(e.target.classList.contains('nav-link')) {
            const tabId = e.target.getAttribute('data-bs-target');
            const tabContent = document.querySelector(tabId);
            tabContent.classList.add('show', 'active');
        }
    });
}

// 成员卡片悬停效果
const memberCards = document.querySelectorAll('.member-card');
memberCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.03)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
