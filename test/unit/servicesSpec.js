'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('leaderboardApp'));

  // Test service availability
  it('check the existence of playerService factory', inject(function(playerService) {
      expect(playerService).toBeDefined();
    }));
});