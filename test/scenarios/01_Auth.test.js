import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';
import * as schema from '$root/schema/auth.schema';

chai.use(jsonSchema)

describe.only('As a guest, I want to get Auth Token', () => {
    it('Should succesfully get token', async () => {
        const response = await ReqresAPI.auth(data.VALID_AUTH)
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["token"]);
        assert.isString(response.data.token);
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_AUTH_SCHEMA)
    });
});

describe.only('As a guest, I want to get Auth Token', () => {
    it('Should succesfully get token', async () => {
        const response = await ReqresAPI.auth()
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["reason"]);
    });
});