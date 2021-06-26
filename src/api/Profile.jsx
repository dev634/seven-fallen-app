async function getProfile(){
    let settings = {
        method : 'GET',
        credentials: 'include'
    }

    let response = await fetch(`https://test-seven.site/api/profile`, settings);
    let datas = response.json();
    return datas;
}

async function updateProfile(form){
    let settings = {
        method: 'PATCH',
        credentials: 'include',
        body: form
    }

    let response = await fetch('https://test-seven.site/api/profile', settings);
    let datas = await response.json();
    return datas;
}

async function deleteProfile(){
    let settings = {
        method: 'DELETE',
        credentials: 'include',
    }

    let response = await fetch('https://test-seven.site/api/profile', settings);
    let datas = await response.json();
    return datas;
}

async function getAvatar(){
    let settings = {
        method: 'GET',
        credentials: 'include'
    }

    let response = await fetch('https://test-seven.site/api/profile/avatar', settings);
 
}

async function addAvatar(){
    let settings = {
        method : 'PATCH',
        credentials: 'include'
    }    
}

async function deleteAvatar(){
    let settings = {
        method : 'PATCH',
        credentials: 'include'
    } 
}

async function updateAvatar(){
    let settings = {
        method : 'PATCH',
        credentials: 'include'
    }
}

export {getProfile, updateProfile, deleteProfile, getAvatar, addAvatar, updateAvatar , deleteAvatar}