import React from 'react';
//
function BottomContent() {
    return (
       <section role="region" className="bottom-content page-wrapper">
                    <div role="region">
                        <fieldset>
                            <div className="dice-wrapper">
                                <legend>Dice</legend>
                                <section role="region" className="section-content">
                                    <div className="input-wrapper">
                                        <button id="d20" className="dice-button">
                                            <img src="/images/dice/dice-20.png" alt="" className="dice-image" />
                                        </button>
                                        <div id="d20-value" className="dice-value"></div>
                                        <div className="icons-wrapper">
                                            <div className="icon-content icon-content-info">
                                                <i className="fas fa-info"></i>
                                                <span>D20 Dice.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <button id="d12" className="dice-button">
                                            <img src="/images/dice/dice-12.png" alt="" className="dice-image" />
                                        </button>
                                        <div id="d12-value" className="dice-value"></div>
                                        <div className="icons-wrapper">
                                            <div className="icon-content icon-content-info">
                                                <i className="fas fa-info"></i>
                                                <span>D12 Dice.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <button id="d10" className="dice-button">
                                            <img src="/images/dice/dice-10.png" alt="" className="dice-image" />
                                        </button>
                                        <div id="d10-value" className="dice-value"></div>
                                        <div className="icons-wrapper">
                                            <div className="icon-content icon-content-info">
                                                <i className="fas fa-info"></i>
                                                <span>D10 Dice.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <button id="d8" className="dice-button">
                                            <img src="/images/dice/dice-8.png" alt="" className="dice-image" />
                                        </button>
                                        <div id="d8-value" className="dice-value"></div>
                                        <div className="icons-wrapper">
                                            <div className="icon-content icon-content-info">
                                                <i className="fas fa-info"></i>
                                                <span>D8 Dice.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <button id="d6" className="dice-button">
                                            <img src="/images/dice/dice-6.png" alt="" className="dice-image" />
                                        </button>
                                        <div id="d6-value" className="dice-value"></div>
                                        <div className="icons-wrapper">
                                            <div className="icon-content icon-content-info">
                                                <i className="fas fa-info"></i>
                                                <span>D6 Dice.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <button id="d4" className="dice-button">
                                            <img src="/images/dice/dice-4.png" alt="" className="dice-image" />
                                        </button>
                                        <div id="d4-value" className="dice-value"></div>
                                        <div className="icons-wrapper">
                                            <div className="icon-content icon-content-info">
                                                <i className="fas fa-info"></i>
                                                <span>D4 Dice.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <button id="reset" className="dice-button character-name-button">
                                            Reset
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </fieldset>
                    </div>

                    <div role="region">
                        <fieldset>
                            <div className="character-wrapper">
                                <legend>Characters</legend>
                                <section role="region" className="section-content character-content">

                                </section>
                            </div>
                        </fieldset>
                    </div>
                </section>
    );
}

export default BottomContent;
