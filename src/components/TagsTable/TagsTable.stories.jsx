import TagsTable from "./TagsTable";

export default {
    title: "components/TagsTable",
    component: TagsTable,
    args: {
        columns : ['name','authors', 'country', 'number Of Pages'],
    }
};

const Template = (args) => <TagsTable {...args} />;

export const Primary = Template.bind({});

export const Arrows = Template.bind({});
Arrows.args = {
  columns : ['name','authors', 'country', 'number Of Pages'],
  upIcon: true, 
  downIcon: true,
}