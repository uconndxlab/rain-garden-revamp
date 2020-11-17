# Rain Garden App
wip


## Local Development Instructions
We're using the firebase emulators for local development. The emulator runs local instances of Firestore, Cloud Functions, and Firebase Hosting. 

```bash
# 1. Typescript and Firebase Tools installed globally
npm install typescript@latest firebase-tools@latest --global

# 2. Install dependencies
npm install

# 3. Compile Typescript Functions & Run the Firebase Emulators
npm run dev
```

### Helpful Tips

* Use `Ctrl+C` to kill the emulators.
* If you make changes to the Typescript code, you will need to recompile your `*.ts` files in order for the emulator functions to update.
