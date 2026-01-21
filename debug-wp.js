const endpoint = "https://cms.imranmurtaza.com/graphql";

const query = `
  query DebugContent {
    page(id: "home", idType: URI) {
      id
      slug
      title
      content
    }
  }
`;

async function fetchContent() {
  console.log("Fetching content from:", endpoint);
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const json = await res.json();
    const fs = require('fs');
    fs.writeFileSync('debug-output.json', JSON.stringify(json, null, 2));
    console.log("Output saved to debug-output.json");
  } catch (err) {
    console.error("Error fetching content:", err);
  }
}

fetchContent();
