// Extend Rebass buttons here

import { Button, Link } from 'rebass'

const withLink = (props, children) => {
    return (
        <LinkStyled href={props.href} target={props.newTab ? "_blank": null}>
            {children}
        </LinkStyled>
    )
}

export const FeaturedButtonLink = props => {
    return withLink(props, <FeaturedButton link children={props.children} />)
}

export const CancelButtonLink = props => {
    return withLink(props, <CancelButton link children={props.children} />)
}

const LinkStyled = Link.extend`
    cursor: pointer;
    `
    
const DefaultButton = Button.extend`
    color: white;
    border-radius: 7px;
    margin: 0.75rem 0.25rem;

    cursor: ${props => props.link && 'pointer'};
`

export const AcceptButton = DefaultButton.extend`
    background-color: green;
`

export const CancelButton = DefaultButton.extend`
    background-color: darkred;
`

export const FeaturedButton = DefaultButton.extend`
    background-color: #204a56;
`