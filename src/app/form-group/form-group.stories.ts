import { InputModule } from '../input/input.module';
import { moduleMetadata } from '@storybook/angular';
import { FormGroupComponent } from './form-group.component';
import { FormGroupModule } from './form-group.module';
import { DefaultInput } from '../input/input.stories';

const Template = (args: FormGroupComponent) => ({
  component: FormGroupComponent,
  props: args,
  template: `
      <app-form-group [columns]="columns" [heading]="heading">
        <app-input [label]="label" [placeholder]="placeholder"></app-input>
        <app-input [label]="label" [placeholder]="placeholder" type="password"></app-input>
      </app-form-group>
  `,
});

export default {
  title: 'Components/FormGroupComponent',
  components: FormGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [InputModule, FormGroupModule],
    }),
  ],
};

export const Default = Template.bind({});

Default.args = {
  heading: 'This is a heading',
  columns: 2,
  ...DefaultInput.args,
};
