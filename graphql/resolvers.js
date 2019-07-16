var fakeDatabase = require('./fakedata.js');
const RESOLVERS = {
    Query: {
        user(_, { id }) {
            const data = Object.keys(fakeDatabase).filter(ele => {
                if (fakeDatabase[ele].id == id) {
                    return ele;
                }
            });
            return fakeDatabase[data];
        },
        allUser() {
            return fakeDatabase;
        }
    }
};
module.exports = RESOLVERS;