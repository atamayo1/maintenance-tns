import styled from "styled-components";

export const ContentApp = styled.div`
    display: flex;
    width: 40vw;
    height: 100vh;
    margin: 0 auto;
    background-image: url(${({bgApp}) => bgApp});
    background-size: cover;
    background-position: center;
`