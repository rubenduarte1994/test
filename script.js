//ANIMALS INTERACTION//
document.getElementById("animals-link").addEventListener("click", function () {
  const paths = document.querySelectorAll("#Animals path");

  const resetAnimation = () => {
    paths.forEach((path) => {
      path.classList.remove("scale-animation");
    });

    setTimeout(() => {
      paths.forEach((path) => {
        path.classList.add("scale-animation");
      });
    }, 50);
  };
  resetAnimation();
});
//POPUP//
document.getElementById("rules-link").addEventListener("click", function () {
  document.getElementById("overlay").classList.add("show");
  document.getElementById("popup").classList.add("show");
});
document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("show");
  document.getElementById("popup").classList.remove("show");
});
document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("show");
  document.getElementById("popup").classList.remove("show");
});
document
  .getElementById("page-close-btn")
  .addEventListener("click", function () {
    document.getElementById("overlay").classList.remove("show");
    document.getElementById("popup").classList.remove("show");
  });

//HIGLIGHTS//
document.addEventListener("DOMContentLoaded", () => {
  const circles = [
    document.getElementById("highlight-circle1"),
    document.getElementById("highlight-circle2"),
    document.getElementById("highlight-circle3"),
    document.getElementById("highlight-circle4"),
    document.getElementById("highlight-circle5"),
  ];
  const infoPolygon1 = document.getElementById("Other-House");
  const infoPolygon2 = document.getElementById("Other-House-2");
  const giftShopPolygon = document.getElementById("Gift_Shop");
  const picnicAreaPolygon = document.getElementById("Picnic-Area");
  const playgroundPolygon = document.getElementById("Playground");
  const parkingPolygon = document.getElementById("Parking");

  const coffeeShopPolygons = [
    document.getElementById("Coffee-Shop"),
    document.getElementById("Coffee-Shop-2"),
    document.getElementById("Coffee-Shop-3"),
    document.getElementById("Coffee-Shop-4"),
  ];

  const toiletsPolygons = [
    document.getElementById("WC-2"),
    document.getElementById("WC-3"),
    document.getElementById("WC-4"),
    document.getElementById("WC-5"),
    document.getElementById("WC-6"),
  ];

  function getBoundingBox(polygon) {
    return polygon.getBBox();
  }

  function getCombinedBoundingBox(polygons) {
    let combinedBBox = getBoundingBox(polygons[0]);

    polygons.slice(1).forEach((polygon) => {
      const bbox = getBoundingBox(polygon);
      combinedBBox = {
        x: Math.min(combinedBBox.x, bbox.x),
        y: Math.min(combinedBBox.y, bbox.y),
        width:
          Math.max(combinedBBox.x + combinedBBox.width, bbox.x + bbox.width) -
          Math.min(combinedBBox.x, bbox.x),
        height:
          Math.max(combinedBBox.y + combinedBBox.height, bbox.y + bbox.height) -
          Math.min(combinedBBox.y, bbox.y),
      };
    });
    return combinedBBox;
  }

  function getCenterAndRadius(bbox) {
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    const radius = Math.sqrt(bbox.width ** 2 + bbox.height ** 2) / 2;
    return { cx, cy, radius };
  }
  function updateCircle(circle, center) {
    circle.setAttribute("cx", center.cx);
    circle.setAttribute("cy", center.cy);
    circle.setAttribute("r", center.radius);
  }
  function showCircles(elements, scaleFactor = 1) {
    const circlesToShow = Math.min(elements.length, circles.length);

    elements.forEach((polygon, index) => {
      if (index < circlesToShow) {
        const bbox = getBoundingBox(polygon);
        const { cx, cy, radius } = getCenterAndRadius(bbox);
        updateCircle(circles[index], { cx, cy, radius: radius * scaleFactor });
        circles[index].classList.add("show");
      }
    });
    setTimeout(() => {
      circles.forEach((circle) => circle.classList.remove("show"));
    }, 2000);
  }
  function handleLinkClick(event, elements, scaleFactor = 1) {
    event.preventDefault();

    if (
      elements.length > 1 &&
      elements[0] === infoPolygon1 &&
      elements[1] === infoPolygon2
    ) {
      const combinedBBox = getCombinedBoundingBox(elements);
      const { cx, cy, radius } = getCenterAndRadius(combinedBBox);
      updateCircle(circles[0], { cx, cy, radius: radius * scaleFactor });
      circles[0].classList.add("show");
      setTimeout(() => circles[0].classList.remove("show"), 2000);
    } else if (elements.length > 1) {
      showCircles(elements, scaleFactor);
    } else {
      showCircles(elements, scaleFactor);
    }
  }
  document.getElementById("info-link").addEventListener("click", (e) => {
    handleLinkClick(e, [infoPolygon1, infoPolygon2], 1.4);
  });
  document.getElementById("giftshop-link").addEventListener("click", (e) => {
    handleLinkClick(e, [giftShopPolygon], 1.4);
  });
  document.getElementById("picnicarea-link").addEventListener("click", (e) => {
    handleLinkClick(e, [picnicAreaPolygon], 1.4);
  });
  document.getElementById("playground-link").addEventListener("click", (e) => {
    handleLinkClick(e, [playgroundPolygon], 1.4);
  });
  document.getElementById("parking-link").addEventListener("click", (e) => {
    handleLinkClick(e, [parkingPolygon], 1.4);
  });
  document.getElementById("toilets-link").addEventListener("click", (e) => {
    handleLinkClick(e, toiletsPolygons, 1.2);
  });
  document.getElementById("coffeeshop-link").addEventListener("click", (e) => {
    handleLinkClick(e, coffeeShopPolygons, 1.2);
  });
});
//TREES SOUND
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll("#Trees");
  const hoverSound = document.getElementById("hover-sound");
  let canPlaySound = true;

  items.forEach((item) => {
    item.addEventListener("mouseover", function () {
      if (canPlaySound) {
        hoverSound.currentTime = 0;
        hoverSound.play();
        canPlaySound = false;
        setTimeout(function () {
          canPlaySound = true;
        }, 2000);
      }
    });
  });
});
//ANIMALS INFORMATION
const animals = [
  {
    id: "card-1",
    name: "Meerkats",
    imgSrc: "Pictures Zoo Interactive Map/1-meerkats.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Least Concern",
    threatLevel: "LC",
  },
  {
    id: "card-2",
    name: "Tropical World",
    imgSrc: "Pictures Zoo Interactive Map/2-tropical-world.png",
    category: "Several",
    hasStatusBar: false,
  },
  {
    id: "card-3",
    name: "Prairie Dogs",
    imgSrc: "Pictures Zoo Interactive Map/3-prairie-dogs.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Least Concern",
    threatLevel: "LC",
  },
  {
    id: "card-4",
    name: "Asian Hervbivores",
    imgSrc: "Pictures Zoo Interactive Map/4-asian-herbivores-1.png",
    category: "Mammals",
    hasStatusBar: false,
  },
  {
    id: "card-5",
    name: "Asian Hervbivores",
    imgSrc: "Pictures Zoo Interactive Map/4-asian-herbivores-2.png",
    category: "Mammals",
    hasStatusBar: false,
  },
  {
    id: "card-6",
    name: "Spider Monkey",
    imgSrc: "Pictures Zoo Interactive Map/6-spider-monkey.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Endangered",
    threatLevel: "EN",
  },
  {
    id: "card-7",
    name: "Macaws and Parrots",
    imgSrc: "Pictures Zoo Interactive Map/7-macaws-and-parrots.png",
    category: "Birds",
    hasStatusBar: false,
  },
  {
    id: "card-8",
    name: "LIDL Farm",
    imgSrc: "Pictures Zoo Interactive Map/5-lidl-farm-1.png",
    category: "Several",
  },
  {
    id: "card-9",
    name: "Asian Otters",
    imgSrc: "Pictures Zoo Interactive Map/12-asian-small-clawed-otters.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Vulnerable",
    threatLevel: "VU",
  },
  {
    id: "card-10",
    name: "Siberian Tigers",
    imgSrc: "Pictures Zoo Interactive Map/11-siberian-tigers.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Endangered",
    threatLevel: "EN",
  },
  {
    id: "card-11",
    name: "Lemur's Forest",
    imgSrc: "Pictures Zoo Interactive Map/10-lemurs-forest.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Critically Endangered",
    threatLevel: "CR",
  },
  {
    id: "card-12",
    name: "Red Panda",
    imgSrc: "Pictures Zoo Interactive Map/9-red-pandas.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Endangered",
    threatLevel: "EN",
  },
  {
    id: "card-13",
    name: "Lemur's Island",
    imgSrc: "Pictures Zoo Interactive Map/32-lemurs-island.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Endangered",
    threatLevel: "EN",
  },
  {
    id: "card-14",
    name: "Snow Leopard",
    imgSrc: "Pictures Zoo Interactive Map/28-snow-leopards.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Vulnerable",
    threatLevel: "VU",
  },
  {
    id: "card-15",
    name: "Penguins",
    imgSrc: "Pictures Zoo Interactive Map/27-penguins.png",
    category: "Birds",
    hasStatusBar: true,
    situation: "Vulnerable",
    threatLevel: "VU",
  },
  {
    id: "card-16",
    name: "Tapirs and Capybaras",
    imgSrc: "Pictures Zoo Interactive Map/26-tapirs-and-capybaras.png",
    category: "Mammals",
    hasStatusBar: false,
  },
  {
    id: "card-17",
    name: "Tapirs and Capybaras",
    imgSrc: "Pictures Zoo Interactive Map/26-tapirs-and-capybaras.png",
    category: "Mammals",
    hasStatusBar: false,
  },
  {
    id: "card-18",
    name: "Patagonian Maras",
    imgSrc: "Pictures Zoo Interactive Map/25-patagonian-maras.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Near Threatened",
    threatLevel: "NT",
  },
  {
    id: "card-19",
    name: "Llamas",
    imgSrc: "Pictures Zoo Interactive Map/8-llamas.png",
    category: "Mammals",
    hasStatusBar: false,
  },
  {
    id: "card-20",
    name: "Wallabies",
    imgSrc: "Pictures Zoo Interactive Map/30-wallabies.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Least Concerned",
    threatLevel: "LC",
  },
  {
    id: "card-21",
    name: "Exotic Birds and Birds of Prey",
    imgSrc:
      "Pictures Zoo Interactive Map/24-exotic-birds-and-birds-of-prey.png",
    category: "Birds",
  },
  {
    id: "card-22",
    name: "Wallabies",
    imgSrc: "Pictures Zoo Interactive Map/21-wallabies-walk-in.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Least Concerned",
    threatLevel: "LC",
  },
  {
    id: "card-23",
    name: "Pigmy Hippos",
    imgSrc: "Pictures Zoo Interactive Map/23-pygmy-hippos.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Endangered",
    threatLevel: "EN",
  },
  {
    id: "card-24",
    name: "Camels",
    imgSrc: "Pictures Zoo Interactive Map/19-camels.png",
    category: "Mammals",
    hasStatusBar: false,
  },
  {
    id: "card-25",
    name: "LIDL Farm",
    imgSrc: "Pictures Zoo Interactive Map/5-lidl-farm-3.png",
    category: "Several",
    hasStatusBar: false,
  },
  {
    id: "card-26",
    name: "Nyalas",
    imgSrc: "Pictures Zoo Interactive Map/31-nyalas.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Least Concerned",
    threatLevel: "LC",
  },
  {
    id: "card-27",
    name: "Flamingos",
    imgSrc: "Pictures Zoo Interactive Map/13-flamingos.png",
    category: "Birds",
    hasStatusBar: true,
    situation: "Near Threatened",
    threatLevel: "NT",
  },
  {
    id: "card-28",
    name: "Red Ruffed Lemurs",
    imgSrc: "Pictures Zoo Interactive Map/22-red-ruffed-lemurs.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Critically Endangered",
    threatLevel: "CR",
  },
  {
    id: "card-29",
    name: "Cheetahs",
    imgSrc: "Pictures Zoo Interactive Map/20-cheetahs.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Vulnerable",
    threatLevel: "VU",
  },
  {
    id: "card-30",
    name: "African Savannah",
    imgSrc: "Pictures Zoo Interactive Map/18-african-savannah-2.png",
    category: "Several",
    hasStatusBar: false,
  },
  {
    id: "card-31",
    name: "African Savannah",
    imgSrc: "Pictures Zoo Interactive Map/18-african-savannah-3.png",
    category: "Several",
    hasStatusBar: false,
  },
  {
    id: "card-32",
    name: "African Savannah",
    imgSrc: "Pictures Zoo Interactive Map/18-african-savannah-5.png",
    category: "Several",
    hasStatusBar: false,
  },
  {
    id: "card-33",
    name: "African Savannah",
    imgSrc: "Pictures Zoo Interactive Map/18-african-savannah-4.png",
    category: "Several",
    hasStatusBar: false,
  },
  {
    id: "card-34",
    name: "African Savannah",
    imgSrc: "Pictures Zoo Interactive Map/18-african-savannah-1.png",
    category: "Several",
    hasStatusBar: false,
  },
  {
    id: "card-35",
    name: "African Savannah",
    imgSrc: "Pictures Zoo Interactive Map/18-african-savannah-6.png",
    category: "Several",
    hasStatusBar: false,
  },
  {
    id: "card-36",
    name: "African Wild Dogs",
    imgSrc: "Pictures Zoo Interactive Map/16-african-wild-dogs.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Endangered",
    threatLevel: "EN",
  },
  {
    id: "card-37",
    name: "Lions",
    imgSrc: "Pictures Zoo Interactive Map/14-lions-tunnel.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Endangered",
    threatLevel: "EN",
  },
  {
    id: "card-38",
    name: "Hyenas",
    imgSrc: "Pictures Zoo Interactive Map/15-hyenas.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Least Concerned",
    threatLevel: "LC",
  },
  {
    id: "card-39",
    name: "Lynxes",
    imgSrc: "Pictures Zoo Interactive Map/17-lynxes.png",
    category: "Mammals",
    hasStatusBar: true,
    situation: "Least Concerned",
    threatLevel: "LC",
  },
  {
    id: "card-40",
    name: "LIDL Farm",
    imgSrc: "Pictures Zoo Interactive Map/5-lidl-farm-4.png",
    category: "Several",
    hasStatusBar: false,
  },
];

