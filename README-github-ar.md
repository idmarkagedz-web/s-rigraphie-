# بناء ملف exe في السحابة عبر GitHub (بدون تثبيت أي شيء)

## 1) حساب GitHub
سجّل حساباً مجانياً على github.com إن لم يكن لديك.

## 2) مستودع جديد
- اضغط علامة + أعلى الصفحة ثم New repository.
- الاسم: serigraphie. يمكنك اختيار Private (خاص) وسيعمل ضمن الحصة المجانية.
- اضغط Create repository.

## 3) رفع الملفات
- في صفحة المستودع الفارغ اضغط رابط uploading an existing file.
- فك ضغط الملف أولاً، ثم اسحب كل محتوياته إلى الصفحة (index.html و main.js و package.json ومجلد build ومجلد .github).
- اضغط Commit changes.

إذا لم يُرفع مجلد .github (لأنه مخفي في بعض الأجهزة):
- اضغط Add file ثم Create new file.
- في خانة الاسم اكتب: .github/workflows/build.yml (الشرطات المائلة تنشئ المجلدات تلقائياً).
- الصق المحتوى التالي ثم Commit changes:

```
name: Build Windows EXE
on:
  push:
  workflow_dispatch:
jobs:
  build:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run dist
        env:
          CSC_IDENTITY_AUTO_DISCOVERY: false
      - uses: actions/upload-artifact@v4
        with:
          name: serigraphie-windows
          path: dist/*.exe
```

## 4) تشغيل البناء
- افتح تبويب Actions. سيبدأ البناء تلقائياً بعد الرفع.
- إن لم يبدأ: اختر Build Windows EXE من القائمة اليسرى ثم Run workflow.

## 5) تنزيل الملف
- انتظر عدة دقائق حتى تظهر علامة ✓ خضراء، ثم افتح عملية البناء.
- في أسفل الصفحة قسم Artifacts. نزّل serigraphie-windows (ملف مضغوط).
- بعد فك الضغط ستجد ملف Setup للتثبيت وملفاً محمولاً.

## إذا ظهرت علامة ✗ حمراء
افتح العملية، وانسخ نص الخطأ من الخطوة الحمراء وأرسله لي لأصلحه.

## ملاحظات
- ستظهر رسالة SmartScreen عند أول تشغيل لأن البرنامج غير موقّع. اختر «مزيد من المعلومات» ثم «تشغيل على أي حال».
- لنقل بياناتك: «الإعدادات» ثم «تصدير» في التطبيق القديم، و«استيراد» في الجديد.
