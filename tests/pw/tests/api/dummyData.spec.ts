//COVERAGE_TAG: GET /dokan/v1/dummy-data/status
//COVERAGE_TAG: POST /dokan/v1/dummy-data/import
//COVERAGE_TAG: DELETE /dokan/v1/dummy-data/clear

import { test, expect } from '@playwright/test';
import { ApiUtils } from '@utils/apiUtils';
import { endPoints } from '@utils/apiEndPoints';
import { payloads } from '@utils/payloads';
import { schemas } from '@utils/schemas';

test.describe('dummy Data api test', () => {
    let apiUtils: ApiUtils;

    test.beforeAll(({ request }) => {
        apiUtils = new ApiUtils(request);
    });

    test('get dummy data status @lite', async () => {
        const [response, responseBody] = await apiUtils.get(endPoints.getDummyDataStatus);
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
        expect(responseBody).toMatchSchema(schemas.dummyDataSchema.dummyDataStatusSchema);
    });

    test('import dummy data @lite', async () => {
        const [response, responseBody] = await apiUtils.post(endPoints.importDummyData, { data: payloads.dummyData });
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
        expect(responseBody).toMatchSchema(schemas.dummyDataSchema.importdummyDataSchema);
    });

    test('clear dummy data @lite', async () => {
        const [response, responseBody] = await apiUtils.delete(endPoints.clearDummyData);
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
        expect(responseBody).toMatchSchema(schemas.dummyDataSchema.cleardummyDataClearSchema);
    });
});
