const idGenerator = () => {

        if (window.crypto && window.crypto.randomUUID) {
            return window.crypto.randomUUID();
        }

        return Date.now().toString(18) + Math.random().toString(36).substring(2);

    };

    export default idGenerator;