import axios from 'axios';


const instance=axios.create({
    baseURL : 'https://tony-react-my-burger.firebaseio.com' //?auth=AAAA4MROnDk:APA91bFnvBZpBz9vNZEfaG2iuJzrikyw3JMr2r8N6CUck56TBeOKCpqSpWgF9RR-KHnoFZDck-FEA5A8F6Wjy-cutzR7qhjW8-QbiBUxu1E0eGIEtSaHMpJB6SKWnI6Nk4m1rpNBJ_I5'
    //?auth=JKW4K9ehMLAJYWrJ69YeTKUYsgx1m6yVXIw9nDJM'
    //?auth=AIzaSyDE6Ci8FCQlCzRigqG_w4TLFp7U9xqUu9Y'
});


//instance.defaults.header=http://localhost:3000";
//instance.defaults.headers.post['Access-Control-Allow-Origin']='*';

export default instance;