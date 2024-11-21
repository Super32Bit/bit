function selectZone() {
  const selectedDistrict = document.getElementById("districts").value;
  const selectedZone = document.getElementById("zones").value;
  const imageContainer = document.getElementById("districtImage");
  const selectedDistrictDisplay = document.getElementById("selectedDistrict");

  // Update display text
  selectedDistrictDisplay.innerText = `${selectedDistrict} | ${selectedZone}`;

  // Image data with updated paths
  const images = {
    แก้งสนามนาง: [
      {
        zone: "เขต 1",
        images: [
          { src: "image/eden.jpg", name: "Eden" },
          { src: "image/enzo.jpg", name: "Enzo" },
          { src: "image/palmer.jpg", name: "Palmer" },
        ],
      },
    ],
    // ... Repeat for other districts
  };

  // Clear existing images
  imageContainer.innerHTML = "";

  // Display images for selected zone
  if (images[selectedDistrict]) {
    const zoneData = images[selectedDistrict].find((z) => z.zone === selectedZone);
    if (zoneData && zoneData.images) {
      zoneData.images.forEach((img) => {
        const imgElement = document.createElement("img");
        imgElement.src = img.src;
        imgElement.alt = img.name;
        imgElement.style.margin = "5px"; // Optional styling
        imageContainer.appendChild(imgElement);
      });
    } else {
      imageContainer.innerHTML = "<p>No images available for this zone.</p>";
    }
  } else {
    imageContainer.innerHTML = "<p>No data available for this district.</p>";
  }
}