function createCard(animal) {
  const statusBar = animal.hasStatusBar
    ? `
  <div class="status-bar">
    <div class="circle-container">
      <div class="circle ${
        animal.threatLevel === "LC" ? "circle-large-lc" : ""
      }" title="Least Concerned">LC</div>
      <div class="circle ${
        animal.threatLevel === "NT" ? "circle-large-nt" : ""
      }" title="Near Threatened">NT</div>
      <div class="circle ${
        animal.threatLevel === "VU" ? "circle-large-vu" : ""
      }" title="Vulnerable">VU</div>
      <div class="circle ${
        animal.threatLevel === "EN" ? "circle-large-en" : ""
      }" title="Endangered">EN</div>
      <div class="circle ${
        animal.threatLevel === "CR" ? "circle-large-cr" : ""
      }" title="Critically Endangered">CR</div>
      <div class="circle ${
        animal.threatLevel === "EW" ? "circle-large-ew" : ""
      }" title="Extinct in the Wild">EW</div>
    </div>
  </div>
    `
    : "";

  return `
    <div class="card" id="${animal.id}" style="display: none";>
      <img src="${animal.imgSrc}" alt="${animal.name}" />
      <div class="card-content">
        <div class="card-footer">
          <div class="square">
            <div class="square-name">Name</div>
            <div class="square-text">${animal.name}</div>
          </div>
          <div class="square">
            <div class="square-name">Category</div>
            <div class="square-text">${animal.category}</div>
          </div>
        </div>
        ${statusBar}
      </div>
    </div>
    `;
}

const cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = animals.map(createCard).join("");

document.querySelectorAll("#Animals path").forEach((path) => {
  path.addEventListener("mouseover", (event) => {
    const cardId = event.target.getAttribute("data-card");
    document.getElementById(cardId).style.display = "block";
  });
  path.addEventListener("mouseout", (event) => {
    const cardId = event.target.getAttribute("data-card");
    document.getElementById(cardId).style.display = "none";
  });
});

//MODAL
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  const btn = document.getElementById("bottom-right-button");
  const span = document.getElementsByClassName("close")[0];
  const iframe = document.getElementById("videoFrame");

  const videoIds = ["Uo_xl9iciQ8", "O-noFgpUMg8", "vWWha1oIxSI", "_ESgrsyiXTU"];

  btn.onclick = function () {
    const randomvideoId = videoIds[Math.floor(Math.random() * videoIds.length)];
    iframe.src = `https://www.youtube.com/embed/${randomvideoId}?autoplay=1`;
    modal.style.display = "block";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  };
});

//BACKGROUND MUSIC BUTTON
document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("background-music");
  if (audio) {
    audio.volume = 0.5;
    "background-music".pause();
  }
});

document.getElementById("music-toggle").addEventListener("click", function () {
  const toggleSwitch = this;
  const audioElement = document.getElementById("background-music");

  toggleSwitch.classList.toggle("on");

  if (toggleSwitch.classList.contains("on")) {
    audioElement.play();
  } else {
    audioElement.pause();
    audio.Element.currentTime = 0;
  }
});

//OPEN MAP
document.getElementById("intro-button").addEventListener("click", function () {
  document.getElementById("full-screen-rectangle").classList.add("hide");
});
