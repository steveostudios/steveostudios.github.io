const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/steve/Documents/_docs/personal/steveostudios.com/app/gatsby-theme-steveostudios/.cache/dev-404-page.js"))),
  "component---src-templates-books-js": hot(preferDefault(require("/Users/steve/Documents/_docs/personal/steveostudios.com/app/gatsby-theme-steveostudios/src/templates/books.js"))),
  "component---src-templates-home-js": hot(preferDefault(require("/Users/steve/Documents/_docs/personal/steveostudios.com/app/gatsby-theme-steveostudios/src/templates/home.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/steve/Documents/_docs/personal/steveostudios.com/app/gatsby-theme-steveostudios/src/templates/post.js"))),
  "component---src-templates-posts-js": hot(preferDefault(require("/Users/steve/Documents/_docs/personal/steveostudios.com/app/gatsby-theme-steveostudios/src/templates/posts.js")))
}

