import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
    try{
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    if(!res.ok){
        throw new Error('Failed to fetch');
    }
    const data = await res.json();
    return data;
}catch (error){
    console.error('error in makePaymentRequest')
}
};
