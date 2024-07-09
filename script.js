const names = [
 "احمد عبد الحنان الجعفر",
"احمد عبدالحنان الجعفر",
"روز فؤاد إبراهيم",
 "يوسف خشمان خلف",
"محمد خضر خشمان",
"اسم تجريبي",
 "احمد صلاح الدين رشو",
 "سعود محمد درويش",
 "صابرين قادر عبدالرحمن",
 "ياسين بشير خلف",
 "زكريا صلال الجاسم",
 "صقر عبدالعزيز الصالح",
 "صقر عبد العزيز الصالح",
 "جازيه حمدو احمد",
 "جازية حمدو احمد",
 "ابراهيم رسول خليل",
 "سليمان ضاهر خلو",
 "اليمامة محمد طاهر الشيخ",
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
