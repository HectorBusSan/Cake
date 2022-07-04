import http from "./../http-common";

class ExplorerServices{
    getAll(){
        return http.get("/usuarios");
    }
}
export default new ExplorerServices();