import Main from '../layouts/Main';
import {useEffect,useState} from 'react';
import {getOne} from '../api/Decks';
import Button from '../components/Button';

function ModifyDeckPage(props){
    const {options, optionsName} = props.location;
    const [deckInfos, setDeckInfos] = useState({});

    /* handling functions */

    const handleChange = (e) => {
        e.preventDefault();

        switch(e.target.id || e.target.name){

            case 'description':
                  setDeckInfos({...deckInfos, description: e.target.value});
                  break;
            case 'kingdoms':
                  setDeckInfos(prevState => {
                      const newVal = [...prevState.kingdom, e.target.value];
                      return newVal
                  });
                  break;
                  default:
                      return;
        }
        console.log(deckInfos)
    }

    const handleClick = async (e) => {
        e.preventDefault();

    }

    useEffect(async () => {
        let res = await getOne(props.location.deckProps.id);
        setDeckInfos(res.message);
        console.log(res)
    },[]);

    return (
        <Main classes="page page__deck">
            <form className="form" onChange={handleChange}>
                <div className="form--section column">
                    <input id="deck_name" className="form--input mb-2" type="text" placeholder="deck name" value={deckInfos.deck_name}/>
                    <p className="row justify-start mb-1" >Cards number : {deckInfos.num_cards}</p>
                    <p className="row jsutify-start mb-2">Total Celestian energy : {deckInfos.total_ec}</p>
                    {options && options instanceof Array ?
                        <fieldset className="pb-2 mb-2">
                            <legend className="pb-1">{optionsName}</legend>
                            <ul id="kingdoms__list" className="column">
                                {
                                    options.map(elmt => ( 
                                            <li key={elmt[0]} className="row justify-between">
                                                <label className="form__label" htmlFor={elmt[0]}>{elmt[1]}</label>
                                                <input 
                                                       id={elmt[0]} 
                                                       className="form__checkbox" 
                                                       type="checkbox" 
                                                       name="kingdoms" 
                                                       checked={deckInfos.kingdom instanceof Array && deckInfos.kingdom.includes(elmt[0])} value={elmt[0]}
                                                />
                                            </li> 
                                        )
                                    )
                                }
                            </ul>
                        </fieldset>
                        :
                        null
                    }
                    <div className="form__option--block row mb-2">
                        {console.log(deckInfos)}
                        <label className="form__label mr-2" htmlFor="isVisible">Public</label>
                        <input id="isVisible" className="form__checkbox" type="checkbox" checked={deckInfos.is_visible}/>
                    </div>
                    <textarea id="description" className="form__textarea" placeholder="description" value={deckInfos.description}/>
                </div>
                <Button onClick={handleClick} text="update" />
            </form>
        </Main>
    )
}

export default ModifyDeckPage;