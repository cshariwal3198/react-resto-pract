import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 120px 50vw;
    justify-content: space-between;
    gap: 20px;
`;

export const StyledImage = styled.img`
    width: 120px;
    height: 120px;
`;

export const StyledList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    & > li{
        font-size: 24px;
    }
`;