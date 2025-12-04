// Fancybox gallery settings
Fancybox.bind("[data-fancybox='gallery']", {
  Thumbs: true,
  Toolbar: {
    display: [
      { id: "prev", position: "center" },
      { id: "next", position: "center" },
      "slideshow",
      "close"
    ]
  },
  Slideshow: {
    autoStart: true,
    speed: 2500
  }
});
