import Form from "./Form";
import Button from "./../Button";

export default {
    title: "components/Form",
    component: Form,
    args: {
      title: 'Título',
      button: <Button 
      text= 'Custom'
      color= 'white'
      font= 'Courier New'
      size= '20px'
      border= '25px'
      backColor= 'black'
      onclick= {()=>alert('Click')}
      title= 'Agregar Nuevo Libro'
      />
    }
};

const Template = (args) => <Form {...args} />;

export const GeneralForm = Template.bind({});