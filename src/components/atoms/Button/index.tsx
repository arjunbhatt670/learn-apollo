import React from "react";

import { Loading } from "../index";
import { ButtonProps } from "./Button.types";
import { Container } from "./styles";

const Button: React.FC<ButtonProps> = props => {
    const { Text, styles, onClick, loading, ...rest } = props;

    return (
        <Container style={styles} onClick={onClick} {...rest}>
            {loading ? <Loading /> : Text}
        </Container>
    );
};

export default Button;
