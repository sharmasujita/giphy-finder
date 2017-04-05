"use strict";

angular
    .module("giphy-finder")
    .factory("SearchForm.Service", SearchFormService);

SearchFormService.$inject = ['$http', '$log'];

// call api
// user error handling
function SearchFormService($http, logger) {
    return {
        searchGiphys : searchGiphys
    }
    
    function searchGiphys(name) {
        var plusify = name.split(' ').join('+');

        return $http.get('http://api.giphy.com/v1/gifs/search?q=' + plusify + '&api_key=dc6zaTOxFJmzC')
            .then(onSuccess)
            .catch(onFailure);
    }

    function onSuccess(response) {
        return response;
    }

    function onFailure(err) {
        logger.error(err);
    }
};




