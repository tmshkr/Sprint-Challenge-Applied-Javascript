// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const ce = document.createElement.bind(document);

  const header = ce("div");
  const date = header.appendChild(ce("span"));
  const title = header.appendChild(ce("h1"));
  const temp = header.appendChild(ce("span"));

  header.className = "header";
  date.className = "date";
  temp.className = "temp";

  date.innerText = "MARCH 28, 2019";
  title.innerText = "Lambda Times";
  temp.innerText = "98°";

  return header;
}

document.querySelector(".header-container").appendChild(Header());
