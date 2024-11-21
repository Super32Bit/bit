//Dropdown อำเภอ
function showDropdown() {
  const dropdownContainer = document.getElementById("dropdownContainer");
  dropdownContainer.style.display = "block";
}

function selectDistrict() {
  const selectedDistrict = document.getElementById("districts").value;
  const selectedDistrictDisplay = document.getElementById("selectedDistrict");
  const zoneDropdownContainer = document.getElementById(
    "zoneDropdownContainer"
  );
  const zonesDropdown = document.getElementById("zones");
  const imageContainer = document.getElementById("districtImage");

  selectedDistrictDisplay.innerText = `อำเภอ: ${selectedDistrict}`;
  zoneDropdownContainer.style.display = "none"; // ซ่อน dropdown เขตก่อน
  imageContainer.innerHTML = ""; // ล้างภาพเดิม

  // แสดงภาพตามอำเภอ
  const images = {
    แก้งสนามนาง: [{ zone: "เขต 1" }],
    ขามทะเลสอ: [{ zone: "เขต 1" }],
    ขามสะแกแสง: [{ zone: "เขต 1" }],
    คง: [{ zone: "เขต 1" }],
    ครบุรี: [{ zone: "เขต 1" }, { zone: "เขต 2" }],
    จักราช: [{ zone: "เขต 1" }],
    เฉลิมพระเกียรติ: [{ zone: "เขต 1" }],
    ชุมพวง: [{ zone: "เขต 1" }],
    โชคชัย: [{ zone: "เขต 1" }],
    ด่านขุนทด: [{ zone: "เขต 1" }, { zone: "เขต 2" }],
    โนนแดง: [{ zone: "เขต 1" }],
    โนนไทย: [{ zone: "เขต 1" }],
    โนนสูง: [{ zone: "เขต 1" }, { zone: "เขต 2" }],
    บัวใหญ่: [{ zone: "เขต 1" }],
    บ้านเหลื่อม: [{ zone: "เขต 1" }],
    ประทาย: [{ zone: "เขต 1" }],
    ปักธงชัย: [{ zone: "เขต 1" }, { zone: "เขต 2" }],
    ปากช่อง: [
      { zone: "เขต 1" },
      { zone: "เขต 2" },
      { zone: "เขต 3" },
      { zone: "เขต 4" },
    ],
    พิมาย: [{ zone: "เขต 1" }, { zone: "เขต 2" }],
    เมืองนครราชสีมา: [
      { zone: "เขต 1" },
      { zone: "เขต 2" },
      { zone: "เขต 3" },
      { zone: "เขต 4" },
      { zone: "เขต 5" },
      { zone: "เขต 6" },
      { zone: "เขต 7" },
      { zone: "เขต 8" },
    ],
    วังน้ำเขียว: [{ zone: "เขต 1" }],
    สีคิ้ว: [{ zone: "เขต 1" }, { zone: "เขต 2" }],
    สูงเนิน: [{ zone: "เขต 1" }],
    เสิงสาง: [{ zone: "เขต 1" }],
    หนองบุนนาก: [{ zone: "เขต 1" }],
    ห้วยแถลง: [{ zone: "เขต 1" }],
    เทพารักษ์: [{ zone: "เขต 1" }],
    บัวลาย: [{ zone: "เขต 1" }],
    พระทองคำ: [{ zone: "เขต 1" }],
    เมืองยาง: [{ zone: "เขต 1" }],
    ลำทะเมนชัย: [{ zone: "เขต 1" }],
    สีดา: [{ zone: "เขต 1" }],
  };

  if (images[selectedDistrict]) {
    zonesDropdown.innerHTML = `<option value="" disabled selected>-- กรุณาเลือกเขต --</option>`;
    images[selectedDistrict].forEach((zone) => {
      zonesDropdown.innerHTML += `<option value="${zone.zone}">${zone.zone}</option>`;
    });

    zoneDropdownContainer.style.display = "block"; // แสดง dropdown เขต
  } else {
    selectedDistrictDisplay.innerText += " (ไม่มีเขตที่เกี่ยวข้อง)";
  }
}

