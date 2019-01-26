const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        mongoose.connect('mongodb://mim:0000@localhost:27017/admin', {
            dbName : 'express',
        }, (error) => {
            if(error)
                console.log('mongodb error : ', error);
            else
                console.log('mongodb conn success!');
        });
    };

    connect();

    mongoose.connection.on('disconnected', (error) => {
        console.log('mongodb retry conn : ', error);
        connect();
    });

    require('./task');
};