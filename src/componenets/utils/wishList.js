const getItemForWishList = () => {
    const getWhishlist = localStorage.getItem('wishlist');

    if(getWhishlist) {
        return JSON.parse(getWhishlist);
    }else {
        return [];
    }
}

const addToWishList = (id) => {
    const getWishList = getItemForWishList();

    if(getWishList.includes(id)) {
        console.log('Do not Add this, Already Exist')
    }else {
        getWishList.push(id);
        const storeListStr = JSON.stringify(getWishList);
        localStorage.setItem('wishlist', storeListStr);
    }
}


export {addToWishList, getItemForWishList};