import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'https://dev.parking-rue-du-moulin.fr/recup/public/api_reservation',
        withCredentials: false,
        headers: {
            'Accept': 'application/ld+json',
            'Content-Type': 'application/ld+json',
        }
    })
}
