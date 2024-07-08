const names = [
 "احمد عبد الحنان الجعفر",
"احمد عبدالحنان الجعفر",
"دهام احمد خلف",
"روز فؤاد إبراهيم",
"سرهلدان محمود مصطفى",
"شيخموس حسن شيخو",
"عبدالعزيز حسين شيخموس",
"عبد العزيز حسين شيخموس",
"عصام الدين محمد الذياب",
"عمر احمد محمد",
"عمر احمد المحمد",
"عمر الحمد المسواط",
"محمد خضر خشمان",
"محمد صالح عمر علي",
"محمدصالح عمر علي",
"حميده محمد علي عيسى",
"حميده محمدعلي عيسى",
"مراد فواز معمي",
"اسم تجريبي",
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
