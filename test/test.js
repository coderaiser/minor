(function() {
    'use strict';
    
    /*global describe, it */
    
    var should  = require('should'),
        minor   = require('..'),
        VERSION = '1.0.0';
    
    describe('parameters of minor function', function() {
        describe('major', function() {
            it('should increment first number and set to zero others', function() {
                var version = minor('major', VERSION);
                should(version).eql('2.0.0');
            });
        });
        
        describe('minor', function() {
            it('should increment second number and set to zero third', function() {
                var version = minor('minor', VERSION);
                should(version).eql('1.1.0');
            });
        });
        
        describe('patch', function() {
            it('should increment third number', function() {
                var version = minor('patch', VERSION);
                should(version).eql('1.0.1');
            });
        });
    });
    
})();
