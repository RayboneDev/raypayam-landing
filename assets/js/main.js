// ─────────────────────────────────────────────────────────────
// Mobile Navigation Toggle
// ─────────────────────────────────────────────────────────────
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });
}

// ─────────────────────────────────────────────────────────────
// Copy Text to Clipboard Utility
// ─────────────────────────────────────────────────────────────
function copyToClipboard(text, button) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const icon = button.querySelector('i');
    const originalClass = icon.className;
    icon.className = 'fa-solid fa-check text-cyanGlow';

    setTimeout(() => { icon.className = originalClass; }, 2000);
}

// ─────────────────────────────────────────────────────────────
// Contact Form Submission
// ─────────────────────────────────────────────────────────────
function handleContactSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('contact-submit-btn');
    const originalContent = btn.innerHTML;

    btn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> <span>در حال ارسال...</span>`;
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>پیام شما با موفقیت ارسال شد!</span>`;
        btn.classList.remove('from-cyanGlow', 'to-cyanAccent');
        btn.classList.add('bg-emeraldGlow', 'text-midnight');
        const form = document.getElementById('contact-form');
        if(form) form.reset();

        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.disabled = false;
            btn.classList.remove('bg-emeraldGlow');
            btn.classList.add('from-cyanGlow', 'to-cyanAccent');
        }, 3500);
    }, 1200);
}

