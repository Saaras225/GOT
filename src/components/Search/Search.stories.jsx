import Search from "./Search";

export default {
    title: "components/Search",
    component: Search,
    args: {
        title: "Search",
        onChange: (e) => console.log(e.target.value)
    }
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args= {
  title: "Search",
  onChange: (e) => console.log(e.target.value)
}

export const Title = Template.bind({});
Title.args= {
  title: "Search",
  colorTitle: "darkBlue",
  sizeTitle: '24px',
  onChange: (e) => console.log(e.target.value)
}

export const Input = Template.bind({});
Input.args= {
  background: '#A9A9A9',
  colorInput: 'yellow', 
  fontInput: 'Times New Roman', 
  sizeInput: '24px',
  onChange: (e) => console.log(e.target.value)
}