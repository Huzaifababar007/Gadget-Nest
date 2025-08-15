import axios from "axios";

const params = {
    headers: {

        Authorization:
            "bearer " + "ccbc56963948a1216c8f5633ce8bffbe14a2585af4d411f56f1c57d2e67953e1904445ad3184c96f21c73a878cab26dc3bcbda297c20c416ff2cfe65c9c702bf72e5d2f55850a408c59176b91efb37d4b7c8a0a8bafb9b80ddcc060480464f3bd596ea3f1d5d7baf99ba3a370d2413e1f3f725bf2df7ae7bc3aef1a184feb36b"
    }
};


export const FetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get("http://localhost:1337" + url, params)
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }

}

export const makePaymentRequest = axios.create({
    baseURL: "http://localhost:1337",
    headers: {
        Authorization:
            "bearer " + "ccbc56963948a1216c8f5633ce8bffbe14a2585af4d411f56f1c57d2e67953e1904445ad3184c96f21c73a878cab26dc3bcbda297c20c416ff2cfe65c9c702bf72e5d2f55850a408c59176b91efb37d4b7c8a0a8bafb9b80ddcc060480464f3bd596ea3f1d5d7baf99ba3a370d2413e1f3f725bf2df7ae7bc3aef1a184feb36b"
    }
})