// ─────────────────────────────────────────────────────────────
// Interactive Live SMS Simulator Switching Logic
// ─────────────────────────────────────────────────────────────
function switchSimTab(type) {
    const simDisplayArea = document.getElementById('sim-display-area');
    if (!simDisplayArea) {
        console.error('switchSimTab: #sim-display-area not found in DOM');
        return;
    }

    // Reset active states on buttons
    document.querySelectorAll('.sim-tab-btn').forEach(btn => {
        btn.className = 'sim-tab-btn px-4 py-3 rounded-2xl font-bold text-sm bg-navyDark text-gray-400 border border-white/5 hover:border-gray-700 flex items-center justify-center gap-2 transition-all';
    });

    if (type === 'otp') {
        document.getElementById('sim-btn-otp').className = 'sim-tab-btn active px-4 py-3 rounded-2xl font-bold text-sm bg-amberWarning/20 text-amberWarning border border-amberWarning/50 flex items-center justify-center gap-2 transition-all';

        simDisplayArea.innerHTML = `
            <div class="animate-fade-in space-y-4">
                <div class="flex items-center justify-between border-b border-gray-800 pb-3">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-amberWarning animate-ping"></span>
                        <span class="font-bold text-white text-sm">پیامک دریافت شده از: <span class="text-amberWarning font-mono">982000...</span></span>
                    </div>
                    <span class="text-xs text-gray-400">هم‌اکنون</span>
                </div>
                <div class="p-4 bg-navyCard/60 rounded-xl border border-amberWarning/30">
                    <p class="text-sm text-gray-200 leading-relaxed">
                        کد تایید ورود شما به سامانه: <strong class="text-amberWarning text-lg font-mono">92841</strong>. این کد تا ۲ دقیقه معتبر است.
                    </p>
                </div>
                <div class="p-4 bg-amberWarning/10 rounded-xl border border-amberWarning/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <i class="fa-solid fa-bolt text-amberWarning text-2xl"></i>
                        <div>
                            <div class="text-xs font-bold text-amberWarning">کد OTP استخراج شد</div>
                            <div class="text-[11px] text-gray-300">آماده کپی هوشمند یک‌کلیکی</div>
                        </div>
                    </div>
                    <button onclick="copyDemoOtp(this)" class="w-full sm:w-auto px-6 py-2.5 bg-amberWarning text-midnight font-black text-xs rounded-xl shadow-lg hover:bg-amber-400 transition-all flex items-center justify-center gap-2">
                        <i class="fa-solid fa-copy"></i>
                        <span id="copy-btn-text">کپی سریع کد (92841)</span>
                    </button>
                </div>
            </div>
        `;
    } else if (type === 'phish') {
        document.getElementById('sim-btn-phish').className = 'sim-tab-btn active px-4 py-3 rounded-2xl font-bold text-sm bg-coralRed/20 text-coralRed border border-coralRed/50 flex items-center justify-center gap-2 transition-all';

        simDisplayArea.innerHTML = `
            <div class="animate-fade-in space-y-4">
                <div class="flex items-center justify-between border-b border-gray-800 pb-3">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-triangle-exclamation text-coralRed text-base"></i>
                        <span class="font-bold text-coralRed text-sm">سرشماره غیررسمی مشکوک</span>
                    </div>
                    <span class="text-xs text-gray-400">۱ دقیقه پیش</span>
                </div>
                <div class="p-4 bg-navyCard/60 rounded-xl border border-coralRed/20">
                    <p class="text-sm text-gray-400 line-through">
                        ابلاغیه جدید علیه شما ثبت شد. جهت مشاهده پرونده و جلوگیری از جلب به لینک زیر بروید: http://adl-sana-fake.ir
                    </p>
                </div>
                <div class="p-4 bg-coralRed/20 rounded-xl border border-coralRed/60 flex items-center gap-4">
                    <i class="fa-solid fa-shield-virus text-coralRed text-3xl"></i>
                    <div>
                        <div class="text-sm font-bold text-coralRed">هشدار فیشینگ! لینک مخرب مسدود شد</div>
                        <div class="text-xs text-gray-200 mt-0.5">رای‌پیام اجازه باز شدن دامنه جعلی adl-sana-fake.ir را نداد.</div>
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'bank') {
        document.getElementById('sim-btn-bank').className = 'sim-tab-btn active px-4 py-3 rounded-2xl font-bold text-sm bg-emeraldGlow/20 text-emeraldGlow border border-emeraldGlow/50 flex items-center justify-center gap-2 transition-all';

        simDisplayArea.innerHTML = `
            <div class="animate-fade-in space-y-4">
                <div class="flex items-center justify-between border-b border-gray-800 pb-3">
                    <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-full bg-emeraldGlow/20 flex items-center justify-center text-emeraldGlow text-xs">
                            <i class="fa-solid fa-[#00C897] fa-building-columns"></i>
                        </div>
                        <span class="font-bold text-white text-sm">بانک ملت</span>
                        <span class="bg-emeraldGlow text-midnight text-[10px] font-black px-2 py-0.5 rounded-full">تایید رسمی</span>
                    </div>
                    <span class="text-xs text-gray-400">۱۰ دقیقه پیش</span>
                </div>
                <div class="p-4 bg-navyCard/60 rounded-xl border border-emeraldGlow/20">
                    <p class="text-sm text-gray-200 leading-relaxed">
                        برداشت حساب: ۱,۲۰۰,۰۰۰ ریال <br>
                        برداشت اینترنتی - درگاه پرداخت شتاب <br>
                        مانده: ۴۵,۸۰۰,۰۰۰ ریال
                    </p>
                </div>
                <div class="p-3 bg-emeraldGlow/10 rounded-xl border border-emeraldGlow/30 flex items-center gap-3">
                    <i class="fa-solid fa-circle-check text-emeraldGlow text-xl"></i>
                    <div class="text-xs text-gray-200">
                        سرشماره فرستنده در دیتابیس رسمی بانک مرکزی تایید شده است.
                    </div>
                </div>
            </div>
        `;
    }
}

// ─────────────────────────────────────────────────────────────
// Demo OTP Copy Notification Interactive Action
// ─────────────────────────────────────────────────────────────
function copyDemoOtp(button) {
    const span = button.querySelector('span');
    span.innerText = 'کد ۹۲۸۴۱ کپی شد!';
    button.classList.remove('bg-amberWarning');
    button.classList.add('bg-emeraldGlow', 'text-midnight');

    setTimeout(() => {
        span.innerText = 'کپی سریع کد (92841)';
        button.classList.remove('bg-emeraldGlow');
        button.classList.add('bg-amberWarning');
    }, 2500);
}

// ─────────────────────────────────────────────────────────────
// FAQ Toggle Accordion
// ─────────────────────────────────────────────────────────────
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

// ─────────────────────────────────────────────────────────────
// Expose functions globally (Important for inline onclick)
// ─────────────────────────────────────────────────────────────
window.switchSimTab = switchSimTab;
window.copyToClipboard = copyToClipboard;
window.handleContactSubmit = handleContactSubmit;
window.copyDemoOtp = copyDemoOtp;
window.toggleFaq = toggleFaq;