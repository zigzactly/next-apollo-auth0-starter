// Extend Rebass buttons here

import { Button, Link } from 'rebass'

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

const AcceptButtonStyled = Button.extend`
    background-color: #204a56;
    color: #dcb2a6;
    margin: 0.75rem 0.25rem;
`

const CancelButtonStyled = Button.extend`
    background-color: Thistle;
`