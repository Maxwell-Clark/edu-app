export default defineEventHandler(async (event)=> {
    const body = await readBody(event);
    const { username, password } = body;

    // implement login logic
    let validLogin = false

    if (validLogin) {
        return { status: 'success', token: 'your-auth-token'};
    }
    else {
        // handle invalid attempt
        throw createError({
            statusCode: 401,
            statusMessage: `Invalid username or password ${username} : ${password}`
        })
    }
})