const request = require('supertest');
const app = require('./index');

describe('API endpoints', () => {
    it('should add two numbers', async () => {
        const response = await request(app)
            .post('/api/v1/add')
            .send({ a: 5, b: 3 });
            
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(8);
    });

    it('should subtract two numbers', async () => {
        const response = await request(app)
            .post('/api/v1/subtract')
            .send({ a: 10, b: 4 });
            
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(6);
    });
});
