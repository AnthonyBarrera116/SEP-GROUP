// for unit testing the Controller, as it does not return values, but uses requests and responses
module.exports = 
{
    mockRequest: () => 
    {
        const req = {};
        req.body = jest.fn().mockReturnValue(req);
        req.session = jest.fn().mockReturnValue(req);
        //req.params = jest.fn().mockReturnValue(req)
        return req;
    },

    mockResponse: () => 
    {
        const res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        return res;
    }
}