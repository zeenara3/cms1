const endpoint = "https://cms.imranmurtaza.com/graphql";

const query = `
  query DebugContent {
    pages {
      nodes {
        id
        slug
        title
      }
    }
    posts {
      nodes {
        id
        slug
        title
        status
      }
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
        console.log(JSON.stringify(json, null, 2));
    } catch (err) {
        console.error("Error fetching content:", err);
    }
}

fetchContent();
