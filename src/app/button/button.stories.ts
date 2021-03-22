import { ButtonComponent } from './button.component';

const Template = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export default {
  title: 'Components/ButtonComponent',
};

export const Default = Template.bind({});

Default.args = {
  label: 'Submit',
};