function selectZone() {
  const selectedDistrict = document.getElementById("districts").value;
  const selectedZone = document.getElementById("zones").value;
  const imageContainer = document.getElementById("districtImage");
  const selectedDistrictDisplay = document.getElementById("selectedDistrict");

  // อัปเดตข้อความเพื่อแสดงเขตที่เลือก
  selectedDistrictDisplay.innerText = `${selectedDistrict} | ${selectedZone}`;

  // ข้อมูลภาพ
  const images = {
    แก้งสนามนาง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/image/eden.jpg", name: "Eden" },
          { src: "/image/enzo.jpg", name: "Enzo" },
          { src: "/image/palmer.jpg", name: "palmer" },
        ],
      },
    ],
    ขามทะเลสอ: [
      {
        zone: "เขต 1",
        images: [
          { src: "/image/eden.jpg", name: "Eden" },
          { src: "/image/enzo.jpg", name: "Enzo" },
          { src: "/image/palmer.jpg", name: "palmer" },
        ],
      },
    ],
    ขามสะแกแสง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/image/eden.jpg", name: "Eden" },
          { src: "/image/enzo.jpg", name: "Enzo" },
          { src: "/image/palmer.jpg", name: "palmer" },
        ],
      },
    ],
    คง: [
      {
        zone: "เขต 1",
        images: [
          { src: "/image/eden.jpg", name: "Eden" },
          { src: "/image/enzo.jpg", name: "Enzo" },
          { src: "/image/palmer.jpg", name: "palmer" },
        ],
      },
    ],
    ครบุรี: [
      {
        zone: "เขต 1",
        images: [
           { src: "/image/eden.jpg", name: "Eden" },
          { src: "/image/enzo.jpg", name: "Enzo" },
          { src: "/image/palmer.jpg", name: "palmer" },
        ],
      },
      {
        zone: "เขต 2",
        images: [
           { src: "/image/eden.jpg", name: "Eden" },
          { src: "/image/enzo.jpg", name: "Enzo" },
          { src: "/image/palmer.jpg", name: "palmer" },
        ],
      },
    ],
    จักราช: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    เฉลิมพระเกียรติ: [
      {
        zone: "เขต 1",
        images: [
           { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    ชุมพวง: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    โชคชัย: [
      {
        zone: "เขต 1",
        images: [
           { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    ด่านขุนทด: [
      {
        zone: "เขต 1",
        images: [
           { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 2",
        images: [
           { src: "image/eden.jpg", name: "Eden" },
          { src: "image/img/enzo.jpg", name: "Enzo" },
          { src: "image/img/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    โนนแดง: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    โนนไทย: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    โนนสูง: [
      {
        zone: "เขต 1",
        images: [
           { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 2",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    บัวใหญ่: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    บ้านเหลื่อม: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    ประทาย: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    ปักธงชัย: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 2",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    ปากช่อง: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 2",
        images: [
         { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 3",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 4",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    พิมาย: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 2",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    เมืองนครราชสีมา: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 2",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 3",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 4",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 5",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 6",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 7",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 8",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    วังน้ำเขียว: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    สีคิ้ว: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
      {
        zone: "เขต 2",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    สูงเนิน: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    เสิงสาง: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    หนองบุนนาก: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    ห้วยแถลง: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    เทพารักษ์: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    บัวลาย: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    พระทองคำ: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    เมืองยาง: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    ลำทะเมนชัย: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
    สีดา: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/enzo.jpg", name: "Enzo" },
        ],
      },
    ],
  };

  imageContainer.innerHTML = ""; // ล้างภาพเดิม

  // ตรวจสอบและแสดงภาพสำหรับอำเภอและเขตที่เลือก
  if (images[selectedDistrict]) {
    const districtZones = images[selectedDistrict];
    const matchingZone = districtZones.find(
      (zone) => zone.zone === selectedZone
    );

    if (matchingZone && matchingZone.images) {
      // กำหนดให้ container ของรูปภาพเป็น flexbox
      imageContainer.style.display = "flex";
      imageContainer.style.flexWrap = "wrap"; // ให้สามารถแสดงหลายแถวได้หากจำเป็น
      imageContainer.style.justifyContent = "flex-start"; // จัดเรียงรูปภาพจากซ้ายไปขวา
      imageContainer.style.alignItems = "flex-start"; // จัดแนวตั้ง

      matchingZone.images.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.name;
        imgElement.style.width = "280px"; // ตัวอย่างการปรับขนาด
        imgElement.style.height = "350px";
        imgElement.style.margin = "10px";

        // สร้างแท็ก <p> สำหรับชื่อภาพ
        const caption = document.createElement("p");
        caption.textContent = image.name; // ใส่ชื่อภาพ

        // สร้าง wrapper div สำหรับทั้งภาพและชื่อ
        const imageWrapper = document.createElement("div");
        imageWrapper.style.marginRight = "20px"; // ระยะห่างระหว่างภาพ
        imageWrapper.appendChild(imgElement);
        imageWrapper.appendChild(caption);

        // เพิ่ม div ที่มีภาพและชื่อไปยัง container
        imageContainer.appendChild(imageWrapper);
      });
    } else {
      imageContainer.innerHTML = "<p>ไม่มีภาพสำหรับเขตที่เลือก</p>";
    }
  }
}
