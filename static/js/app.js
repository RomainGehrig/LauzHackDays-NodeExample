"use strict";

function createElementForComment(commentJson) {
  const container = document.createElement("div");
  container.setAttribute("class", "clearfix shadow bg-light mb-2 p-2 rounded");
  const text = document.createElement("p");
  text.setAttribute("class", "float-left m-0");
  // document.createTextNode escapes HTML tags to protect from XSS
  text.appendChild(document.createTextNode(commentJson["text"]));

  const name = document.createElement("span");
  name.setAttribute("class", "float-right font-weight-bold");
  name.appendChild(
    document.createTextNode(
      `${commentJson["user"]} (${timestampToString(commentJson["time"])})`
    )
  );

  container.appendChild(text);
  container.appendChild(name);
  return container;
}

function timestampToString(ts) {
  return new Date(ts).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

async function getComments() {
  return jsonGet("/api/comments").then(comments => {
    const commentsDiv = document.getElementById("comments");

    // TODO Do something useful with the comments !
    console.log(comments);

    /**
       <div class="clearfix shadow bg-light mb-2 p-2 rounded">
         <p class="float-left m-0">
           Hello, I'm a comment
         </p>
         <span class="float-right font-weight-bold">
           Anonymous - 12:38
         </span>
       </div>
    */

    for (const comment of comments) {
      const commentElem = createElementForComment(comment);
      commentsDiv.appendChild(commentElem);
    }
  });
}

// Helper functions for GET and POST
async function jsonQuery(method, endpoint, body) {
  return fetch(endpoint, {
    method: method,
    mode: "cors",
    body: body,
    cache: "no-cache",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(resp => resp.json());
}

async function jsonGet(endpoint) {
  return jsonQuery("GET", endpoint, null);
}

async function jsonPost(endpoint, jsonData) {
  return jsonQuery("POST", endpoint, jsonData);
}
