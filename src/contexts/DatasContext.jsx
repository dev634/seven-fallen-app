import { createContext } from 'react';

const Datas = createContext();

function DatasProvider(props){

    const kingdoms = {
        1:'Poseidia',
        2:'Eondra',
        3:'Endless night',
        4:'MetaScience',
        5:'The light\'s temple',
        6:'Celestial purity',
        7:'The saber\'s way'
    }

    return (
        <Datas.Provider value={kingdoms}>
            {props.children}
        </Datas.Provider>
    )
}

export default DatasProvider;