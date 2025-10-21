# Instagram Integration Setup Guide

## 🔧 Fix 401 Error - Failed to Generate Access Token

### Step 1: Meta Developer Console Setup

1. Go to https://developers.facebook.com/apps
2. Select your app (or create one)
3. Add **Instagram Basic Display** product

#### Instagram Basic Display Settings:

**Valid OAuth Redirect URIs:**
```
https://dogs-beta-seven.vercel.app/callback/instagram
```

**Important Notes:**
- ✅ Use HTTPS (not http)
- ✅ No trailing slash
- ✅ Must match exactly what your app sends

#### Get Your Credentials:

- **Instagram App ID** → This is your `INSTAGRAM_CLIENT_ID`
- **Instagram App Secret** → This is your `INSTAGRAM_CLIENT_SECRET`

---

### Step 2: Vercel Environment Variables

Go to: **Vercel Dashboard** → **dogs-beta-seven** → **Settings** → **Environment Variables**

Add these variables:

| Variable Name | Value |
|---------------|-------|
| `INSTAGRAM_CLIENT_ID` | Your Instagram App ID from Meta |
| `INSTAGRAM_CLIENT_SECRET` | Your Instagram App Secret from Meta |
| `INSTAGRAM_TOKEN_URL` | `https://api.instagram.com/oauth/access_token` |
| `INSTAGRAM_BASE_URL` | `https://graph.instagram.com` |
| `INSTAGRAM_EMBEDDED_OAUTH_URL` | See below ⬇️ |
| `NEXT_PUBLIC_HOST_URL` | `https://dogs-beta-seven.vercel.app` |

**INSTAGRAM_EMBEDDED_OAUTH_URL:**
```
https://api.instagram.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=https://dogs-beta-seven.vercel.app/callback/instagram&scope=instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments&response_type=code
```

Replace `YOUR_CLIENT_ID` with your actual Instagram App ID.

---

### Step 3: Instagram Account Setup

#### Option A: Development Mode
- Add your Instagram account as a **Test User** in Meta Developer Console
- Instagram **Business Account** required

#### Option B: Live Mode (Recommended)
1. Switch app to **"Live"** mode in Meta Console
2. No test users needed
3. Works with any Instagram Business account

---

### Step 4: Verify Configuration

After setting everything up:

1. **Redeploy** in Vercel (or trigger a new deployment)
2. Wait 2-3 minutes
3. Try connecting Instagram again
4. Check Vercel logs for detailed error messages

---

## 🐛 Common Errors & Fixes

### Error: "redirect_uri_mismatch"
**Fix:** Make sure the URI in Meta Console EXACTLY matches your app's redirect URI

### Error: "invalid_client"
**Fix:** Check your `INSTAGRAM_CLIENT_ID` and `INSTAGRAM_CLIENT_SECRET` in Vercel

### Error: "Invalid platform app"
**Fix:** Make sure Instagram Basic Display is added to your Facebook app

### Error: Code already used
**Fix:** Don't refresh the callback page. Start the connection flow again from the beginning

---

## ✅ Testing Checklist

- [ ] Instagram Basic Display product added to Facebook app
- [ ] Redirect URI set correctly in Meta Console (no trailing slash)
- [ ] All environment variables set in Vercel
- [ ] Environment variables match Meta Console credentials
- [ ] App redeployed after adding environment variables
- [ ] Using Instagram Business account (not personal)
- [ ] Account added as test user (if app in Development mode)

---

## 📞 Still Having Issues?

Check the Vercel logs for specific error messages:
```
🔵 [TOKEN] Response data: { ... }
```

This will show the exact error from Instagram's API.
