import axios from 'axios'

export default axios.create( {
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '73072acdd6654be1a56d228422e0732e'
    }
})