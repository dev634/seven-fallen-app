import React,{useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import { GiStack } from 'react-icons/gi';
import { AiFillDelete } from 'react-icons/ai';
import { RiLoader3Line } from 'react-icons/ri';

/* api */
import {getEden, createEden, deleteEden} from '../api/Eden.jsx';
import {getHolyBook, createHolyBook, deleteHolyBook} from '../api/HolyBook.jsx';
import {getRegister, createRegister, deleteRegister} from '../api/Register.jsx';

/* layouts */
import Layout from '../layouts/Layout';

/* components */
import Button from '../components/Button';
import Loader from '../components/Loader';

const DeckCreate = (props) => {
    const { id } = useParams();
    const [subdecks, setSubDecks] = useState({
        eden: {
            code: null,
            message: null
        },
        register: {
            code: null,
            message: null
        },
        holybook: {
            code: null,
            message: null
        }
    });
    const [loaded, setLoaded] = useState(false);

    const handleClickNav = async (e) => {
        e.preventDefault();
        let response = null;

        if(e.target.id === 'eden'){
            response = await createEden(id);
            setSubDecks({...subdecks, eden: response});
        }

        if(e.target.id === 'register'){
            response = await createRegister(id);
            setSubDecks({...subdecks, register: response});
        }

        if(e.target.id === 'holybook'){
            response = await createHolyBook(id);
            setSubDecks({...subdecks, holybook: response});
        }

        return true;
    }

    const handleDeleteEden = async (e) => {
        e.preventDefault();
        let response = await deleteEden(id);
        if(response.code === 200){
            setSubDecks({...subdecks, eden: {
                code:null,
                message: null
            }});
        }else{
            setSubDecks({...subdecks, eden: response});           
        }

        return true;
    }

    const handleDeleteRegister = async (e) => {
        e.preventDefault();
        let response = await deleteRegister(id);
        if(response.code === 200){
            setSubDecks({...subdecks, register: {
                code:null,
                message: null
            }});
        }else{
            setSubDecks({...subdecks, register: response});           
        }
        return true;
    }

    const handleDeleteHolyBook = async (e) => {
        e.preventDefault();
        let response = await deleteHolyBook(id);
        if(response.code === 200){
            setSubDecks({...subdecks, holybook: {
                code:null,
                message: null
            }});
        }else{
            setSubDecks({...subdecks, holybook: response});           
        }
        return true;
    }
    
    useEffect(async () => {
        let eden = await getEden(id);
        let register = await getRegister(id);
        let holybook = await getHolyBook(id);
        let response = {};

        if(eden.message){
            response = {...response, eden: eden}
        }

        if(register.message){
            response = {...response, register: register}
        }

        if(holybook.message){
            response = {...response, holybook: holybook}
        }

        setSubDecks(response);
    },[]);

    return loaded === true ? (
        <Layout>
            {subdecks.eden.code === 200 ?
                <div className="subdeck__box mb-5">
                    <div className="subdeck__heading py-2">
                        <h4 className="subdeck__type">eden</h4>
                    </div>
                    <div className="subdeck__body row justify-between p-2">
                        <p className="subdeck__infos row align-center">
                            Num cards : {subdecks.eden.message.qty === undefined ? 0 : subdecks.eden.message.qty}
                        </p>
                        <div className="subdeck__icon--list row justify-between">
                            <Link to={`/decks/${id}/eden`}>
                                <GiStack className="subdeck__icon" />
                            </Link>
                            <AiFillDelete className="subdeck__icon" onClick={handleDeleteEden}/>
                        </div>
                    </div>
                </div>
                :
                <Button id="eden" classes="btn mb-3" text="create eden" onClick={handleClickNav} />
            }
            {subdecks.register.code === 200 ?
                <div className="subdeck__box mb-5">
                    <div className="subdeck__heading py-2">
                        <h4 className="subdeck__type">register</h4>
                    </div>
                    <div className="subdeck__body row justify-between p-2">
                        <p className="subdeck__infos  row align-center">
                            Num cards : {subdecks.register.message.qty === undefined ? 0 : subdecks.register.message.qty}
                        </p>
                        <div className="subdeck__icon--list row justify-between">
                            <Link to={`/decks/${id}/register`}>
                                <GiStack className="subdeck__icon" />
                            </Link>
                            <AiFillDelete className="subdeck__icon" onClick={handleDeleteRegister}/>
                        </div>
                    </div>
                </div>
                :
                <Button id="register" classes="btn mb-3" text="create register" onClick={handleClickNav}/>
            }
            {subdecks.holybook.code === 200 ?
                <div className="subdeck__box">
                    <div className="subdeck__heading py-2">
                        <h4 className="subdeck__type">holybook</h4>
                    </div>
                    <div className="subdeck__body row justify-between p-2">
                        <p className="subdeck__infos  row align-center">
                            Num cards : {subdecks.holybook.message.qty === undefined ? 0 : subdecks.holybook.message.qty }
                        </p>
                        <div className="subdeck__icon--list row justify-between">
                            <Link to={`/decks/${id}/holybook`}>
                                <GiStack className="subdeck__icon" />
                            </Link>
                            <AiFillDelete className="subdeck__icon" onClick={handleDeleteHolyBook}/>
                        </div>
                    </div>
                </div>
                :
                <Button id="holybook" classes="btn" text="create holybook" onClick={handleClickNav}/>
            }
        </Layout>
    )
    :
    (
        <Loader condition = { 
                    subdecks.eden.code !== null || 
                    subdecks.register.code !== null ||
                    subdecks.holybook.code !== null 
                }
                setLoaded = {setLoaded}
                loaderIcon = {RiLoader3Line}
        />
    )
}

export default DeckCreate;
