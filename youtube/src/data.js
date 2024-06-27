 export const API_KEY = 'AIzaSyAd5hK0RtN5_dauREKpKhGtC0B2wEWXc6g'


 export const value_conveter =(value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M" 
    }
    else if (value>=1000){
        return Math.floor(value/1000)+"k"
    }
    else{
        return value;
    }
 }