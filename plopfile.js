export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new Vue component with Storybook story',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (e.g., Button, UserCard):',
        validate: (value) => {
          if (!value || value.trim() === '') {
            return 'Component name is required';
          }
          if (!/^[A-Z]/.test(value)) {
            return 'Component name must start with an uppercase letter';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'plop-templates/Component.vue.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.ts',
        templateFile: 'plop-templates/Component.stories.ts.hbs',
      },
    ],
  });
}

