const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.NEXT_DATOCMS_API_TOKEN;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getHomePageData(preview) {
  const data = await fetchAPI(
    `query Homepage {
      allProjects {
        id
        title
        description
        href
        image {
          url
          alt
        }
      }
      about {
        name
        description
        occupation
        introduction
        image {
          url
          alt
        }
      }
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
      homePage {
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
    }`,
    {
      preview,
    }
  );
  return data;
}
