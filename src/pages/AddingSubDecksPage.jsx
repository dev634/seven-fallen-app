import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

/*api*/
import {getEdenCards, getRegisterCards, getHolyBookCards} from '../api/CardsWareHouse';
import {getEdenCards as getUserEdenCards} from '../api/Eden';
import {getRegisterCards as getUserRegisterCards} from '../api/Register';
import {getHolyBookCards as getUserHolyBookCards} from '../api/HolyBook';

import Main from '../layouts/Main';
import Loader from '../components/Loader';
import {RiLoader3Line} from 'react-icons/ri';
import Flash from '../components/Flash';
import Filters from '../components/Filters';
import InfiniteListTwo from '../components/InfiniteListTwo';

import dotenv from 'dotenv';
dotenv.config();

function AddingSubDecksCardsPage(props) {
    /*states*/
    const [loaded, setLoaded] = useState(false);
    const [flashMessage, setFlashMessage] = useState(null);
    const [flashState, setFlashState] = useState(null);
    const [cardsResponse, setCardsResponse] = useState({
        code: '',
        message: ''
    });
    const [page, setPage] = useState(1);
    const [completeList, setCompleteList] = useState([]);
    const [imageLoaded, setImageLoaded] = useState([]);

    /*variables*/
    let endUrl = props.location.pathname.split('/');
    endUrl = endUrl[endUrl.length - 1];
    let id = useParams();

    /*handlers*/
    const handleFlash = (newFlashState) => {
        setFlashState(newFlashState);
    }

    /*useEffects*/
    useEffect(async () => {
        let response = '';
        let edenResponse = '';
        let registerResponse = '';
        let holybookResponse = ''; 

        if(endUrl === 'eden'){
            response = await getEdenCards(page,10,'FR');
            edenResponse = await getUserEdenCards(id);
        }

        if(endUrl === 'register'){
            response = await getRegisterCards(page,10,'FR');
            registerResponse = await getUserRegisterCards(id);
        }

        if(endUrl === 'holybook'){
            response = await getHolyBookCards(page,10,'FR');
            holybookResponse = await getUserHolyBookCards(id);
        }

        if(response.message[1]){
            setCompleteList([...completeList,...response.message[1]]);
        }
        setCardsResponse(response);
    },[page]);

    useEffect(() => {
        let newImages = {};

        if(cardsResponse.message[1] instanceof Array){
            cardsResponse.message[1].map(elmt => {
                newImages[elmt.id] = false;    
            })
        }
        
        setImageLoaded(newImages);
    }, [cardsResponse.message[1]]);

    return loaded === true ? (
        <Main classes="subdeck page">
            {console.log(completeList)}
            <Filters containerClasses="filter__container row justify-end my-2" />
            <InfiniteListTwo 
                classesContainer="subdeck list__content layout layout__1 mb-2" 
                classesElement="card__container"
                classesImages="card__image"
                classesLoaderList="loader__image"
                datas={completeList}
                size={cardsResponse.message[0]}
                numPerPage={10}
                page={page}
                setPage={() => setPage(page + 1)}
                triggerAt={9}
            />
            <Flash 
                classes="message__flash" 
                errorClass="message__flash-error" 
                successClass="message__flash-done" 
                message={flashMessage ? flashMessage : "flash message"}
                timing={750}
                flash={flashState}
                handleFlash= {handleFlash}
            />
        </Main>
    )
    :
    <Loader condition={cardsResponse.code === 200} loaderIcon={RiLoader3Line} setLoaded={setLoaded} />
}

export default AddingSubDecksCardsPage;
