import { getHomePageData } from "../../lib/datocms";

export default async function preview(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  // if (req.query.secret !== process.env.NEXT_DATOCMS_PREVIEW_SECRET) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/` });
  res.end("Preview mode enabled");
}
