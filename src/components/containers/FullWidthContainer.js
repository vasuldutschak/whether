import React from 'react';
import PropTypes from "prop-types";
import {FullWidthContainerStyled} from "./Containers.styled";

function FullWidthContainer({children}) {
    return (
        <FullWidthContainerStyled>
            {children}
        </FullWidthContainerStyled>
    );
}

FullWidthContainer.propsTypes={
    children:PropTypes.node
}
export default FullWidthContainer;