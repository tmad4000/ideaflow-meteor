var graph = new neo4j.GraphDatabase("http://localhost:7474");
console.log(graph);

Template.hello.greeting = function () {
  if (graph) {
    return "Welcome to ideaflow-meteor.";
  }
};

Template.hello.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});