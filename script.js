document.addEventListener('DOMContentLoaded', function() {
  // Select the photo elements
  let photo1 = document.querySelector("#photo1");
  let photo2 = document.querySelector("#photo2");
  let photo3 = document.querySelector("#photo3");

  let caption1 = document.getElementById("caption1");
  let caption2 = document.getElementById("caption2");
  let caption3 = document.getElementById("caption3");

  function toggleVisibility(shownCaption, hiddenCaptions) {
      if (shownCaption.style.display === "none") {
          shownCaption.style.display = "block";
          hiddenCaptions.forEach(caption => caption.style.display = "none");
      } else {
          shownCaption.style.display = "none";
      }
  }

  photo1.addEventListener("click", function() {
      toggleVisibility(caption1, [caption2, caption3]);
  });
  photo2.addEventListener("click", function() {
      toggleVisibility(caption2, [caption1, caption3]);
  });
  photo3.addEventListener("click", function() {
      toggleVisibility(caption3, [caption1, caption2]);
  });

  let addButton = document.querySelector("#add-button");
  const series = document.querySelector(".grid-container");

  addButton.addEventListener("click", function addPhoto() {
      let newImage = document.createElement("div");
      newImage.innerHTML = '<img src="img/ci.jpg">';
      newImage.classList.add("photo-item");
      series.appendChild(newImage);
  });

  let shuffleButton = document.querySelector('#shuffle-button');
  shuffleButton.addEventListener('click', function shuffleImages() {
      for (let i = series.children.length; i >= 0; i--) {
          series.appendChild(series.children[Math.random() * i | 0]);
      }
  });
});







