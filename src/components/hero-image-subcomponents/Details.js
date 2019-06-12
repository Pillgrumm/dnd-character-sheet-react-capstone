import React from 'react';
//
function Details() {
    return (
          <section className="details">
                    <section role="region" id="build">
                        <header role="banner">
                            <h1 className="title">Create</h1>
                        </header>
                        <div className="app-summary">
                            <h1>Create your character.</h1>
                            <h4 className="create-styling">Customize your statistics needed in order to explore dungeons with pals</h4>
                        </div>
                    </section>
                    <section role="region" id="store">
                        <header role="banner">
                            <h1 className="title">Store</h1>
                        </header>
                        <div className="app-summary">
                            <h1>Store your creation.</h1>
                            <h4 className="store-styling">Save your characters progress for easy viewing for your next session</h4>
                        </div>
                    </section>
                    <section role="region" id="rollDice">
                        <header role="banner">
                            <h1 className="title">Roll</h1>
                        </header>
                        <div className="app-summary">
                            <h1>Roll the dice</h1>
                            <h4 className="roll-styling">Role Lodge the dice necessary for your journey. We have dices D4-D20!</h4>
                        </div>
                    </section>
            </section>
    );
}

export default Details;
