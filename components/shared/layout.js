import Head from "next/head";
import { renderMetaTags } from "react-datocms";

export default ({ children, icon, meta }) => (
  <div>
    <Head>{renderMetaTags(meta.seo.concat(icon.favicon))}</Head>
    {children}
  </div>
);
