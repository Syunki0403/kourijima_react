import React from 'react';

const Main = (props) => {
    return (
        <main>
            <div className={"mainContents"}>
                {props.contents}
            </div>
        </main>
    )
}

export default Main;