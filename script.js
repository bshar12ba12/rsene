const names = [
 "احمد عبد الحنان الجعفر",
"احمد عبدالحنان الجعفر",
"روز فؤاد إبراهيم",
"شيخموس حسن شيخو",
 "يوسف خشمان خلف",
"محمد خضر خشمان",
"حميده محمد علي عيسى",
"حميده محمدعلي عيسى",
"اسم تجريبي",
 "احمد صلاح الدين رشو",
 "سعاد محمد درويش",
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
