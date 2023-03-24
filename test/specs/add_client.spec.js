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

    it("Success created", async() => {
        await $('[class=\'clients-add-user-dialog crm-button\']').click();
        await browser.pause(5000);

        const surnameFild = await $('input[formcontrolname="userSurname"]');
        await surnameFild.setValue('Ikramov');

        const nameFild = await $('input[formcontrolname="userName"]');
        await nameFild.setValue('Bakyt')

        const maleOptionRadio = await $('mat-radio-group mat-radio-button div[class="mat-radio-label-content"]');
        await maleOptionRadio.click();

        const emailFild = await $('input[formcontrolname="email"]');
        await emailFild.setValue('bakyt01@gmail.com')

        const phoneNimberFild = await $('input[formcontrolname="phone"]');
        await phoneNimberFild.setValue('996555696222');

        const dataBirthDayFild = await $('input[formcontrolname="birthday"]');
        await dataBirthDayFild.setValue('13/05/2001');
        await browser.pause(2000);

        const saveButton = await $('button[name="save"]');
        await saveButton.click();
        await browser.pause(5000);

        //await browser.alertAccept();
        //await browser.pause(5000);



    })


})