module.exports = {
  blogPostDir: "posts",
  blogAuthorDir: "",
  blogAuthorId: "clarice.bouwer",
  siteTitle: "Corporate Programmer",
  siteTitleAlt: "Corporate Programmer",
  siteLogo: "/logos/icon-160x160.png",
  siteUrl: "https://www.corporateprogrammer.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "Journal entries for self-discovery and corporate world experience.",
  siteCover: "https://picsum.photos/1920/639/?image=983",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/feed.xml",
  siteRssAuthor: "Clarice Bouwer",
  siteFBAppID: "1685950495005107",
  sitePaginationLimit: 5,
  googleAnalyticsID: "UA-77127562-1",
  disqusShortname: "corporateprogrammer",
  siteSocialUrls: [
    { url: "https://github.com/cbillowes", type: "github" },
    { url: "https://twitter.com/cbillowes", type: "twitter" },
    { url: "mailto:hello@corporateprogrammer.com", type: "email" }
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/cbillowes",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/cbillowes",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:hello@corporateprogrammer.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  copyright: {
    label: "Corporate Programmer"
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
