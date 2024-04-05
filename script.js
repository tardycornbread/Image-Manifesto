console.log("This is Kyle's image manifesto.");

let photo1 = document.querySelector("#photo1");
let caption1 = document.querySelector("#caption1");
let photo2 = document.querySelector("#photo2");
let caption2 = document.querySelector("#caption2");
let photo3 = document.querySelector("#photo3");
let caption3 = document.querySelector("#caption3");

function toggleCaption(targetCaption, otherCaptions) {
  if (targetCaption.style.display === "none" || targetCaption.style.display === "") {
    targetCaption.style.display = "block";
  } else {
    targetCaption.style.display = "none";
  }

  otherCaptions.forEach(caption => caption.style.display = "none");
}

photo1.addEventListener("click", function () {
  toggleCaption(caption1, [caption2, caption3]);
});

photo2.addEventListener("click", function () {
  toggleCaption(caption2, [caption1, caption3]);
});

photo3.addEventListener("click", function () {
  toggleCaption(caption3, [caption1, caption2]); 
});






