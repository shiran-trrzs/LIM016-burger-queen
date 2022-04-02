import { SortOrdersPipe } from './sort-orders.pipe';

const ordersData = [
    {
        "_id": "623362745f4f1173a3bc9248",
        "userId": "622aac2dd1a4b35c1621500e",
        "client": "Harry",
        "products": [
            {
                "qty": 1,
                "product": {
                    "_id": "622f73b7fdae5851e3ff9bb8",
                    "name": "American coffee",
                    "price": 5,
                    "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/american%20coffee.png?alt=media&token=6460ea7f-b0e7-49d4-baa3-e10ee56167e6",
                    "type": "breakfast",
                    "dateEntry": "2022-03-14T16:56:23.225Z",
                    "createdAt": "2022-03-14T16:56:23.228Z",
                    "updatedAt": "2022-03-14T16:56:23.228Z"
                },
                "_id": "623362745f4f1173a3bc9249"
            }
        ],
        "status": "pending",
        "dateEntry": "2022-03-17T16:31:48.929Z",
        "dateProcessed": "2022-03-17T16:31:48.929Z",
        "createdAt": "2022-03-17T16:31:48.932Z",
        "updatedAt": "2022-03-24T23:11:45.058Z"
    },
    {
        "_id": "623358a44e9deea789252d15",
        "userId": "622aac2dd1a4b35c1621500e",
        "client": "Shiran ",
        "products": [
            {
                "qty": 1,
                "product": {
                    "_id": "622f7685fdae5851e3ff9bbe",
                    "name": "Capuccino",
                    "price": 7,
                    "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/capuccino.png?alt=media&token=253ee6ca-a626-4b96-816e-2f5612054920",
                    "type": "breakfast",
                    "dateEntry": "2022-03-14T17:08:21.353Z",
                    "createdAt": "2022-03-14T17:08:21.353Z",
                    "updatedAt": "2022-03-14T17:08:21.353Z"
                },
                "_id": "623358a44e9deea789252d16"
            }
        ],
        "status": "delivered",
        "dateEntry": "2022-03-17T15:49:56.390Z",
        "dateProcessed": "2022-03-17T15:49:56.390Z",
        "createdAt": "2022-03-17T15:49:56.393Z",
        "updatedAt": "2022-03-25T00:09:28.568Z"
    },
    {
        "_id": "623362235f4f1173a3bc923d",
        "userId": "622aac2dd1a4b35c1621500e",
        "client": "Miley Cyrus",
        "products": [
            {
                "qty": 1,
                "product": {
                    "_id": "622f7657fdae5851e3ff9bbb",
                    "name": "Bottle water 500ml",
                    "price": 5,
                    "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/bottle.png?alt=media&token=e1d43411-72b9-4382-882d-361415a9a98a",
                    "type": "lunch",
                    "dateEntry": "2022-03-14T17:07:35.670Z",
                    "createdAt": "2022-03-14T17:07:35.670Z",
                    "updatedAt": "2022-03-14T17:07:35.670Z"
                },
                "_id": "623362235f4f1173a3bc923f"
            }
        ],
        "status": "delivered",
        "dateEntry": "2022-03-17T16:30:27.049Z",
        "dateProcessed": "2022-03-17T16:30:27.049Z",
        "createdAt": "2022-03-17T16:30:27.059Z",
        "updatedAt": "2022-03-25T00:09:07.821Z"
    },
    {
        "_id": "623359164e9deea789252d21",
        "userId": "622aac2dd1a4b35c1621500e",
        "client": "asumakina",
        "products": [
            {
                "qty": 1,
                "product": {
                    "_id": "622f73b7fdae5851e3ff9bb8",
                    "name": "American coffee",
                    "price": 5,
                    "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/american%20coffee.png?alt=media&token=6460ea7f-b0e7-49d4-baa3-e10ee56167e6",
                    "type": "breakfast",
                    "dateEntry": "2022-03-14T16:56:23.225Z",
                    "createdAt": "2022-03-14T16:56:23.228Z",
                    "updatedAt": "2022-03-14T16:56:23.228Z"
                },
                "_id": "623359164e9deea789252d22"
            }
        ],
        "status": "canceled",
        "dateEntry": "2022-03-17T15:51:50.482Z",
        "dateProcessed": "2022-03-17T15:51:50.482Z",
        "createdAt": "2022-03-17T15:51:50.483Z",
        "updatedAt": "2022-03-24T23:13:10.833Z"
    },
];

