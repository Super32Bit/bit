const images = [
    'image/img.jpg', // รูปเดียวที่จะแสดง
];

const links = [
    'https://www.facebook.com', // ลิงก์เดียวที่จะแสดงเมื่อคลิกที่ภาพ
];

const backgroundSection = document.getElementById('background-section');

// ฟังก์ชันสำหรับการตั้งค่าภาพพื้นหลังเพียงครั้งเดียว
function setBackgroundImage() {
    backgroundSection.style.backgroundImage = `url(${images[0]})`;

    // กำหนดลิงก์ที่จะไปเมื่อคลิกที่ภาพ
    backgroundSection.onclick = function() {
        window.open(links[0], '_blank');
    };

    // ทำ fade-in โดยตั้งค่า opacity เป็น 1
    backgroundSection.style.opacity = 1;
}

// แสดงภาพแรกทันทีเมื่อโหลดหน้าเว็บ
setBackgroundImage();
