//show slide
let slideIndex = 0;
let slideInterval = setInterval(autoSlide, 1);
function autoSlide() {
  changeSlide(1);
}
function changeSlide(n) {
  let slides = document.querySelectorAll(".slide img");
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");

  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 4000);
}

function toggleMoreInfo() {
  var moreInfo = document.getElementById("more-info");
  var moreInfoBtn = document.getElementById("moreInfoBtn");
  var announcementSection = document.getElementById("announcement-section");

  if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
    moreInfo.style.display = "block";
    var learnButtonContainer = moreInfoBtn.parentElement;
    learnButtonContainer.parentElement.appendChild(learnButtonContainer);
    moreInfoBtn.textContent = "ย่อข้อมูลเพิ่มเติม";
  } else {
    moreInfo.style.display = "none";
    moreInfoBtn.textContent = "แสดงข้อมูลเพิ่มเติม";
    announcementSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

//ขึ้นไปด้านบน
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Dropdown อำเภอ
function showDropdown() {
  const dropdownContainer = document.getElementById("dropdownContainer");
  dropdownContainer.style.display = "block";
}

/*


const data = {
  "อำเภอเมืองนครราชสีมา": {
    "เขต1": ["บุคคล A", "บุคคล B"],
    "เขต2": ["บุคคล C", "บุคคล D"],
  },
  "อำเภอครบุรี": {
    "เขต1": ["บุคคล E", "บุคคล F"],
    "เขต2": ["บุคคล G", "บุคคล H"],
  },
  // เพิ่มข้อมูลอื่น ๆ ตามที่ต้องการ
};

const personImages = {
  "บุคคล A": "assets/img/personA.jpg",
  "บุคคล B": "assets/img/personB.jpg",
  "บุคคล C": "assets/img/personC.jpg",
  "บุคคล D": "assets/img/personD.jpg",
  "บุคคล E": "assets/img/personE.jpg",
  "บุคคล F": "assets/img/personF.jpg",
  "บุคคล G": "assets/img/personG.jpg",
  "บุคคล H": "assets/img/personH.jpg",
  // เพิ่มภาพสำหรับบุคคลอื่น ๆ
};

// ฟังก์ชันอัพเดทเขต
function updateDistricts() {
  const amphoeSelect = document.getElementById("amphoe");
  const districtSelect = document.getElementById("district");

  const amphoe = amphoeSelect.value;

  districtSelect.innerHTML = '<option value="">เลือกเขต</option>'; // รีเซ็ตเขต

  if (amphoe && data[amphoe]) {
    Object.keys(data[amphoe]).forEach(district => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }
}

// ฟังก์ชันอัพเดทรายชื่อบุคคลเมื่อเลือกเขต
function updatePersons() {
  const amphoeSelect = document.getElementById("amphoe");
  const districtSelect = document.getElementById("district");
  const personDiv = document.getElementById("person-display");

  const amphoe = amphoeSelect.value;
  const district = districtSelect.value;

  personDiv.innerHTML = ''; // รีเซ็ตการแสดงผล

  if (amphoe && district && data[amphoe][district]) {
    const persons = data[amphoe][district];

    // สร้างกล่องสำหรับแต่ละบุคคล
    persons.forEach(person => {
      const personBox = document.createElement("div");
      personBox.classList.add("person-box");

      // ใช้ชื่อบุคคลในการเลือกภาพ
      const personImage = document.createElement("img");
      personImage.src = personImages[person] || "assets/img/default.jpg"; // ใช้ภาพจาก personImages ถ้ามี, หรือใช้ภาพเริ่มต้น
      personImage.alt = person;
      personImage.classList.add("person-image");

      // เพิ่มชื่อบุคคล
      const personName = document.createElement("p");
      personName.textContent = person;

      // เพิ่มภาพและชื่อเข้าไปในกล่อง
      personBox.appendChild(personImage);
      personBox.appendChild(personName);

      personDiv.appendChild(personBox);
    });
  }
}*/


const data = {
  "อำเภอเมืองนครราชสีมา": {
    "เขต1": ["นายเจษฎาภร์ เสือเล็ก", "บุคคล B"],
    "เขต2": ["บุคคล C", "บุคคล D"],
  },
  "อำเภอครบุรี": {
    "เขต1": ["บุคคล E", "บุคคล F"],
    "เขต2": ["บุคคล G", "บุคคล H"],
  },
  "อำเภอเสิงสาง": {
    "เขต1": ["บุคคล I", "บุคคล J"],
    "เขต2": ["บุคคล K", "บุคคล L"],
  },
  "อำเภอคง": {
    "เขต1": ["บุคคล M", "บุคคล N"],
    "เขต2": ["บุคคล O", "บุคคล P"],
  },
  "อำเภอบัวใหญ่": {
    "เขต1": ["บุคคล Q", "บุคคล R"],
    "เขต2": ["บุคคล S", "บุคคล T"],
  },
  "อำเภอแก้งสนามนาง": {
    "เขต1": ["บุคคล U", "บุคคล V"],
    "เขต2": ["บุคคล W", "บุคคล X"],
  },
  "อำเภอโนนแดง": {
    "เขต1": ["บุคคล Y", "บุคคล Z"],
    "เขต2": ["บุคคล AA", "บุคคล AB"],
  },
  "อำเภอชุมพวง": {
    "เขต1": ["บุคคล AC", "บุคคล AD"],
    "เขต2": ["บุคคล AE", "บุคคล AF"],
  },
  "อำเภอประทาย": {
    "เขต1": ["บุคคล AG", "บุคคล AH"],
    "เขต2": ["บุคคล AI", "บุคคล AJ"],
  },
  "อำเภอปักธงชัย": {
    "เขต1": ["บุคคล AK", "บุคคล AL"],
    "เขต2": ["บุคคล AM", "บุคคล AN"],
  },
  "อำเภอพิมาย": {
    "เขต1": ["บุคคล AO", "บุคคล AP"],
    "เขต2": ["บุคคล AQ", "บุคคล AR"],
  },
  "อำเภอห้วยแถลง": {
    "เขต1": ["บุคคล AS", "บุคคล AT"],
    "เขต2": ["บุคคล AU", "บุคคล AV"],
  },
  "อำเภอโนนสูง": {
    "เขต1": ["บุคคล AW", "บุคคล AX"],
    "เขต2": ["บุคคล AY", "บุคคล AZ"],
  },
  "อำเภอหนองบุญมาก": {
    "เขต1": ["บุคคล BA", "บุคคล BB"],
    "เขต2": ["บุคคล BC", "บุคคล BD"],
  },
  "อำเภอจักราช": {
    "เขต1": ["บุคคล BE", "บุคคล BF"],
    "เขต2": ["บุคคล BG", "บุคคล BH"],
  },
  "อำเภอสีคิ้ว": {
    "เขต1": ["บุคคล BI", "บุคคล BJ"],
    "เขต2": ["บุคคล BK", "บุคคล BL"],
  },
  "อำเภอด่านขุนทด": {
    "เขต1": ["บุคคล BM", "บุคคล BN"],
    "เขต2": ["บุคคล BO", "บุคคล BP"],
  },
  "อำเภอโนนไทย": {
    "เขต1": ["บุคคล BQ", "บุคคล BR"],
    "เขต2": ["บุคคล BS", "บุคคล BT"],
  },
  "อำเภอเทพารักษ์": {
    "เขต1": ["บุคคล BU", "บุคคล BV"],
    "เขต2": ["บุคคล BW", "บุคคล BX"],
  },
  "อำเภอขามทะเลสอ": {
    "เขต1": ["บุคคล BY", "บุคคล BZ"],
    "เขต2": ["บุคคล CA", "บุคคล CB"],
  },
  "อำเภอสีดา": {
    "เขต1": ["บุคคล CC", "บุคคล CD"],
    "เขต2": ["บุคคล CE", "บุคคล CF"],
  },
  "อำเภอเฉลิมพระเกียรติ": {
    "เขต1": ["บุคคล CG", "บุคคล CH"],
    "เขต2": ["บุคคล CI", "บุคคล CJ"],
  },
  "อำเภอบ้านเหลื่อม": {
    "เขต1": ["บุคคล CK", "บุคคล CL"],
    "เขต2": ["บุคคล CM", "บุคคล CN"],
  },
  "อำเภอบัวลาย": {
    "เขต1": ["บุคคล CO", "บุคคล CP"],
    "เขต2": ["บุคคล CQ", "บุคคล CR"],
  },
  "อำเภอพระทองคำ": {
    "เขต1": ["บุคคล CS", "บุคคล CT"],
    "เขต2": ["บุคคล CU", "บุคคล CV"],
  },
  "อำเภอสูงเนิน": {
    "เขต1": ["บุคคล CW", "บุคคล CX"],
    "เขต2": ["บุคคล CY", "บุคคล CZ"],
  },
  "อำเภอเมืองยาง": {
    "เขต1": ["บุคคล DA", "บุคคล DB"],
    "เขต2": ["บุคคล DC", "บุคคล DD"],
  },
  "อำเภอลำทะเมนชัย": {
    "เขต1": ["บุคคล DE", "บุคคล DF"],
    "เขต2": ["บุคคล DG", "บุคคล DH"],
  },
  "อำเภอขามสะแกแสง": {
    "เขต1": ["บุคคล DI", "บุคคล DJ"],
    "เขต2": ["บุคคล DK", "บุคคล DL"],
  },
  "อำเภอปากช่อง": {
    "เขต1": ["บุคคล DM", "บุคคล DN"],
    "เขต2": ["บุคคล DO", "บุคคล DP"],
  },
  "อำเภอวังน้ำเขียว": {
    "เขต1": ["บุคคล DQ", "บุคคล DR"],
    "เขต2": ["บุคคล DS", "บุคคล DT"],
  },
  "อำเภอหนองบุนมาก": {
    "เขต1": ["บุคคล DU", "บุคคล DV"],
    "เขต2": ["บุคคล DW", "บุคคล DX"],
  },
};

  
const personImages = {
  "นายเจษฎาภร์ เสือเล็ก": "cat.avif",
  "บุคคล B": "cat.avif",
  "บุคคล C": "assets/img/personC.jpg",
  "บุคคล D": "assets/img/personD.jpg",
  "บุคคล E": "assets/img/personE.jpg",
  "บุคคล F": "assets/img/personF.jpg",
  "บุคคล G": "assets/img/personG.jpg",
  "บุคคล H": "assets/img/personH.jpg",
  "บุคคล I": "assets/img/personI.jpg",
  "บุคคล J": "assets/img/personJ.jpg",
  "บุคคล K": "assets/img/personK.jpg",
  "บุคคล L": "assets/img/personL.jpg",
  "บุคคล M": "assets/img/personM.jpg",
  "บุคคล N": "assets/img/personN.jpg",
  "บุคคล O": "assets/img/personO.jpg",
  "บุคคล P": "assets/img/personP.jpg",
  "บุคคล Q": "assets/img/personQ.jpg",
  "บุคคล R": "assets/img/personR.jpg",
  "บุคคล S": "assets/img/personS.jpg",
  "บุคคล T": "assets/img/personT.jpg",
  "บุคคล U": "assets/img/personU.jpg",
  "บุคคล V": "assets/img/personV.jpg",
  "บุคคล W": "assets/img/personW.jpg",
  "บุคคล X": "assets/img/personX.jpg",
  "บุคคล Y": "assets/img/personY.jpg",
  "บุคคล Z": "assets/img/personZ.jpg",
  "บุคคล AA": "assets/img/personAA.jpg",
  "บุคคล AB": "assets/img/personAB.jpg",
  "บุคคล AC": "assets/img/personAC.jpg",
  "บุคคล AD": "assets/img/personAD.jpg",
  "บุคคล AE": "assets/img/personAE.jpg",
  "บุคคล AF": "assets/img/personAF.jpg",
  "บุคคล AG": "assets/img/personAG.jpg",
  "บุคคล AH": "assets/img/personAH.jpg",
  "บุคคล AI": "assets/img/personAI.jpg",
  "บุคคล AJ": "assets/img/personAJ.jpg",
  "บุคคล AK": "assets/img/personAK.jpg",
  "บุคคล AL": "assets/img/personAL.jpg",
  "บุคคล AM": "assets/img/personAM.jpg",
  "บุคคล AN": "assets/img/personAN.jpg",
  "บุคคล AO": "assets/img/personAO.jpg",
  "บุคคล AP": "assets/img/personAP.jpg",
  "บุคคล AQ": "assets/img/personAQ.jpg",
  "บุคคล AR": "assets/img/personAR.jpg",
  "บุคคล AS": "assets/img/personAS.jpg",
  "บุคคล AT": "assets/img/personAT.jpg",
  "บุคคล AU": "assets/img/personAU.jpg",
  "บุคคล AV": "assets/img/personAV.jpg",
  "บุคคล AW": "assets/img/personAW.jpg",
  "บุคคล AX": "assets/img/personAX.jpg",
  "บุคคล AY": "assets/img/personAY.jpg",
  "บุคคล AZ": "assets/img/personAZ.jpg",
  "บุคคล BA": "assets/img/personBA.jpg",
  "บุคคล BB": "assets/img/personBB.jpg",
  "บุคคล BC": "assets/img/personBC.jpg",
  "บุคคล BD": "assets/img/personBD.jpg",
  "บุคคล BE": "assets/img/personBE.jpg",
  "บุคคล BF": "assets/img/personBF.jpg",
  "บุคคล BG": "assets/img/personBG.jpg",
  "บุคคล BH": "assets/img/personBH.jpg",
  "บุคคล BI": "assets/img/personBI.jpg",
  "บุคคล BJ": "assets/img/personBJ.jpg",
  "บุคคล BK": "assets/img/personBK.jpg",
  "บุคคล BL": "assets/img/personBL.jpg",
  "บุคคล BM": "assets/img/personBM.jpg",
  "บุคคล BN": "assets/img/personBN.jpg",
  "บุคคล BO": "assets/img/personBO.jpg",
  "บุคคล BP": "assets/img/personBP.jpg",
  "บุคคล BQ": "assets/img/personBQ.jpg",
  "บุคคล BR": "assets/img/personBR.jpg",
  "บุคคล BS": "assets/img/personBS.jpg",
  "บุคคล BT": "assets/img/personBT.jpg",
  "บุคคล BU": "assets/img/personBU.jpg",
  "บุคคล BV": "assets/img/personBV.jpg",
  "บุคคล BW": "assets/img/personBW.jpg",
  "บุคคล BX": "assets/img/personBX.jpg",
  "บุคคล BY": "assets/img/personBY.jpg",
  "บุคคล BZ": "assets/img/personBZ.jpg",
  "บุคคล CA": "assets/img/personCA.jpg",
  "บุคคล CB": "assets/img/personCB.jpg",
  "บุคคล CC": "assets/img/personCC.jpg",
  "บุคคล CD": "assets/img/personCD.jpg",
  "บุคคล CE": "assets/img/personCE.jpg",
  "บุคคล CF": "assets/img/personCF.jpg",
  "บุคคล CG": "assets/img/personCG.jpg",
  "บุคคล CH": "assets/img/personCH.jpg",
  "บุคคล CI": "assets/img/personCI.jpg",
  "บุคคล CJ": "assets/img/personCJ.jpg",
  "บุคคล CK": "assets/img/personCK.jpg",
  "บุคคล CL": "assets/img/personCL.jpg",
  "บุคคล CM": "assets/img/personCM.jpg",
  "บุคคล CN": "assets/img/personCN.jpg",
  "บุคคล CO": "assets/img/personCO.jpg",
  "บุคคล CP": "assets/img/personCP.jpg",
  "บุคคล CQ": "assets/img/personCQ.jpg",
  "บุคคล CR": "assets/img/personCR.jpg",
  "บุคคล CS": "assets/img/personCS.jpg",
  "บุคคล CT": "assets/img/personCT.jpg",
  "บุคคล CU": "assets/img/personCU.jpg",
  "บุคคล CV": "assets/img/personCV.jpg",
  "บุคคล CW": "assets/img/personCW.jpg",
  "บุคคล CX": "assets/img/personCX.jpg",
  "บุคคล CY": "assets/img/personCY.jpg",
  "บุคคล CZ": "assets/img/personCZ.jpg",
  "บุคคล DA": "assets/img/personDA.jpg",
  "บุคคล DB": "assets/img/personDB.jpg",
  "บุคคล DC": "assets/img/personDC.jpg",
  "บุคคล DD": "assets/img/personDD.jpg",
  "บุคคล DE": "assets/img/personDE.jpg",
  "บุคคล DF": "assets/img/personDF.jpg",
  "บุคคล DG": "assets/img/personDG.jpg",
  "บุคคล DH": "assets/img/personDH.jpg",
  "บุคคล DI": "assets/img/personDI.jpg",
  "บุคคล DJ": "assets/img/personDJ.jpg",
  "บุคคล DK": "assets/img/personDK.jpg",
  "บุคคล DL": "assets/img/personDL.jpg",
  "บุคคล DM": "assets/img/personDM.jpg",
  "บุคคล DN": "assets/img/personDN.jpg",
  "บุคคล DO": "assets/img/personDO.jpg",
  "บุคคล DP": "assets/img/personDP.jpg",
  "บุคคล DQ": "assets/img/personDQ.jpg",
  "บุคคล DR": "assets/img/personDR.jpg",
  "บุคคล DS": "assets/img/personDS.jpg",
  "บุคคล DT": "assets/img/personDT.jpg",
  "บุคคล DU": "assets/img/personDU.jpg",
  "บุคคล DV": "assets/img/personDV.jpg",
  "บุคคล DW": "assets/img/personDW.jpg",
  "บุคคล DX": "assets/img/personDX.jpg",
};

  
  // ฟังก์ชันอัพเดทเขต
  function updateDistricts() {
    const amphoeSelect = document.getElementById("amphoe");
    const districtSelect = document.getElementById("district");
  
    const amphoe = amphoeSelect.value;
  
    districtSelect.innerHTML = '<option value="">เลือกเขต</option>'; // รีเซ็ตเขต
  
    if (amphoe && data[amphoe]) {
      Object.keys(data[amphoe]).forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
      });
    }
  }
  
  // ฟังก์ชันอัพเดทรายชื่อบุคคลเมื่อเลือกเขต
  function updatePersons() {
    const amphoeSelect = document.getElementById("amphoe");
    const districtSelect = document.getElementById("district");
    const personDiv = document.getElementById("person-display");
  
    const amphoe = amphoeSelect.value;
    const district = districtSelect.value;
  
    personDiv.innerHTML = ''; // รีเซ็ตการแสดงผล
  
    if (amphoe && district && data[amphoe][district]) {
      const persons = data[amphoe][district];
  
      // สร้างกล่องสำหรับแต่ละบุคคล
      persons.forEach(person => {
        const personBox = document.createElement("div");
        personBox.classList.add("person-box");
  
        // ใช้ชื่อบุคคลในการเลือกภาพ
        const personImage = document.createElement("img");
        personImage.src = personImages[person] || ""; // ใช้ภาพจาก personImages ถ้ามี, หรือใช้ภาพเริ่มต้น
        personImage.alt = person;
        personImage.classList.add("person-image");
  
        // เพิ่มชื่อบุคคล
        const personName = document.createElement("p");
        personName.textContent = person;
  
        // เพิ่มภาพและชื่อเข้าไปในกล่อง
        personBox.appendChild(personImage);
        personBox.appendChild(personName);
  
        personDiv.appendChild(personBox);
      });
    }
  }
  