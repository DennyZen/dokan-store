//COVERAGE_TAG: GET /dokan/v1/settings
//COVERAGE_TAG: PUT /dokan/v1/settings

import { test, expect } from '@playwright/test';
import { ApiUtils } from '@utils/apiUtils';
import { endPoints } from '@utils/apiEndPoints';
import { payloads } from '@utils/payloads';
import { schemas } from '@utils/schemas';

test.describe('settings api test', () => {
    let apiUtils: ApiUtils;

    test.beforeAll(({ request }) => {
        apiUtils = new ApiUtils(request);
    });

    test('get settings @lite', async () => {
        const [response, responseBody] = await apiUtils.get(endPoints.getSettings);
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
        // expect(responseBody).toMatchSchema(schemas.settingsSchema.storeSettingsSchema);
    });

    test('update settings @lite', async () => {
        const [response, responseBody] = await apiUtils.put(endPoints.updateSettings, { data: payloads.updateSettings });
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
        // expect(responseBody).toMatchSchema(schemas.settingsSchema.setStoreSchema);
    });
});
