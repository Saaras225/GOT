import Table from "./Table";
import TagsTable from "../TagsTable";

export default {
    title: "components/Table",
    component: Table,
    args: {
        entries:[
            {
              "name": "A Game of Thrones",
              "isbn": "978-0553103540",
              "authors": [
                "George R. R. Martin"
              ],
              "numberOfPages": 694,
              "publisher": "Bantam Books",
              "country": "United States",
            },
            {
              "name": "A Clash of Kings",
              "isbn": "978-0553108033",
              "authors": [
                "George R. R. Martin"
              ],
              "numberOfPages": 768,
              "publisher": "Bantam Books",
              "country": "United States",
            },
            {
                "name": "The Hedge Knight",
                "isbn": "978-0976401100",
                "authors": [
                  "George R. R. Martin"
                ],
                "numberOfPages": 164,
                "publisher": "Dabel Brothers Publishing",
                "country": "United States",
              },

        ],
        columns : ['name','authors', 'country', 'numberOfPages']
    }
};

const Template = (args) => <Table {...args} />;


export const Content = Template.bind({});