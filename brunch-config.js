exports.config = {
  paths: {
    "public":"webapp/",
    "watched":["app/", "components/"]
  },
  plugins:{
    react:{
      autoIncludeCommentBlock: true
    },
    autoReload: {
      enabled: {
        css: true,
        js: true,
        assets: false
      },
      port: [9000]
    }
  },
  files: {
    javascripts: {
      joinTo:{
        'js/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/
      }
    }
  }
}