
describe('Primeiro teste', () => {

    it('Preenche o formulário', async () => {
        
        // Open form
        await $('~Forms').click();

        // Type text
        let el1 = await driver.$("~text-input");
        await el1.setValue("test");

        // Click switch
        let el2 = await driver.$("~switch");
        await el2.click();
        
        // Open popup
        let el3 = await driver.$("//android.view.ViewGroup[@content-desc=\"Dropdown\"]/android.view.ViewGroup/android.widget.EditText");
        await el3.click();

        // Select option
        let el4 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]");
        await el4.click();

        // Click button OK
        let el6 = await driver.$("~button-Active");
        await el6.click();

        // Verify popup
        let el7 = await driver.$("~android:id/message");
        expect(el7).toBeDisplayed();
        
    });

});