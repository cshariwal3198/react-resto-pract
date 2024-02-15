import { StyledImage, StyledList, StyledWrapper } from "./header-styles";

export const Header = () => {

    console.log('header');

    return (
        <StyledWrapper>
            <StyledImage src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320" alt="no logo found" />
            <StyledList>
                <li>Home</li>
                <li>Explore</li>
                <li>Cart</li>
                <li>About Us</li>
                <li>Contact</li>
            </StyledList>
        </StyledWrapper>
    );
}