# Code Signing for Windows Auto-Updates

## Current Status

The application is currently **not code-signed**. This means:

- ✅ Updates can be downloaded
- ⚠️ Windows may show security warnings
- ⚠️ Some users may experience update failures due to Windows security policies
- ⚠️ Windows SmartScreen may flag the installer as "Unknown Publisher"

## Why Code Signing is Needed

Windows requires digitally signed executables for:
- Smooth auto-updates without security warnings
- Trust from Windows SmartScreen
- Enterprise deployment
- Better user experience

## Quick Fix (Current Implementation)

The app is configured to:
- Allow unsigned updates to proceed
- Show a warning dialog explaining the situation
- Provide option to download manually if auto-update fails

## Proper Solution: Get a Code Signing Certificate

### Option 1: Purchase a Code Signing Certificate

**Recommended Providers:**
- **DigiCert** - ~$200-400/year (Standard) or ~$400-600/year (EV)
- **Sectigo (formerly Comodo)** - ~$200-300/year
- **GlobalSign** - ~$200-400/year
- **Certum** - ~$200-300/year

**Steps:**
1. Purchase a code signing certificate from a trusted CA
2. Install the certificate on your build machine
3. Configure electron-builder to use it:

```json
{
  "build": {
    "win": {
      "certificateFile": "path/to/certificate.pfx",
      "certificatePassword": "your-password"
    }
  }
}
```

Or use environment variables:
```bash
CSC_LINK=path/to/certificate.pfx
CSC_KEY_PASSWORD=your-password
```

### Option 2: Use Azure Code Signing (Beta)

Microsoft offers cloud-based code signing:
- Configure in `package.json`:
```json
{
  "build": {
    "win": {
      "azureSignOptions": {
        "tenantId": "your-tenant-id",
        "clientId": "your-client-id",
        "clientSecret": "your-client-secret"
      }
    }
  }
}
```

### Option 3: Self-Signed Certificate (Not Recommended)

Self-signed certificates will still trigger warnings and won't solve the problem.

## Configuration After Getting Certificate

1. **Add certificate to package.json:**
```json
{
  "build": {
    "win": {
      "certificateFile": "certificate.pfx",
      "certificatePassword": "${env.CSC_KEY_PASSWORD}"
    }
  }
}
```

2. **Set environment variables:**
```bash
# Windows
set CSC_LINK=path\to\certificate.pfx
set CSC_KEY_PASSWORD=your-password

# Linux/Mac
export CSC_LINK=path/to/certificate.pfx
export CSC_KEY_PASSWORD=your-password
```

3. **Rebuild and republish:**
```bash
npm run build
npx electron-builder --publish=always
```

## Current Workaround

Until a certificate is obtained:
- Users can manually download updates from GitHub releases
- The app will attempt to install unsigned updates with a warning
- Some Windows security policies may still block installation

## Testing Updates

To test the update mechanism:
1. Build and publish a new version
2. Install an older version
3. Launch the app - it should check for updates
4. If update is found, it will show a dialog (with warning if unsigned)

## Resources

- [Electron Builder Code Signing](https://www.electron.build/code-signing.html)
- [Windows Code Signing Best Practices](https://docs.microsoft.com/en-us/windows/win32/seccrypto/cryptography-tools)
- [Code Signing Certificate Providers](https://www.ssl.com/article/code-signing-certificates/)
