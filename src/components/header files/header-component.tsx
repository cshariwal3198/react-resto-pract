import { StyledImage, StyledWrapper } from "./header-styles";

export const Header = () => {

    const imageSource = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320';

    return (
        <StyledWrapper className="shadow-xl px-10">
            <StyledImage src={imageSource} alt="Failed to load logo" />
            <ul className="flex items-center justify-between list-none text-xl font-serif">
                <li>Home</li>
                <li>Explore</li>
                <li>Cart</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </StyledWrapper>
    );
}