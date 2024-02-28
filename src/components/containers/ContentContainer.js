import PropTypes from 'prop-types';
import {ContentContainerStyled} from "./Containers.styled";

function ContentContainer({children}) {
    return (
        <ContentContainerStyled>
            {children}
        </ContentContainerStyled>
    );
}

ContentContainer.propTypes = {
    children:PropTypes.node
};

export default ContentContainer;