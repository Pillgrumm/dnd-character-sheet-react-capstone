import React from 'react';
import logo from './logo.svg';
import './App.css';
//
function App() {
    return (
        <div className="App">

            <input type="hidden" className="logged-in-user"  />
            <input type="hidden" className="logged-in-user"  />
            <input type="hidden" className="selected-entry-id"  />
            <main className="hero-image">
                <section role="region" id="landing-page-info">
                    <header role="banner">
                        <h1 className="title">Role Lodge</h1>
                    </header>
                    <div className="app-summary">
                        <h1>Role Lodge is a place for Dungeons and Dragons characters statistics to be stored for easy viewing. Additionally, if the player has misplaced their dice, there is a functionality at the bottom that uses a random number generator for each type of dice!</h1>
                        <h4>In order to get started either login or register an account to use this application.</h4>
                    </div>
                </section>
                <section role="region" id="login-form-section">
                    <div id="absoluteCenteredDiv">
                        <form className="login-form">
                            <div className="authentication-box">
                                <h1 className="title">Login</h1>
                                <input className="loginUsername greyText" name="username" type="text" placeholder="User Name"  required />
                                <input className="loginPassword greyText" name="password" type="password" placeholder="Password"  required />
                                <p>Username: test</p>
                                <p>Password: 123</p>
                                <button className="button" id="login">
                                    <i className="fas fa-lock-open"></i> Login
                                </button>
                            </div>
                        </form>
                        <div className="loginRegister">
                            <p>Don't have an account? <a id="sign-up-link" href="#">Register here.</a></p>
                        </div>
                    </div>
                </section>

                <section role="region" id="sign-up-form" className="hidden">
                    <div id="absoluteCenteredDiv">
                        <form className="sign-up-form">
                            <div className="authentication-box">
                                <h1>Sign Up</h1>
                                <input className="registerUsername greyText" name="username" type="text" placeholder="User Name" required />
                                <input className="registerPassword greyText" name="password" type="password" placeholder="Password" required />
                                <input className="registerEmail greyText" name="email" type="email" placeholder="Email" required />
                                <button className="button" id="register">
                                    <i className="fas fa-user-circle"></i> Register
                                </button>
                            </div>
                        </form>
                        <div className="loginRegister">
                            <p>Already have an account? <a id="sign-in-link" href="#">Click here.</a></p>
                        </div>
                    </div>
                </section>
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
                <footer className="footer">
                    <div className="footer-wrapper">
                        <a className="footer-icon" href="https://github.com/Pillgrumm" target="_blank">
                            <i className="fab fa-github fa-3x" aria-hidden="true"></i>
                        </a>
                        <a className="footer-icon" href="mailto:nick22793@hotmail.com?Subject=Hello" target="_blank">
                            <i className="far fa-envelope fa-3x" aria-hidden="true"></i>
                        </a>
                        <a className="footer-icon" href="https://www.linkedin.com/in/nik-valenzuela/" target="_blank">
                            <i className="fab fa-linkedin fa-3x" aria-hidden="true"></i>
                        </a>
                    </div>
                </footer>
            </main>
            <main role="main" id="full-form" className="hidden">
                <section role="region" className="character-name page-wrapper">
                    <fieldset>
                        <section role="region" className="select-previous-entries">
                            <legend className="name-legend">Create a character</legend>
                        </section>
                    </fieldset>
                </section>
                <form className="character-information-form page-wrapper">
                    <section role="region" className="form-wrapper ">
                        <fieldset>
                            <legend>General</legend>
                            <section role="region" className="section-content">
                                <div className="input-wrapper">
                                    <label htmlFor="characterName">Character Name</label>
                                    <input className="characterName" name="characterName" type="text" placeholder="Character Name" required />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Name. Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="characterClass">Class</label>
                                    <input className="characterClass" name="characterClass" type="text" placeholder="Class" required />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character's class. Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="characterLevel">Level</label>
                                    <input className="characterLevel" name="characterLevel" type="number" placeholder="0" required />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character's level. Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="characterRace">Race</label>
                                    <input className="characterRace" name="characterRace" type="text" placeholder="Race" className="" required />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Race. Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="alignment">Alignment</label>
                                    <select className="alignment " name="alignment" required>
                                        <option value="" disabled>Select...</option>
                                        <option value="Lawful Good">Lawful Good</option>
                                        <option value="Lawful Neutral">Lawful Neutral</option>
                                        <option value="Lawful Evil">Lawful Evil</option>
                                        <option value="Neutral Good">Neutral Good</option>
                                        <option value="True Neutral" defaultValue>True Neutral</option>
                                        <option value="Neutral Evil">Neutral Evil</option>
                                        <option value="Chaotic Good">Chaotic Good</option>
                                        <option value="Chaotic Neutral">Chaotic Neutral</option>
                                        <option value="Chaotic Evil">Chaotic Evil</option>
                                    </select>
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Characters Alignment. Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="background">Background</label>
                                    <input className="background " name="background" type="text" placeholder="Background" required />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Characters background. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="experience">EXP</label>
                                    <input className="experience " name="experience" type="number" placeholder="0" required />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Characters experience points. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="hitPoints">HP</label>
                                    <input className="hitPoints " name="hitPoints" type="number" placeholder="0"  required />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Hit Points. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="gp">GP</label>
                                    <input className="gp " name="gp" type="number" placeholder="0"  required />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Gold Pieces. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </fieldset>
                    </section>
                    <section role="region" className="form-wrapper">
                        <fieldset>
                            <legend>Statistics</legend>
                            <section role="region" className="section-content">
                                <div className="input-wrapper">
                                    <label htmlFor="strength">STR</label>
                                    <input className="strength" name="strength" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Strength. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="dexterity">DEX</label>
                                    <input className="dexterity" name="dexterity" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Dexterity. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="constitution">CONS</label>
                                    <input className="constitution" name="constitution" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Constitution. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="intelligence">INT</label>
                                    <input className="intelligence" name="intelligence" type="number"  placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Intelligence. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="wisdom">WIS</label>
                                    <input className="wisdom " name="wisdom" type="number"  placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Wisdom. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="charisma">CHA</label>
                                    <input className="charisma " name="charisma" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Charisma. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </fieldset>
                    </section>
                    <section role="region" className="form-wrapper">
                        <fieldset>
                            <legend>Skills</legend>
                            <section role="region" className="section-content">
                                <div className="input-wrapper">
                                    <label htmlFor="acrobatics">Acrobatics (Dex)</label>
                                    <input className="acrobatics" name="acrobatics" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Acrobatics. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="animalHandling">Animal Handling (Wis)</label>
                                    <input className="animalHandling" name="animalHandling" type="number"  placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Animal Handling. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="arcana">Arcana (Int)</label>
                                    <input className="arcana" name="arcana" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Arcana. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="athletics">Athletics (Str)</label>
                                    <input className="athletics" name="athletics" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Athletics. Not Required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="deception">Deception (Cha)</label>
                                    <input className="deception " name="deception" type="number"  placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Deception. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="history">History (Int)</label>
                                    <input className="history " name="history" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character History. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="insight">Insight (Wis)</label>
                                    <input className="insight " name="insight" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Insight. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="intimidation">Intimidation (Cha)</label>
                                    <input className="intimidation " name="intimidation" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Intimidation. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="investigation">Investigation (Int)</label>
                                    <input className="investigation " name="investigation" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Investigation. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="medicine">Medicine (Wis)</label>
                                    <input className="medicine " name="medicine" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Medicine. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="nature">Nature (Int)</label>
                                    <input className="nature " name="nature" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Nature. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="perception">Perception (Wis)</label>
                                    <input className="perception " name="perception" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Perception. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="performance">Performance (Cha)</label>
                                    <input className="performance " name="performance" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Performance. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="persuasion">Persuasion (Cha)</label>
                                    <input className="persuasion " name="persuasion" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Persuasion. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="religion">Religion (Int)</label>
                                    <input className="religion " name="religion" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Religion. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="sleightOfHand">Sleight of Hand (Dex)</label>
                                    <input className="sleightOfHand " name="sleightOfHand" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Sleight of Hand. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="stealth">Stealth (Dex)</label>
                                    <input className="stealth " name="stealth" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Stealth. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="survival">Survival (Wis)</label>
                                    <input className="survival " name="survival" type="number" placeholder="0" />
                                    <div className="icons-wrapper">
                                        <div className="icon-content icon-content-info">
                                            <i className="fas fa-info"></i>
                                            <span>Character Survival. Not Required</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </fieldset>
                    </section>
                    <section role="region">
                        <fieldset>
                            <button className=" button" id="form-submit-button">
                                <i className="fas fa-save"></i>
                            </button>
                            <button className=" button" id="form-delete-button">
                                <i className="fas fa-trash"></i>
                            </button>
                        </fieldset>
                    </section>
                </form>
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

            </main>
        </div>
    );
}

export default App;
