(function () {
    'use strict';

    angular
		.module('leaderboardApp').controller("TabCtrl", function () {
				this.tab = 1;
			
				
		    this.setTab = (tabNumber) => {
					this.tab = tabNumber;
				};
				
		})
})();

