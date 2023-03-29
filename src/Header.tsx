import React from 'react'

type Props = {
    app: any
}

const Header = ({ app }: Props) => {
    return (
        <div>my header oo. app name is { app }</div>
    )
}

export default Header