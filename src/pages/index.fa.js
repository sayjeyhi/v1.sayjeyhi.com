import React from "react"
import { Trans } from "@lingui/macro"
import { I18nProvider } from "@lingui/react"

import catalogES from "../locales/es/messages"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <I18nProvider
    language="es"
    catalogs={{
      es: catalogES,
    }}
  >
    <Layout>
      <SEO title="Home" />
      <h1>
        <Trans>سلام مردم!</Trans>
      </h1>
      <p>من جعفررضائی (SayJeyHi) هستم.</p>
      <p>به وبسایت من خوش اومدین.</p>
    </Layout>
  </I18nProvider>
)

export default IndexPage
