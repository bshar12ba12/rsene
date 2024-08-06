const names = [
    "احمد سعيد الحمكي",
    "احمد شيخو احمد",
    "برهان شيخموس شيخموس",
    "خالد قمر العلي",
    "سامر محمد الصلال",
    "علاء الدين علي بكر",
    "فواز حميد ملا",
    "لقمان عبدالوهاب العلي",
    "محمد مصطفى سمو",
    "هيوا حسام السينو",
    "امينه شريف ايو",
    "فاروق عبدالقادر عبدالقادر",
    "خانم خلف محمد",
    // أضف الأسماء المخزنة هنا
];

function checkName() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const messageDiv = document.getElementById('message');

    if (names.includes(nameInput)) {
        messageDiv.textContent = "نعم هنالك حوالة با اسمك يرجى مراجعة شركة رسيني الدرباسية منتصف السوق يرجى احضار الهوية وصاحب العلاقة شخصيا";
        messageDiv.className = "message success";
    } else {
        messageDiv.textContent = "ناسف لكم قد تكون الحوالة الخاصة بك غير موجودة او لم تصل بعد يرجى عليكم الاتصال بالمرسل والتاكد من الشركة المرسلة وشكرا";
        messageDiv.className = "message error";
    }
}
