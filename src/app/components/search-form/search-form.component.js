"use strict";

angular
    .module("giphy-finder")
    .component("searchForm", {
        templateUrl: "./src/app/components/search-form/search-form.template.html",
        controller: SearchFormController
    });

    SearchFormController.$inject = ['SearchForm.Service'];
    

// reference search-form.service and display results in search-form template list

function SearchFormController(searchService) {
    var self = this;
    
    self.searchText = '';
    self.searchResults = []

    self.searchByName = function() {
        searchService.searchGiphys(self.searchText)
            .then(function(res) {
                self.searchResults = res.data.data
                //whatever.downsized_medium.url
                self.searchText = '';
            });
    }
}
    