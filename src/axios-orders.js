import axios from 'axios';

const instance=axios.create({
    baseURL : 'https://tony-react-my-burger.firebaseio.com/?auth=AIzaSyDE6Ci8FCQlCzRigqG_w4TLFp7U9xqUu9Y'
});


export default instance;