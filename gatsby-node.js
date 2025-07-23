exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: "/survey/", // The path on your Gatsby site
    toPath: "https://csulb.qualtrics.com/jfe/form/SV_9mXnAjxBqfrzdUa", // The external URL
    isPermanent: true, // Optional: Set to true for a 301 permanent redirect
    redirectInBrowser: true, // Optional: Forces a client-side redirect in the browser
  })
}
