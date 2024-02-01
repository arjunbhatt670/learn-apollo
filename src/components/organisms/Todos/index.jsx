import { useQuery } from "@apollo/client";
import { USER_TODOS } from "apollo/Operations/Client/Queries";
import { Loading } from "components/atoms";
import React from "react";
import { ArrowsAltOutlined } from "@ant-design/icons";
import { List, ListItem, Heading } from "./styles";

const Todos = ({ onExpand }) => {
    const { data, loading } = useQuery(USER_TODOS);

    return (
        <div>
            <Heading>ToDos</Heading>
            {loading ? (
                <Loading type="spinner" />
            ) : (
                <List>
                    {data.todos.map(todo => (
                        <ListItem key={todo.id.toString()}>
                            <p>{todo.title}</p>
                            <ArrowsAltOutlined
                                tabIndex={0}
                                onClick={() => onExpand?.(todo.id)}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
};

export default Todos;
