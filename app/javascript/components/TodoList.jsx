import React from "react";
import { Link } from "react-router-dom";

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = { todo_list:{todo_items:''}};

        this.addHtmlEntities = this.addHtmlEntities.bind(this);
    }
    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        const url = `/api/v1/show/${id}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ todo_list: response }))
            .catch(() => this.props.history.push("/todo_lists"));
    }

    addHtmlEntities(str) {
        return String(str)
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">");
    }

    render() {
        return (
            <Container>
                <Row>
                    <Table>
                        <thead>
                        <tr>
                            <th>Todo Item</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderItem()}
                        </tbody>
                    </Table>

                    <CreateForm
                        onAddItem={(e) => this.onAddItem(e)}
                        value={this.state.taskName}
                        onChange={(e) => this.onChange(e)}
                    />
                </Row>
            </Container>
        )
    }