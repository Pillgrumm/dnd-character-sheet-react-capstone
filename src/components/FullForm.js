import React from 'react';
import CharacterName from './full-form-subcomponents/CharacterName';
import CharacterInformationForm from './full-form-subcomponents/CharacterInformationForm';
import BottomContent from './full-form-subcomponents/BottomContent';
//
function FullForm() {
    return (
            <main role="main" id="full-form" className="hidden">
            <CharacterName />
            <CharacterInformationForm />
            <BottomContent />
            </main>
    );
}

export default FullForm;
