import { useMutation, useQuery } from "@apollo/client";
import { USER_TODOS } from "apollo/Operations/Client/Queries";
import { Loading } from "components/atoms";
import React from "react";
import { ArrowsAltOutlined, DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import { DELETE_TODO } from "apollo/Operations/Client/Mutations/todo.mutations";
import { List, ListItem, Heading } from "./styles";

const Todos = ({ onExpand }) => {
    const { data, loading } = useQuery(USER_TODOS);
    const [deleteTodo, { loading: deleting }] = useMutation(DELETE_TODO, {
        update: (cache, result) => {
            const { todos } = cache.readQuery({
                query: USER_TODOS,
            });

            cache.writeQuery({
                query: USER_TODOS,
                data: {
                    todos: todos.filter(
                        v => v.id !== result.data.delete_todos.returning[0].id,
                    ),
                },
            });
        },
    });

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
                            <DeleteOutlined
                                tabIndex={0}
                                onClick={() =>
                                    deleteTodo({
                                        variables: {
                                            id: todo.id,
                                        },
                                        optimisticResponse: {
                                            __typename: "todos_mutation_response",
                                            delete_todos: {
                                                returning: [
                                                    {
                                                        id: todo.id,
                                                        __typename: "todos",
                                                    },
                                                ],
                                            },
                                        },
                                    })
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
};

export default Todos;
