import React from 'react'

const World1 = props => {
   const {name,heroName} = props
    return(
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
            {props.children}
        </div>
    )
}
export default World1
