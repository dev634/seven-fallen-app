import React, {useState, useEffect} from 'react';
import {createUserDeck} from '../api/Decks';
import Layout from '../layouts/Layout';
import InputText from '../components/InputText';
import CheckBox from '../components/CheckBox';
import NavButton from '../components/NavButton';
import { RiContactsBookLine } from 'react-icons/ri';


const AddingDeckPage = (props) => {

    const form = new FormData();

    const [fieldValues, setFieldValues] = useState({
        deck_name: '',
        visibility: true
    });

    const handleBlur = (e) => {
        setFieldValues({...fieldValues, deck_name: e.target.value});
    }

    const handleCheck = (e) => {
        setFieldValues({...fieldValues, visibility: e.target.checked});
    }

    const handleCreate = (e) => {
        e.preventDefault();
        form.append('deck_name', fieldValues.deck_name);
        form.append('visibility', fieldValues.visibility);
    }

    useEffect(() => {
        console.log(fieldValues)
    },[fieldValues]);

    return (
        <>
            <Layout>
                <form className="form">
                    <div className="form--section">
                        <h4 className="form__section--title">Informations</h4>
                        <InputText classes="form--input" placeholder="Nom du deck" onBlur={handleBlur} value={fieldValues.deck_name}/>
                        {fieldValues.deck_name.length == 0 ? <span className="bad__input">Bad input</span> : ''}
                        <CheckBox id="visible" name="visibility" classes="form__checkbox" text="public" onChange={handleCheck} checked={fieldValues.visibility}/>
                    </div>
                </form>
                <div className="buttons__block">
                    <NavButton text="Create" url="/decks/new-deck/create" onClick={handleCreate} />
                    <NavButton text="Import" url="/decks/new-deck/import"/>
                    <NavButton text="Back" url="/decks"/>
                </div>
            </Layout>
        </>
    )
}

export default AddingDeckPage
