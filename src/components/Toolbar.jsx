import React from 'react'

function Toolbar(props) {
    const {classes, toolsList ,onClick} = props;
    return (
        <div className={classes ? classes : "toolbar"} onClick = {onClick}>
           {
              toolsList ? 
                Object.keys((elmt, index) => {
                    let NewComponent = elmt[index].component;
                    return (
                       <NewComponent key ={index} id={elmt[index].id}/>  
                    )
                })
              :
                null
           } 
        </div>
    )
}

export default Toolbar
