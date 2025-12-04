// script.js

// دالة إظهار وإخفاء خيارات الدفع
function showPayments(btn) {
    const options = btn.parentElement.querySelector('.payment-options');

    // إغلاق جميع الخيارات الأخرى
    document.querySelectorAll('.payment-options').forEach(opt => {
        if (opt !== options) {
            opt.classList.remove('show');
        }
    });

    // تبديل عرض الخيارات الحالية
    options.classList.toggle('show');
}

// دالة محاكاة عملية الدفع وإعادة التوجيه
function fakePay(candidate, amount) {
    const loadingElement = document.getElementById('loading');
    const container = document.querySelector('.container');

    // عرض شاشة التحميل وتعتيم المحتوى
    loadingElement.style.display = 'block';
    container.style.opacity = '0.3';

    // يمكن هنا إرسال البيانات (candidate, amount) إلى الخادم

    // محاكاة تأخير المعالجة لمدة 2.5 ثانية
    setTimeout(() => {
        // إعادة التوجيه إلى الصفحة التالية
        window.location.href = "h.html";
    }, 2500);
}

// --- إضافة المستمعات للأحداث (Event Listeners) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. ربط أزرار "تصويت قوي"
    document.querySelectorAll('.vote-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            showPayments(this);
        });
    });

    // 2. ربط أزرار المبالغ المالية
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const amount = this.getAttribute('data-amount');
            const candidateElement = this.closest('.candidate');
            const candidateName = candidateElement.querySelector('.vote-btn').getAttribute('data-candidate');

            fakePay(candidateName, amount);
        });
    });
});