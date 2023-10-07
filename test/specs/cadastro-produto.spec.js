describe('Cadastro de produto', () => {

    const login = async (username, password) => {
        try {

            // Login app
            let btnContinueWithWordPress = await driver.$("id=com.woocommerce.android:id/button_login_wpcom");
            await btnContinueWithWordPress.click();

            let btnOkPopup = await driver.$("id=android:id/button1");
            await btnOkPopup.click();

            let txtEmailBox = await driver.$("id=com.woocommerce.android:id/input");
            await txtEmailBox.setValue(username);

            let btnContinue = await driver.$("id=com.woocommerce.android:id/login_continue_button");
            await btnContinue.click();

            let txtPwdBox = await driver.$("id=com.woocommerce.android:id/input");
            await txtPwdBox.setValue(password);

            let btnContinue1 = await driver.$("id=com.woocommerce.android:id/bottom_button");
            await btnContinue1.click();

            let btnDone = await driver.$("id=com.woocommerce.android:id/button_primary");
            await btnDone.click();

        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    const openStore = async () => {
        try {

            // Open store
            let btnOpenStore = await driver.$("//android.widget.FrameLayout[@content-desc=\"Products\"]/android.widget.ImageView");
            await btnOpenStore.click();

        } catch (error) {
            console.error('Open store error:', error);
            throw error;
        }
    }

    const addProductNameAndDescription = async (productName, productDescription) => {
        try {
            // Add product
            let btnAddProduct = await driver.$("~Add products");
            await btnAddProduct.click();

            let lblPhysicalProduct = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]");
            await lblPhysicalProduct.click();

            let btnProductName = await driver.$("id=com.woocommerce.android:id/editText");
            await btnProductName.setValue(productName);

            let txtEditProduct = await driver.$("(//android.widget.ImageView[@content-desc=\"Edit product\"])[1]");
            await txtEditProduct.click();

            let txtProductDescription = await driver.$("id=com.woocommerce.android:id/visualEditor");
            await txtProductDescription.setValue(productDescription);

            let btnBack = await driver.$("~Navigate up");
            await btnBack.click();
        }
        catch (error) {
            console.error('Add product error:', error);
            throw error;
        }
    }

    const addProductPrice = async (productPrice, productSalePrice) => {
        try {
            let btnAddPrice = await driver.$("(//android.widget.ImageView[@content-desc=\"Edit product\"])[3]");
            await btnAddPrice.click();

            let txtAddPrice = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText");
            await txtAddPrice.setValue(productPrice);

            let txtAddSalePrice = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText");
            await txtAddSalePrice.setValue(productSalePrice);

            let btnTaxStatus = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageButton");
            await btnTaxStatus.click();

            let optTaxable = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]");
            await optTaxable.click();

            let btnBack1 = await driver.$("~Navigate up");
            await btnBack1.click();
        } catch (error) {
            console.error('Add product price error:', error);
            throw error;
        }
    }

    const addShippingDetails = async (weight, length, width, height) => {
        try {
            let btnAddMoreDetails = await driver.$("id=com.woocommerce.android:id/productDetail_addMoreButton");
            await btnAddMoreDetails.click();

            let optShipping = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]");
            await optShipping.click();

            let txtWeight = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText");
            await txtWeight.setValue(weight);

            let txtLength = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText");
            await txtLength.setValue(length);

            let txtWidth = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText");
            await txtWidth.setValue(width);

            let txtHeight = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.FrameLayout/android.widget.EditText");
            await txtHeight.setValue(height);

            let btnBack2 = await driver.$("~Navigate up");
            await btnBack2.click();

            let btnPublish = await driver.$("id=com.woocommerce.android:id/menu_done");
            await btnPublish.click();

            let btnBack3 = await driver.$("~Navigate up");
            await btnBack3.click();
        }
        catch (error) {
            console.error('Add shipping details error:', error);
            throw error;
        }
    }

    const searchProduct = async (productName) => {
        try {
            let btnSearch = await driver.$("~Search");
            await btnSearch.click();

            let txtSearch = await driver.$("id=com.woocommerce.android:id/search_src_text");
            await txtSearch.setValue(productName);

        } catch (error) {
            console.error('Search product error:', error);
            throw error;
        }
    }

    const assertProduct = async (productName) => {
        try {
            let lblProductName = await driver.$("id=com.woocommerce.android:id/linearLayout");
            console.log(await lblProductName.getText());
            await expect(lblProductName).toHaveValueContaining(productName)
        } catch (error) {
            console.error('Assert product error:', error);
            throw error;
        }
    }


    class Product {
        constructor(productName, productDescription, productPrice, productSalePrice, weight, length, width, height) {
            this.productName = productName;
            this.productDescription = productDescription;
            this.productPrice = productPrice;
            this.productSalePrice = productSalePrice;
            this.weight = weight;
            this.length = length;
            this.width = width;
            this.height = height;

        }
    }

    class Login {
        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
    }

    it('Verificar se um usuário pode cadastrar um produto com informações mínimas', async () => {

        const loginOne = new Login('lojaebacqe@gmail.com', 'GD*peToHNJ1#c$sgk08EaYJQ');
        const productOne = new Product('Caneta Bic', 'Caneta Bic Azul', '4', '3.5', '0.1', '10', '10', '10');

        await login(loginOne.username, loginOne.password);
        await openStore();
        await addProductNameAndDescription(productOne.productName, productOne.productDescription);
        await addProductPrice(productOne.productPrice, productOne.productSalePrice);
        await addShippingDetails(productOne.weight, productOne.length, productOne.width, productOne.height);
        await searchProduct(productOne.productName);
        await assertProduct(productOne.productName);
    });

    it('Verificar se um usuário pode cadastrar um produto com informações mínimas', async () => {
        const loginOne = new Login('lojaebacqe@gmail.com', 'GD*peToHNJ1#c$sgk08EaYJQ');
        const productOne = new Product('Lapiseira', 'Lapiseira de ponta fina', '4', '3.5', '0.1', '10', '10', '10');
        await login(loginOne.username, loginOne.password);
        await openStore();
        await addProductNameAndDescription(productOne.productName, productOne.productDescription);
    });

});