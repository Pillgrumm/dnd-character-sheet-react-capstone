import React from 'react';
//
function CharacterInformationForm() {
    return (
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
    );
}

export default CharacterInformationForm;
