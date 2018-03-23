const js = import("../dist/rwasm");

js.then(js => {
  js.hello("World!");
});
