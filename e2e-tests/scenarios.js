describe('Stylist Application', function() {

    describe('stylists', function() {

        beforeEach(function() {
            browser.get('index.html');
        });

        it('should filter the stylists list as a user types into the search box', function() {
            var stylistsList = element.all(by.repeater('stylist in stylists'));
            var query = element(by.model('stylistsController.query'));

            expect(stylistsList.count()).toBe(4);

            query.sendKeys('papy');
            expect(stylistsList.count()).toBe(1);

            query.clear();
            query.sendKeys('p');
            expect(stylistsList.count()).toBe(2);
        });
    });
});