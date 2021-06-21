import * as Application from 'expo-application';

import db from '../db';

export const getDeviceUniqueId = async () => {
  const androidId = Application.androidId;
  if (androidId) return androidId;

  const iosId = await Application.getIosIdForVendorAsync();
  return iosId || '';
};

export const getDeviceCollection = async () => {
  const deviceUniqueId = await getDeviceUniqueId();
  return db.collection(deviceUniqueId);
};
