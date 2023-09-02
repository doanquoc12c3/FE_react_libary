export const oktaConfig = {
    clientId:'0oab34t6k4UyMtqwl5d7',
    issuer:'http://dev-99102723.okta.com/oauth2/default',
    redirectUri:'http://localhost:3000/login/callback',
    scopes:['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}