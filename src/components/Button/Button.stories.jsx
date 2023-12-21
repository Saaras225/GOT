import Button from "./Button";

export default {
    title: "components/Button",
    component: Button,
    args: {
        text: "Button",
        onclick: ()=> alert('Click')
    }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Color = Template.bind({});
Color.args = {
    color:'red',
}

export const Font = Template.bind({});
Font.args = {
    font: "Arial",
}

export const Size = Template.bind({});
Size.args = {
    size: "24px",
}

export const BackColor = Template.bind({});
BackColor.args = {
    backColor: "#CD5C5C",
}

export const CustomAll = Template.bind({});
CustomAll.args = {
 text: 'Custom',
 color: 'white',
 font: 'Courier New',
 size: '32px',
 border: '24px',
 backColor: '#2F4F4F',
 onclick:()=> alert('Click'),
}