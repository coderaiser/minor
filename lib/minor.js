(function() {
    'use strict';
    
    var MAJOR           = 0,
        MINOR           = 1,
        PATCH           = 2,
        
        assert          = require('assert'),
        
        ERROR_EMPTY     = 'could not be empty!',
        ERROR_TYPE      = 'type could be: "major", "minor" or "patch" only',
        Reg             = /^(major|minor|patch)$/;
    
    module.exports  = function(type, version) {
        var arr;
        
        assert(type, 'type '   + ERROR_EMPTY);
        assert(version, 'version '  + ERROR_EMPTY);
        
        if (!Reg.test(type))
            throw(Error(ERROR_TYPE));
        
        arr = version.split('.');
        
        switch(type) {
        case 'major':
            ++arr[MAJOR];
            arr[MINOR]  = 0;
            arr[PATCH]  = 0;
            break;
            
        case 'minor':
            ++arr[MINOR];
            arr[PATCH]  = 0;
            break;
        
        case 'patch':
            ++arr[PATCH];
            break;
        }
        
        return arr.join('.');
    };
    
})();
