(function() {
    'use strict';
    
    var MAJOR   = 0,
        MINOR   = 1,
        PATCH   = 2;
    
    
    module.exports          = minor;
    module.exports.update   = update;
    
    function minor(type, version) {
        var arr = version.split('.');
        
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
    }
    
    function update(version, dir, callback) {
        var json,
            mmpRegExp   = /major|minor|patch/,
            vRegExp     = /^v/,
            info,
            
            fs          = require('fs'),
            Util        = require('util-io'),
            
            error       = Util.exec.try(function() {
                info    = require(process.cwd() + '/package');
            });
        
        if (!callback) {
            callback    = dir;
            dir         = process.cwd();
        }
        
        if (error) {
            callback(error);
        } else if (version === 'version') {
            callback(null, 'v' + info.version);
        } else {
            if (mmpRegExp.test(version))
                version = minor(version, info.version);
            
            else if (vRegExp.test(version))
                version = version.slice(1);
            
            if (!version) {
                callback(Error('version is missing'));
            } else {
                info.version    = version;
                json            = JSON.stringify(info, 0, 2) + '\n';
                
                fs.writeFile('package.json', json, callback);
            }
        }
    }
    
})();
