import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import spectre from "../images/front_spectre.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="d-flex justify-content-center mt-5">
      <div className="card description-container">
        <div className="index-image-container text-center">
          <img src={spectre} alt="Spectre Keyboard" />
        </div>
        <div className="mb-4">
          <ul>
            <li>Full stack developer working in the Edmonton, Alberta area</li>
            <li>Currently developing and dreaming CRUD projects</li>
            <li>
              I can be contacted through{" "}
              <a href="mailto:peterh782@gmail.com">email</a> or on{" "}
              <a
                href="https://www.linkedin.com/in/peter-hu-p-eng-57450071/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
