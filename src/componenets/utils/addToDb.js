import { toast } from 'react-toastify';
const getStoreReadList = () => {
    // read list using local Storage
    const storeListStr = localStorage.getItem('read-list');
    if(storeListStr) {
        const storedList = JSON.parse(storeListStr);
        return storedList;
    }else {
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        toast('Do not Add this, Already Exist');
    }else {
        storedList.push(id);
        const storeListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storeListStr);
        toast('this book is added');
    }
}

export {addToStoreReadList , getStoreReadList};