import 'dotenv/config';

export default {
  name: 'card-squat',
  version: '1.0.0',
  extra: {
    API_KEY: process.env.API_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    DATABASE_URL: process.env.DATABASE_URL,
    APP_ID: process.env.APP_ID,
    IOS_AD_UNIT_ID: process.env.IOS_AD_UNIT_ID,
    ANDROID_AD_UNIT_ID: process.env.ANDROID_AD_UNIT_ID,
    TEST_IOS_AD_UNIT_ID: process.env.TEST_IOS_AD_UNIT_ID,
    TEST_ANDROID_AD_UNIT_ID: process.env.TEST_ANDROID_AD_UNIT_ID,
  },
};
