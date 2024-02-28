import React, {Suspense} from 'react';
import AppBar from "../components/navbar/AppBar";
import {Outlet} from "react-router-dom";
import FullWidthContainer from "../components/containers/FullWidthContainer";
import ContentContainer from "../components/containers/ContentContainer";
import {Footer, Header, Main} from "../components/containers/Containers.styled";
import Loader from "../components/loader/Loader";

function Layout(props) {
    return (
        <FullWidthContainer>
            <Header>
                <ContentContainer>
                    <AppBar/>
                </ContentContainer>
            </Header>
            <Main>
                <Suspense fallback={<Loader/>}>
                    <ContentContainer>
                        <Outlet/>
                    </ContentContainer>
                </Suspense>
            </Main>
            <Footer>
                <ContentContainer>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur blanditiis enim fugit id
                    minus numquam? Eos excepturi sed tempore.
                </ContentContainer>
            </Footer>
        </FullWidthContainer>
    );
}

export default Layout;