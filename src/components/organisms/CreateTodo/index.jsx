import React, { useRef, useState } from "react";
import { Button } from "components/atoms";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "apollo/Operations/Client/Mutations/todo.mutations";
import { USER_TODOS } from "apollo/Operations/Client/Queries";

const CreateTodo = () => {
    const [isCreate, setIsCreate] = useState(false);
    const [todo, setTodo] = useState("");
    const inputRef = useRef(null);

    const [addTodo, { loading: isCreatingTodo }] = useMutation(ADD_TODO, {
        update: (cache, result) => {
            const { todos } = cache.readQuery({
                query: USER_TODOS,
            });
            cache.writeQuery({
                query: USER_TODOS,
                data: { todos: [result.data.insert_todos.returning[0], ...todos] },
            });
        },
    });

    return (
        <>
            {isCreate && (
                <input ref={inputRef} value={todo} onChange={e => setTodo(e.target.value)} />
            )}
            <div>
                <Button
                    loading={isCreatingTodo}
                    onClick={() => {
                        if (isCreate) {
                            if (todo.trim().length > 0) {
                                addTodo({
                                    variables: {
                                        title: todo.trim(),
                                    },
                                    optimisticResponse: {
                                        __typename: "todos_mutation_response",
                                        insert_todos: {
                                            returning: [
                                                {
                                                    id: "#1",
                                                    title: todo.trim(),
                                                    __typename: "todos",
                                                },
                                            ],
                                        },
                                    },
                                }).then(() => {
                                    setTodo("");
                                    setIsCreate(false);
                                });
                            }
                        } else {
                            setIsCreate(true);
                            setTimeout(() => {
                                inputRef.current.focus();
                            }, 0);
                        }
                    }}
                    Text={isCreate ? "Save" : "Create ToDo"}
                />
                {isCreate && !isCreatingTodo && (
                    <Button onClick={() => setIsCreate(false)} Text="Cancel" />
                )}
            </div>
        </>
    );
};

export default CreateTodo;
