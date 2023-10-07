exports.config = {

    runner: 'local',

    user: 'Victor',
    key: '482a10cb-12c9-48da-ab92-3fae12ddcd39',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    region: 'us',
   
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,

    capabilities: [{

        platformName: 'Android',
        'appium:app': 'storage:filename=wcandroid-7.3.1.apk', // The filename of the mobile app
        //'appium:deviceName': 'Android GoogleAPI Emulator',  // Emulador
        // 'appium:platformVersion': '12.0',                  // Versão do emulador   
        'appium:deviceName': 'Samsung Galaxy S9',             // Dispositivo real
        'appium:automationName': 'UiAutomator2',
        'sauce:options': {
            build: 'appium-build-1ZXR0',
            name: 'EBAC mobile test',
            deviceOrientation: 'PORTRAIT',
        },
    }],

   
    logLevel: 'info',
       
    waitforTimeout: 10000,
   
    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,
    
    services: ['sauce'],

    framework: 'mocha',
   
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
   
}
