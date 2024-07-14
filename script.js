const names = [
"احمد عبدو بيجو",
 "فواز عارف اسماعيل",
 "كانيوار محمد درويش,
 "هيفيدار علي السينو",
"محمد ابراهيم اوسي",
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
