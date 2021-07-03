import React from 'react'

function Toolbar(props) {
    const {classes, toolsList ,onClick} = props;
    return (
        <div className={classes ? classes : "toolbar"} onClick = {onClick}>
           {
             toolsList ? 
                Object.keys(toolsList).map((elmt, index) => {
                    let NewComponent = toolsList[elmt].component;
                    return (
                        <div className="toolbar__icon">
                            <NewComponent key={index} id={toolsList[elmt].id} />
                        </div>
                        )
                })
            :
            null
           } 
        </div>
    )
}

export default Toolbar
