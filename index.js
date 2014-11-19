// init controller
var controller = new ScrollMagic();

// assign handler "scene" and add it to the controller
var scene = new ScrollScene({duration: 100})
  .fadeOut("#block")
  .addTo(controller);

// adding multiple scenes at once
var scene2 = new ScrollScene();
var scene3;
controller.addScene([
  scene2,
  scene3 = new ScrollScene({duration: 200}),
  new ScrollScene({offset: 20})
]);
