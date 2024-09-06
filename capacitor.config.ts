import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'com.bcbsm.mma',
  appName: 'BCBSM',
  bundledWebRuntime: false,
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
    Keyboard: {
      resize: KeyboardResize.Ionic,
    },
    PushNotifications: {
      presentationOptions: ['alert', 'sound'],
    },
    CapacitorHttp: {
      enabled: true,
    },
    CapacitorCookies: {
      enabled: true
    }
  }
};

export default config;

