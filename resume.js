function loadJson(callback) {
  const htp = new XMLHttpRequest();
  htp.overrideMimeType("application/json");
  htp.open("GET", "Resume.json");
  htp.onreadystatechange = () => {
    if (htp.readyState === 4 && htp.status == "200") {
      callback(htp.responseText);
    }
  };
  htp.send();
}

loadJson(function (text) {
  const li = JSON.parse(text);
  main(li);
});

mainDiv = document.querySelector(".main");

function main(text) {
  for (let i = 0; i < text.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    // image
    const img = document.createElement("img");

    img.src = "https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg";
    img.alt = "Please Connect to internet";
    img.classList.add("image");
    card.appendChild(img);
    //content
    const name = document.createElement("h4");
    name.textContent = text[i].name;
    name.classList.add("header");
    card.appendChild(name);
    const ph = document.createElement("h4");
    ph.classList.add("header");
    ph.textContent = text[i].Phone;
    card.appendChild(ph);
    const email = document.createElement("h4");
    email.textContent = text[i].email;
    email.classList.add("header");
    card.appendChild(email);
    const address = document.createElement("p");
    address.textContent = text[i].address;
    card.appendChild(address);
    //Buttons
    const linkedin = document.createElement("button");
    const link = document.createElement("a");
    linkedin.innerHTML = '<i class="fab fa-linkedin"></i>';
    link.href = text[i].url[0];
    linkedin.classList.add("button");
    link.appendChild(linkedin);
    card.appendChild(link);
    const git = document.createElement("button");
    git.innerHTML = '<i class="fab fa-github"></i>';
    const link2 = document.createElement("a");
    link2.href = text[i].url[1];
    link2.appendChild(git);
    git.classList.add("button");
    card.appendChild(link2);
    mainDiv.appendChild(card);
  }
}
