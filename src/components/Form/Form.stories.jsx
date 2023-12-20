import Form from "./Form";

export default {
    title: "components/Form",
    component: Form,
    args: {
      text: 'Publicar',
      title: 'Publicar Nuevo Libro',
    }
};

const Template = (args) => <Form {...args} />;

export const GeneralForm = Template.bind({});