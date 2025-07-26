# Browser Compatibility Guide

## Authentication Issues with Microsoft Edge

If you're having trouble logging into the admin panel with Microsoft Edge, this is likely due to Edge's enhanced privacy and security features that can interfere with authentication cookies.

### Why This Happens

Microsoft Edge has more aggressive third-party cookie blocking compared to other browsers like Chrome or Brave. Our authentication system (Better Auth) relies on cookies for session management, and Edge may block these cookies in certain configurations.

### Solutions

#### Option 1: Enable Cookies in Microsoft Edge (Recommended)

1. Open Microsoft Edge
2. Click the three dots (⋯) in the top-right corner
3. Go to **Settings** → **Cookies and site permissions** → **Cookies and site data**
4. Make sure **Allow sites to save and read cookie data** is enabled
5. If you have **Block third-party cookies** enabled, add your site to the exceptions:
   - Click **Manage exceptions**
   - Add your domain (e.g., `eastbayblinds.com`)
   - Set it to **Allow**

#### Option 2: Configure Site-Specific Settings

1. Navigate to your login page in Edge
2. Click the lock icon (🔒) or site information icon in the address bar
3. Click **Cookies** 
4. Set **Cookies** to **Allow**
5. Refresh the page and try logging in again

#### Option 3: Disable Enhanced Security (Temporary)

1. Go to **Settings** → **Privacy, search, and services**
2. Under **Security**, temporarily turn off **Enhanced security mode**
3. Try logging in again
4. You can re-enable enhanced security after successful login

#### Option 4: Use a Different Browser (Quick Fix)

If you need immediate access, try using:
- Google Chrome
- Mozilla Firefox  
- Brave Browser
- Safari (on Mac)

### For IT Administrators

If you're managing multiple users who experience this issue:

1. **Group Policy Configuration**: Set up group policies to allow cookies for your authentication domain
2. **Enterprise Browser Management**: Configure Edge browser policies to allow authentication cookies
3. **User Training**: Provide users with the steps above to configure their browsers

### Technical Details

The authentication system uses HTTP-only cookies with the following configuration:
- Cookie name: `better-auth.session_token`
- SameSite: `lax` (for better browser compatibility)
- Secure: `true` (in production)
- HttpOnly: `true` (for security)

### Testing Your Configuration

After making changes:
1. Clear your browser cache and cookies
2. Close and reopen Microsoft Edge
3. Navigate to the login page
4. Try logging in again

### Still Having Issues?

If you continue to experience problems:
1. Check the browser console (F12) for any error messages
2. Try using an incognito/private browsing window
3. Ensure your system date and time are correct
4. Contact your system administrator

### Browser Compatibility Status

| Browser | Status | Notes |
|---------|--------|--------|
| ✅ Chrome | Fully Compatible | Default configuration works |
| ✅ Firefox | Fully Compatible | Default configuration works |
| ✅ Safari | Fully Compatible | Default configuration works |
| ✅ Brave | Fully Compatible | Default configuration works |
| ⚠️ Microsoft Edge | Requires Configuration | May need cookie settings adjusted |
| ❌ Internet Explorer | Not Supported | Please upgrade to a modern browser |

---

*Last updated: January 2025* 