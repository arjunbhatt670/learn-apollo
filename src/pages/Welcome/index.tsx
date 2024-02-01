import React, { useState } from "react";

import logo from "assets/app/logo.svg";
import { Image, Loading } from "components/atoms";
import PageTitle from "components/atoms/PageTitle";
import { useTranslation } from "react-i18next";

import { useQuery } from "@apollo/client";
import Todos from "components/organisms/Todos";
import Todo from "components/organisms/Todo";
import { Header } from "components/organisms";
import { Anchor, Container } from "./styles";

const Welcome = () => {
    const { t, ready } = useTranslation();
    const [displayTodo, setDisplayTodo] = useState<number>();

    return (
        <>
            <PageTitle Title="Todo" />
            <Header />
            <Container className="App">
                <Todos onExpand={(id: number) => setDisplayTodo(id)} />
                {displayTodo && <Todo id={displayTodo} />}
            </Container>
        </>
    );
};

export default Welcome;
