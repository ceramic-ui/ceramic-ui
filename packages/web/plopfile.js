module.exports = function(plop) {
  plop.setGenerator("component", {
    description: "Generates boilerplate for a React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of the component (e.g. ButtonPanel)"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/{{name}}/{{name}}.js",
        templateFile: "plop-templates/component/Component.hbs"
      },
      {
        type: "add",
        path: "src/{{name}}/{{name}}.stories.js",
        templateFile: "plop-templates/component/Component.stories.hbs"
      },
      {
        type: "add",
        path: "src/{{name}}/index.js",
        templateFile: "plop-templates/component/index.hbs"
      }
    ]
  });
};
