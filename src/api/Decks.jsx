import {serialize} from '../utilities/serialize.js';

async function getAllDecks(){

    let settings = {
        method: 'GET',
        credentials: 'include'
    };

    let response = await fetch('https://test-seven.site/api/decks/shared', settings);
    let datas = await response.json();
    return datas;
}

async function getUserDecks(options){
    let settings = {
        method: 'GET',
        credentials: 'include'
    };
    let url = new URL('https://test-seven.site/api/decks');

    let params = {
        page: options.page ? options.page : 1, 
        size: options.size ? options.size : 10,
        sens: options.sens ? options.sens : 'asc',
        order_by: options.order_by ? options.order_by : 'id'
    };

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    let response = await fetch(url, settings);
    let datas = await response.json();
    return datas;
    
}

async function getDecksByKingdoms(options){
    let form = new FormData();
    let kingdoms = await serialize(options.kingdoms);
    form.append('kingdoms', kingdoms);
    let settings = {
        method: 'POST',
        credentials: 'include',
        body: form
    };

    let url = new URL('https://test-seven.site/api/decks/kingdoms');

    let params = {
        mode: options.mode ? options.mode : "",
        page: options.page ? options.page : 1, 
        size: options.size ? options.size : 10,
        sens: options.sens ? options.sens : 'asc',
        order_by: options.order_by ? options.order_by : 'id'
    };

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    let response = await fetch(url, settings);
    let datas = await response.json();
    return datas;
}

async function getOne(id){
    let settings = {
        method: 'GET',
        credentials: 'include',
    };

    let response = await fetch(`https://test-seven.site/api/decks/${id}`, settings);
    let datas = await response.json();
    return datas;
}

async function createUserDeck(form){

    let settings = {
        method: 'POST',
        credentials: 'include',
        body: form
    };

    let response = await fetch('https://test-seven.site/api/decks/add', settings);
    let datas = response.json();
    return datas;
}

async function updateOne(form, id){

    let settings = {
        method: 'PATCH',
        credentials: 'include',
        body: form
    };

    let response = await fetch(`https://test-seven.site/api/decks/update/${id}`, settings);
    let datas = await response.json();
    return datas;

}

async function deleteUserDeck(id){
    let settings = {
        method: 'DELETE',
        credentials: 'include'
    };

    let response = await fetch(`https://test-seven.site/api/decks/delete/${id}`, settings);
    let datas = await response.json();
    return datas;

}

export { getAllDecks, getDecksByKingdoms, getUserDecks, getOne, updateOne, deleteUserDeck, createUserDeck };