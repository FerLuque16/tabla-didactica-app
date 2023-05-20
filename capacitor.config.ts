import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'TablaDidacticaApp',
  appName: 'Tabla didactica',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    SplashScreen:{
      launchShowDuration: 1000
    }
  }
};

export default config;
