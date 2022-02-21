import React from 'react';

const DataManager = {
    getPosts: async (param, callback) => {
        try {
            let response = await (await fetch(param.url)).json();

            if (!Array.isArray(response))
            {
                response = [response];
            }

            callback({...param, data: response});
        } catch (error) {
            callback({...param, error: error.message});
        }
    }
};

export default DataManager;