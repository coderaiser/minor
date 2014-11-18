(function() {
    'use strict';
    
    var MAJOR           = 0,
        MINOR           = 1,
        PATCH           = 2,
        
        ERROR_EMPTY     = 'could not be empty!',
        ERROR_TYPE      = 'type could be: "major", "minor" or "patch" only',
        Reg             = /^(major|minor|patch)$/;
    
    module.exports  = function(type, version) {
        var arr;
        
        if (!type)
            throw(Error('type ' + ERROR_EMPTY));
        
        if (!Reg.test(type))
            throw(Error(ERROR_TYPE));
        
        if (!version)
            throw(Error('version ' + ERROR_EMPTY));
            
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
