// Extend Rebass buttons here

import { Button, Link } from 'rebass'

export const FeaturedButton = props => (
    <Link href={props.href} target={props.newTab ? "_blank": null}>
        <FeaturedButtonStyled children={props.text} />
    </Link>
)

export const AcceptButton = props => (
    <Link href={props.href} target={props.newTab ? "_blank": null}>
        <AcceptButtonStyled children={props.text} />
    </Link>
)

export const CancelButton = props => (
    <Link href={props.href} target={props.newTab ? "_blank": null}>
        <CancelButtonStyled children={props.text} />
    </Link>
)

const DefaultButtonStyled = Button.extend`
    color: white;
    margin: 0.75rem 0.25rem;
`

const AcceptButtonStyled = DefaultButtonStyled.extend`
    background-color: green;
`

const CancelButtonStyled = DefaultButtonStyled.extend`
    background-color: darkred;
`

const FeaturedButtonStyled = DefaultButtonStyled.extend`
    background-color: #204a56;
`