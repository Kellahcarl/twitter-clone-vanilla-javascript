//this makes the nav-link hover effect
const navLink = document.querySelectorAll(".left-sidebar .nav-link");
navLink.forEach((e) =>
  e.addEventListener("mouseover", () => {
    e.setAttribute("class", "nav-link active");
  })
);
navLink.forEach((e) =>
  e.addEventListener("mouseout", () => {
    const navLinkH1 = e.children[1];
    if (navLinkH1.innerHTML != "Home") {
      e.setAttribute("class", "nav-link");
    }
  })
);

//this resize the textarea
const twitterInp = document.querySelectorAll(
  ".post-sender .post-form textarea"
);

twitterInp.forEach((e, i) => {
  e.addEventListener("input", () => {
    if ((i = 0)) {
      if (e.scrollHeight > 52) {
        e.style.height = e.scrollHeight + "px";
      }

      //this if statement sets the correct height when the text is erased it
      if (e.scrollHeight % 26 != 0) {
        for (let i = 2; i < 10; i++) {
          if (e.scrollHeight < 26 * i && e.scrollHeight > 26 * (i - 1)) {
            e.style.height = 26 * (i - 1) + "px";
          }
        }
      }
    } else if ((i = 1)) {
      if (e.scrollHeight > 156) {
        e.style.height = e.scrollHeight + "px";
      }

      //this if statement sets the correct height when the text is erased it
      if (e.scrollHeight % 26 != 0) {
        for (let i = 6; i < 30; i++) {
          if (e.scrollHeight < 26 * i && e.scrollHeight > 26 * (i - 1)) {
            e.style.height = 26 * (i - 1) + "px";
          }
        }
      }
    }
  });
});



