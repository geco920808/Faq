var Connection = require('tedious').Connection;  
    var config = {  
        server: 'samm',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'sa', //update me
                password: 'samm'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: false,
            database: 'dicError'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();