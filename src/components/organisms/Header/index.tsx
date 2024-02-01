import React from "react";

import { HeaderProps } from "./Header.types";
import { Container } from "./styles";
import CreateTodo from "../CreateTodo";

const Header = (props: HeaderProps) => {
    return (
        <Container>
            <div />
            <CreateTodo />
        </Container>
    );
};

export default Header;
