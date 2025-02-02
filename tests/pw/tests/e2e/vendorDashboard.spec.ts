import { test, Page } from '@playwright/test';
import { VendorDashboardPage } from '@pages/vendorDashboardPage';
import { data } from '@utils/testData';

test.describe('Vendor dashboard test', () => {
    let vendor: VendorDashboardPage;
    let vPage: Page;

    test.beforeAll(async ({ browser }) => {
        const vendorContext = await browser.newContext(data.auth.vendorAuth);
        vPage = await vendorContext.newPage();
        vendor = new VendorDashboardPage(vPage);
    });

    test.afterAll(async () => {
        await vPage.close();
    });

    test('vendor dashboard is rendering properly @lite @explo', async () => {
        await vendor.vendorDashboardRenderProperly();
    });
});
