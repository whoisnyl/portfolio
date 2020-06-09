import React, { useContext, useState, useEffect } from "react";
import { request } from "../lib/datocms";

import Layout from "../components/shared/layout";
import { LayoutContext } from "../components/shared/context";

import Header from "../components/elements/header";
import Container from "../components/elements/container";
import Footer from "../components/elements/footer";
import Sidebar from "../components/elements/sidebar";

import Button from "../components/utils/button";
import Menu from "../components/utils/menu";

import Projects from "../components/project";
import SpecificProject from "../components/project/specificProject";
import About from "../components/about";
import Contact from "../components/contact";

const HOMEPAGE_QUERY = `query Homepage {
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
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 4 },
  });
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  const {
    project,
    sidebarContent,
    setSidebarOpen,
    setSidebarContent,
  } = useContext(LayoutContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    data &&
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
  }, []);

  const openSidebar = () => {
    setSidebarOpen(true);
    setSidebarContent("about");
  };

  return (
    <Layout data={data.site}>
      <Header />
      <Container>
        <section className={`introduction ${isLoading ? "loading" : ""}`}>
          {!isLoading && data.about ? (
            <React.Fragment>
              <h2>{data.about.occupation}</h2>
              <p>{data.about.introduction}</p>
              <Button onClick={openSidebar} className="btn btn-outline">
                ABOUT ME
              </Button>
            </React.Fragment>
          ) : (
            ""
          )}
        </section>
        <Projects data={data.allProjects} />
      </Container>
      <Footer />
      <Sidebar>
        {
          {
            menu: <Menu />,
            about: <About data={data.about} />,
            project: <SpecificProject pid={project} />,
            contact: <Contact />,
            default: "error message",
          }[sidebarContent]
        }
      </Sidebar>
    </Layout>
  );
}
