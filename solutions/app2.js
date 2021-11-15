'use strict';

const cookieHandler = {
    getAll() {
        return document.cookie.split('; ')
            .reduce(
                (prev,curr)=> (prev[ curr.split('=')[0] ] = curr.split('=')[1]) && prev,
                {}
            );
    },
    toSessionStorage() {
        let allCookie = cookieHandler.getAll();
        for (let k in allCookie) {
            sessionStorage.setItem( k, allCookie[k] );
        }
    },
    flush() {
        let allCookie = cookieHandler.getAll();
        for (let k in allCookie) {
            document.cookie = `${k}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        }
    }

}

export { cookieHandler };