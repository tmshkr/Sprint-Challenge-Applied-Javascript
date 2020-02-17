// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(article, topic) {
  const ce = document.createElement.bind(document);

  const card = ce("div");
  const headline = card.appendChild(ce("div"));
  const author = card.appendChild(ce("div"));
  const imgContainer = author.appendChild(ce("div"));
  const img = imgContainer.appendChild(ce("img"));
  const name = author.appendChild(ce("span"));

  card.className = "card";
  headline.className = "headline";
  author.className = "author";
  imgContainer.className = "img-container";

  headline.innerText = article.headline;
  img.src = article.authorPhoto;
  name.innerText = article.authorName;

  card.dataset.topic = topic;

  return card;
}

const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(({ data }) => {
    const { articles } = data;
    for (let topic in articles) {
      articles[topic].forEach(article => {
        cardsContainer.appendChild(Card(article, topic));
      });
    }
  })
  .catch(err => console.log(err));
