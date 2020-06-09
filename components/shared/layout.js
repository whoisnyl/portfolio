import Head from "next/head";
import { renderMetaTags } from "react-datocms";

export default ({ children, data }) => (
  <div>
    <Head>{renderMetaTags(data.favicon)}</Head>
    {children}
  </div>
);
