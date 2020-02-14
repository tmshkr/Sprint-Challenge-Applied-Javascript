// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic) {
  const ce = document.createElement.bind(document);

  const tab = ce("div");
  tab.innerText = topic;
  topic = topic.match(/\w*/)[0];
  tab.className = `tab ${topic}`;

  tab.onclick = function() {
    document.getElementById("article-filter").innerText = `
      .cards-container .card[data-topic="${topic}"] {
        display: flex;
      }
      .tab.${topic} {
        background: #4CAF50 !important;
      }
      `;
  };

  return tab;
}

const topicsElement = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(({ data }) => {
    data.topics.forEach(t => topicsElement.appendChild(Tab(t)));
  })
  .catch(err => console.log(err));
