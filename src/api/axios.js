import axios from 'axios'

export default() => {
    return axios.create({
        withCredentials: false,
        headers: {
            'Accept': 'application/ld+json',
            'Content-Type': 'application/ld+json',
        }
    })
}
