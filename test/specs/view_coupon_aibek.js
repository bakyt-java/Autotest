describe("Add client", () => {
    it("Success login", async() => {
        await browser.url('http://167.114.201.175:5000/login');
        await browser.pause(5000);
        const loginField = await $('input[name="userName"]');
        await loginField.setValue("Admin");
        const passwordField = await $('input.password');
        await passwordField.setValue("Admin@Navi");
        await $('button[type="submit"]').click();
        await browser.pause(5000);
    })

    afterAll(async() => {
        await browser.close();
    });

    it("Success created", async() => {
        await $('[class="crm-navigation__link" href="/coupons"]').click();
        await browser.pause(5000);


        const button = await page.waitForSelector('[class="material-icons"]');
        await button.click();

        const buttonView = await page.waitForSelector('[class="mat-menu-item"]');
        await buttonView.click();


    });
});