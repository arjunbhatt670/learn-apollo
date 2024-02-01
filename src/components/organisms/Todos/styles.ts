import styled from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: "flex-start";
`;

export const ListItem = styled.li`
    padding: 10px 12px;
    display: flex;
    gap: 8px;
    "& p": {
        display: flex;
    }
`;

export const Heading = styled.h3`
    margin: 16px;
`;
