exports.handler = async (event) => {
    const token = event.queryStringParameters.token;
    const data = await verifyToken(token);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  };
  
  const tokens = [
    { id: 1, token: 'abc123', active: true },
    { id: 2, token: 'def456', active: false },
  ];
  
  async function verifyToken(token) {
    const foundToken = tokens.find(t => t.token === token);
    if (foundToken && foundToken.active) {
      return { valid: true, message: 'Token is valid' };
    } else {
      return { valid: false, message: 'Token is invalid or inactive' };
    }
  }
  
  