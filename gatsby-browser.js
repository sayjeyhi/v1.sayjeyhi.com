import React from "react"
import { RecoilRoot } from "recoil"

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
)

// gatsby-browser.js
export const onServiceWorkerUpdateReady = () => {
  console.log("updated!")
  window.location.reload(true)
}
