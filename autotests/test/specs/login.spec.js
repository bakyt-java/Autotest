describe("Login to Navigator", ()=>{
    it("Success login", async ()=>{
        await browser.url('http://167.114.201.175:5000/login'); 
        await browser.pause(5000);
        const loginField = await $('input[name="userName"]');
        await loginField.setValue("Admin");
        const passwordField = await $('input.password');
        await passwordField.setValue("Admin@Navi");
        await $('button[type="submit"]').click();
        await browser.pause(5000);
    })
})