//COVERAGE_TAG: GET /dokan/v1/products/summary
//COVERAGE_TAG: GET /dokan/v1/products/top_rated
//COVERAGE_TAG: GET /dokan/v1/products/best_selling
//COVERAGE_TAG: GET /dokan/v1/products/featured
//COVERAGE_TAG: GET /dokan/v1/products/latest
//COVERAGE_TAG: GET /dokan/v1/products/multistep-categories
//COVERAGE_TAG: GET /dokan/v1/products
//COVERAGE_TAG: GET /dokan/v1/products/(?P<id>[\d]+)
//COVERAGE_TAG: GET /dokan/v1/products/(?P<id>[\d]+)/related
//COVERAGE_TAG: POST /dokan/v1/products
//COVERAGE_TAG: PUT /dokan/v1/products/(?P<id>[\d]+)
//COVERAGE_TAG: DELETE /dokan/v1/products/(?P<id>[\d]+)
//COVERAGE_TAG: GET /dokan/v2/products/summary
//COVERAGE_TAG: GET /dokan/v2/products/top_rated
//COVERAGE_TAG: GET /dokan/v2/products/best_selling
//COVERAGE_TAG: GET /dokan/v2/products/featured
//COVERAGE_TAG: GET /dokan/v2/products/latest
//COVERAGE_TAG: GET /dokan/v2/products/multistep-categories
//COVERAGE_TAG: GET /dokan/v2/products
//COVERAGE_TAG: GET /dokan/v2/products/(?P<id>[\d]+)
//COVERAGE_TAG: GET /dokan/v2/products/(?P<id>[\d]+)/related
//COVERAGE_TAG: POST /dokan/v2/products
//COVERAGE_TAG: PUT /dokan/v2/products/(?P<id>[\d]+)
//COVERAGE_TAG: DELETE /dokan/v2/products/(?P<id>[\d]+)

import { test, expect } from '@playwright/test';
import { ApiUtils } from '@utils/apiUtils';
import { endPoints } from '@utils/apiEndPoints';
import { payloads } from '@utils/payloads';

const versions = ['v1', 'v2'];

for (const version of versions) {
    test.describe(`product api test ${version}`, () => {
        let apiUtils: ApiUtils;
        let productId: string;

        test.beforeAll(async ({ request }) => {
            apiUtils = new ApiUtils(request);
            [, productId] = await apiUtils.createProduct(payloads.createProduct());
        });

        test('get products summary @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getProductsSummary.replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('get top rated products @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getTopRatedProducts.replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('get best selling products @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getBestSellingProducts.replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('get featured products @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getFeaturedProducts.replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('get latest products @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getLatestProducts.replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('get all multiStep categories @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getAllMultiStepCategories.replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('get all products @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getAllProducts.replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('get single product @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getSingleProduct(productId).replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('get all related products @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getAllRelatedProducts(productId).replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('create a product @lite', async () => {
            const [response, responseBody] = await apiUtils.post(endPoints.createProduct.replace('v1', version), { data: payloads.createProduct() });
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('update a product @lite', async () => {
            const [response, responseBody] = await apiUtils.put(endPoints.updateProduct(productId).replace('v1', version), { data: payloads.updateProduct() });
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('delete a product @lite', async () => {
            const [response, responseBody] = await apiUtils.delete(endPoints.deleteProduct(productId).replace('v1', version));
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });

        test('get filtered products @v2 @lite', async () => {
            const [response, responseBody] = await apiUtils.get(endPoints.getAllProducts.replace('v1', version), { params: payloads.filterParams });
            expect(response.ok()).toBeTruthy();
            expect(responseBody).toBeTruthy();
        });
    });
}