const ordersDataOrdered = [
    {
        "_id": "623362745f4f1173a3bc9248",
        "userId": "622aac2dd1a4b35c1621500e",
        "client": "Harry",
        "products": [
            {
                "qty": 1,
                "product": {
                    "_id": "622f73b7fdae5851e3ff9bb8",
                    "name": "American coffee",
                    "price": 5,
                    "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/american%20coffee.png?alt=media&token=6460ea7f-b0e7-49d4-baa3-e10ee56167e6",
                    "type": "breakfast",
                    "dateEntry": "2022-03-14T16:56:23.225Z",
                    "createdAt": "2022-03-14T16:56:23.228Z",
                    "updatedAt": "2022-03-14T16:56:23.228Z"
                },
                "_id": "623362745f4f1173a3bc9249"
            }
        ],
        "status": "pending",
        "dateEntry": "2022-03-17T16:31:48.929Z",
        "dateProcessed": "2022-03-17T16:31:48.929Z",
        "createdAt": "2022-03-17T16:31:48.932Z",
        "updatedAt": "2022-03-24T23:11:45.058Z"
    },
    {
        "_id": "623362235f4f1173a3bc923d",
        "userId": "622aac2dd1a4b35c1621500e",
        "client": "Miley Cyrus",
        "products": [
            {
                "qty": 1,
                "product": {
                    "_id": "622f7657fdae5851e3ff9bbb",
                    "name": "Bottle water 500ml",
                    "price": 5,
                    "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/bottle.png?alt=media&token=e1d43411-72b9-4382-882d-361415a9a98a",
                    "type": "lunch",
                    "dateEntry": "2022-03-14T17:07:35.670Z",
                    "createdAt": "2022-03-14T17:07:35.670Z",
                    "updatedAt": "2022-03-14T17:07:35.670Z"
                },
                "_id": "623362235f4f1173a3bc923f"
            }
        ],
        "status": "delivered",
        "dateEntry": "2022-03-17T16:30:27.049Z",
        "dateProcessed": "2022-03-17T16:30:27.049Z",
        "createdAt": "2022-03-17T16:30:27.059Z",
        "updatedAt": "2022-03-25T00:09:07.821Z"
    },
    {
        "_id": "623359164e9deea789252d21",
        "userId": "622aac2dd1a4b35c1621500e",
        "client": "asumakina",
        "products": [
            {
                "qty": 1,
                "product": {
                    "_id": "622f73b7fdae5851e3ff9bb8",
                    "name": "American coffee",
                    "price": 5,
                    "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/american%20coffee.png?alt=media&token=6460ea7f-b0e7-49d4-baa3-e10ee56167e6",
                    "type": "breakfast",
                    "dateEntry": "2022-03-14T16:56:23.225Z",
                    "createdAt": "2022-03-14T16:56:23.228Z",
                    "updatedAt": "2022-03-14T16:56:23.228Z"
                },
                "_id": "623359164e9deea789252d22"
            }
        ],
        "status": "canceled",
        "dateEntry": "2022-03-17T15:51:50.482Z",
        "dateProcessed": "2022-03-17T15:51:50.482Z",
        "createdAt": "2022-03-17T15:51:50.483Z",
        "updatedAt": "2022-03-24T23:13:10.833Z"
    },
    {
        "_id": "623358a44e9deea789252d15",
        "userId": "622aac2dd1a4b35c1621500e",
        "client": "Shiran ",
        "products": [
            {
                "qty": 1,
                "product": {
                    "_id": "622f7685fdae5851e3ff9bbe",
                    "name": "Capuccino",
                    "price": 7,
                    "image": "https://firebasestorage.googleapis.com/v0/b/burgerland-63cee.appspot.com/o/capuccino.png?alt=media&token=253ee6ca-a626-4b96-816e-2f5612054920",
                    "type": "breakfast",
                    "dateEntry": "2022-03-14T17:08:21.353Z",
                    "createdAt": "2022-03-14T17:08:21.353Z",
                    "updatedAt": "2022-03-14T17:08:21.353Z"
                },
                "_id": "623358a44e9deea789252d16"
            }
        ],
        "status": "delivered",
        "dateEntry": "2022-03-17T15:49:56.390Z",
        "dateProcessed": "2022-03-17T15:49:56.390Z",
        "createdAt": "2022-03-17T15:49:56.393Z",
        "updatedAt": "2022-03-25T00:09:28.568Z"
    },
];

describe('SortOrdersPipe', () => {

    it('create an instance', () => {
      const pipe = new SortOrdersPipe();
      expect(pipe).toBeTruthy();
    });

    it('It must return the orders ordered according to the dates of creation', () => {
        const pipe = new SortOrdersPipe();
        const result = pipe.transform(ordersData);
        expect(result).toEqual(ordersDataOrdered);
    });

    it('It must return the original orders', () => {
        const pipe = new SortOrdersPipe();
        const result = pipe.transform(ordersDataOrdered);
        expect(result).toEqual(ordersDataOrdered);
    });


});