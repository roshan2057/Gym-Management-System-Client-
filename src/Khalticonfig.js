


    let config = {
        // replace this key with yours
        "publicKey": "test_public_key_99697f8fd7fc41e8b922cb5f84cf4e82",
        "productIdentity": "1234567890",
        "productName": "Drogon",
        "productUrl": "http://gameofthrones.com/buy/Dragons",
        "eventHandler": {
            onSuccess (payload) {
                // hit merchant api for initiating verfication
                console.log(payload);
            },
            // onError handler is optional
            onError (error) {
                // handle errors
                console.log(error);
            },
            onClose () {
                console.log('widget is closing');
            }
        },
        "paymentPreference": ["KHALTI","MOBILE_BANKING"],
    };
    

export default config();