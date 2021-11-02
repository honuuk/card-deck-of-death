import Constants from 'expo-constants';

const ENV = {
  dev: {
    API_KEY: Constants.manifest.extra?.API_KEY,
    PROJECT_ID: Constants.manifest.extra?.PROJECT_ID,
    DATABASE_URL: Constants.manifest.extra?.DATABASE_URL,
    APP_ID: Constants.manifest.extra?.APP_ID,
    IOS_AD_UNIT_ID: Constants.manifest.extra?.TEST_IOS_AD_UNIT_ID,
    ANDROID_AD_UNIT_ID: Constants.manifest.extra?.TEST_ANDROID_AD_UNIT_ID,
  },
  staging: {
    API_KEY: Constants.manifest.extra?.API_KEY,
    PROJECT_ID: Constants.manifest.extra?.PROJECT_ID,
    DATABASE_URL: Constants.manifest.extra?.DATABASE_URL,
    APP_ID: Constants.manifest.extra?.APP_ID,
    IOS_AD_UNIT_ID: Constants.manifest.extra?.IOS_AD_UNIT_ID,
    ANDROID_AD_UNIT_ID: Constants.manifest.extra?.ANDROID_AD_UNIT_ID,
  },
  prod: {
    API_KEY: Constants.manifest.extra?.API_KEY,
    PROJECT_ID: Constants.manifest.extra?.PROJECT_ID,
    DATABASE_URL: Constants.manifest.extra?.DATABASE_URL,
    APP_ID: Constants.manifest.extra?.APP_ID,
    IOS_AD_UNIT_ID: Constants.manifest.extra?.IOS_AD_UNIT_ID,
    ANDROID_AD_UNIT_ID: Constants.manifest.extra?.ANDROID_AD_UNIT_ID,
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) return ENV.dev;
  if (env === 'staging') return ENV.staging;
  return ENV.prod;
};

export default getEnvVars;
