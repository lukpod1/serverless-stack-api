export const handler = (lambda) => {
    return async (event, context) => {
        let body, statusCode;

        try {
            body = await lambda(event, context);
            statusCode = 200;
        } catch (error) {
            body = { error: error.message };
            statusCode = 500;
        }

        return {
            statusCode,
            body: JSON.stringify(body),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
        }
    }
}