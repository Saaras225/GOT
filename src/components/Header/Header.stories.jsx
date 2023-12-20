import Header from "./Header";

export default {
    title: "components/Header",
    component: Header,
    args: {
        columns : ['name','authors', 'country', 'number Of Pages'],
    }
};

const Template = (args) => <Header {...args} />;

export const Title = Template.bind({});

export const Arrows = Template.bind({});
Arrows.arg = {
  columns : ['name','authors', 'country', 'number Of Pages'],
  upIcon: true, 
  downIcon: false,
}