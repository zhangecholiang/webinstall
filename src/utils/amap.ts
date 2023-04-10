import AMapLoader from '@amap/amap-jsapi-loader';
import { amapKey } from '@/config';

export function loadAMap() {
  const options = {
    key: amapKey,
    version: "2.0",
    plugins: []
  }
  return AMapLoader.load(options)
}