import React from 'react';
import logo from './logo.svg';

import styled, { keyframes } from 'styled-components'

const Button = styled.button`
  display: inline-flex;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  margin: 5px;

  // Adapt the colors based on primary prop

  border: 1px solid ${props => props.primary ? '#007bff' : '#fefefe'};
  background: ${props => props.primary ? '#007bff' : '#fefefe'};
  color: ${props => props.primary ? '#fff' : '#212529'};
`

const AppContainer = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const AppLogoSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`

const DefaultButton = styled.button`
  display: inline-flex;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  margin: 5px;
  border: 1px solid #fefefe;
  background: #fefefe;
  color: #212529;
`

const PrimaryButton = styled(DefaultButton)`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
`

const SecondaryButton = styled(DefaultButton)`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
`

const SuccessButton = styled(DefaultButton)`
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
`

const DangerButton = styled(DefaultButton)`
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
`

const WarningButton = styled(DefaultButton)`
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
`

const InfoButton = styled(DefaultButton)`
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
`

const Link = ({className, children}) => (
  <a className={className}>{children}</a>
)

const StyledLink = styled(Link)`
  color: orange;
  font-weight: 700;
`

const BodyText = styled.span`
  font-size: 1rem;
  color: red;
  padding-bottom: 10px;
  border-bottom: 3px double currentColor;
`

const ParentElement = styled.div`
  color: purple;
  background: #fff;
  padding: 10px 15px;
  cursor: pointer
  margin: 10px;
`

const ChildElement = styled.div`
  background: purple;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  transition: all .28s ease;

  ${ParentElement}:hover & {
    background: orange;
    color: purple;
    filter: drop-shadow(2px 4px 6px black);
  }
`
function App(props) {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p style={{ backgroundColor: props.color }}>Hello, {props.name}</p>
        <Button primary> Primary Button</Button>
        <Button>Default Button</Button>
        
        <DefaultButton>Default Button</DefaultButton>
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <SuccessButton>Success Button</SuccessButton>
        <DangerButton>Danger Button</DangerButton>
        <WarningButton>Warning Button</WarningButton>
        <InfoButton>Info Button</InfoButton>

        <Link>Own Components</Link>
        <StyledLink>Styled, Exciting Link</StyledLink>

        <BodyText>Body Text</BodyText>
        <BodyText as="a">This is now a Link</BodyText>

        <ParentElement>
          This is Parent Element, Please hover me!
          <ChildElement> This is Child Element</ChildElement>
        </ParentElement>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
