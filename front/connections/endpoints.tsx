import environment from "./environments";

export const endpoints = {
    about: `${environment.base_connection_api}/`,
    bestCattleya: `${environment.base_connection_api}/`,
    cattleyaHall: `${environment.base_connection_api}/`,
    news: `${environment.base_connection_api}/news`,
    events: `${environment.base_connection_api}/eventos?populate=*`,
    contact: `${environment.base_connection_api}/contact`,
};

   
export default endpoints;
