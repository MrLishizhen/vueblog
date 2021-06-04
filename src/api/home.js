import Axios from '../util/http'

export function nav(){
   return Axios({
        url:'/home/nav',
        methods:'GET',
       loading:false,
    });
}
//banner
export function banner(){
    return Axios({
        url:'/home/banner',
        methods:'GET',
        loading:false
    });
}
export function list(){

}