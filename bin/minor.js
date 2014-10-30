#!/usr/bin/env node

(function() {
    'use strict';
    
    var minor       = require('../lib/minor'),
        args        = process.argv.slice(2),
        arg         = args[0],
        version;
        
        if (!arg) {
           console.log('minor <version>');
        } else if (arg === '-v' || arg === '--v') {
            version = require('../package').version;
            console.log('v' + version);
       } else {
            minor.update(arg, function(error, data) {
                if (error)
                    console.error(error.message);
                else if (data)
                    console.log(data);
            });
       }
})();
