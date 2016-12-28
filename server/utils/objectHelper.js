'use strict';

module.exports = {
    getChangedProperties: (source, dest) => {
    	if (null == source || "object" != typeof source) {
            throw new Error('Source object is invalid.');
        };
        
        if( null == dest || "object" != typeof dest)  { 
            throw new Error('Destination object is invalid.')
        };

        var propertiesChanged = Object.create();
        for (var attr in Object.getOwnPropertyNames(source)) {

            if (dest.hasOwnProperty(attr) && source[attr] != dest[attr]) { 
                propertiesChanged[attr] = source[attr];
            }
        }

        return propertiesChanged;
    },

    copyProperties: (source, dest) => {
    	if (null == source || "object" != typeof source) {
            throw new Error('Source object is invalid.');
        };
        
        if ( null == dest || "object" != typeof dest)  { 
            throw new Error('Destination object is invalid.')
        };

        for (var attr in source) {
            dest[attr] = source[attr];
        }
    }
}