import { enviroment } from "../configs/app.config";

export const getToken = (): string | null => {
    return localStorage.getItem(`${enviroment.applicationName}-card`);
};

export const setToken = (partner: string) => {
    localStorage.setItem(`${enviroment.applicationName}-card`, JSON.stringify(partner));
};