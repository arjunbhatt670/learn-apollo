import { useQuery } from "@apollo/client";
import { GET_TODO } from "apollo/Operations/Client/Queries";
import { Loading } from "components/atoms";
import { CheckCircleOutlined, CheckCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";

const Todo = ({ id }) => {
    const { data, loading } = useQuery(GET_TODO, {
        variables: {
            id,
        },
    });

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <textarea value={data.todos[0].title} />
                    <CheckCircleOutlined />
                    <CheckCircleFilled />
                </div>
            )}
        </div>
    );
};

export default Todo;
