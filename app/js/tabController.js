(function () {
    'use strict';

    angular
		.module('leaderboardApp').controller("TabCtrl", function () {
				this.currentTab = 1;
				
		    this.setTab = (tabNumber) => {
					this.currentTab = tabNumber;
				};
				
		})
})();

