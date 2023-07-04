import axios from 'axios'

export default axios.create( {
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '274558aaabf649d796dd7fdebacdb432'
    }
})