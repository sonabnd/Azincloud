export enum Routes {
    default = '/',
    home = '/',
    about = '/about',
    contact = '/contact',
    news = '/news',
    blog = '/blogs',
    newsDetails = '/details/:id',
    partners = '/partners/:id',
    products = '/products',
    search = '/search'
}


export const goTo = (route: string, param: string | number) => {
    return route + '/' + param;
};

export const goToWithQuery = (route: string, param: any) => {
    let path = route + '?';
    if (param)
        for (const key in param) {
            if (path.substr(path.length - 1) !== '?')
                path += '&';
            path += key + '=' + param[`${key}`];
        }
    return path;
};
