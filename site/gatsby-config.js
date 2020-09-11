module.exports = {
  siteMetadata: {
    title: `Steveostudios`,
    siteUrl: `https://steveostudios.com`,
    description: `Portfolio and Blog of Steve Stone`,
  },
  plugins: [
    {
      resolve: "gatsby-theme-steveostudios",
      options: {
        contentPath: "books",
        basePath: "/books",
      },
    },
  ],
};
