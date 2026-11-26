---
title: "VJ114IMGTDL_NRT Daily Raster: VIIRS (NOAA-20) Band 375m Active Fire"
date: 2026-11-03 12:00:00
---

# VJ114IMGTDL_NRT Daily Raster: VIIRS (NOAA-20) Band 375m Active Fire

Original name: VJ114IMGTDL_NRT Daily Raster: VIIRS (NOAA-20) Band 375m Active Fire

## What this dataset is

NOAA-20 (JPSS-1) Visible Infrared Imaging Radiometer Suite (VIIRS) Active Fire detection
product is based on the instrument's 375m nominal resolution data. Compared
to other coarser resolution (&ge; 1km) satellite fire detection products, 
the improved 375 m data provide greater response over fires of relatively
small areas, as well as improved mapping of large fire perimeters.
Consequently, the data are well suited for use in support of fire management
(e.g., near real-time alert systems), as well as other science applications
requiring improved fire mapping fidelity.

The data in the near-real-time dataset are not considered to be of science
quality.

Additional information can be found [here](https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms).

## Coverage and time range

- Coverage: Coverage: global; time span: 2023 to 2026; resolution: 375 m.
- Time range: 2023-10-08 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 375 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Bright_ti4 | VIIRS I-4 channel brightness temperature of the fire pixel. | 375 |  |
| Bright_ti5 | VIIRS I-5 Channel brightness temperature of the fire pixel. | 375 |  |
| confidence | A detection confidence intended to help users gauge the quality of individual active fire pixels. The confidence estimate ranges between 'low': 0, 'nominal': 1 and 'high': 2 for all fire pixels within the fire mask. Low confidence daytime fire pixels are typically associated with areas of Sun glint and lower relative temperature anomaly (&lt;15 K) in the mid-infrared channel I4. Nominal confidence pixels are those free of potential Sun glint contamination during the day and marked by strong (&gt;15 K) temperature anomaly in either day or nighttime data. High confidence fire pixels are associated with day or nighttime saturated pixels.  Please note: Low confidence nighttime pixels occur only over the geographic area extending from 11&deg; E to 110&deg; W and 7&deg; N to 55&deg; S. This area describes the region of influence of the South Atlantic Magnetic Anomaly which can cause spurious brightness temperatures in the mid-infrared channel I4 leading to potential false positive alarms. These have been removed from the NRT data distributed by FIRMS. | 375 |  |
| line_number | Line number in the FIRMS CSV file that the pixel came from. | 375 |  |
| frp | FRP depicts the pixel-integrated fire radiative power in megawatts (MW). Given the unique spatial and spectral resolution of the data, the VIIRS 375m fire detection algorithm was customized and tuned to optimize its response over small fires while balancing the occurrence of false alarms . Frequent saturation of the mid-infrared I4 channel (3.55-3.93 &mu;m) driving the detection of active fires requires additional tests and procedures to avoid pixel classification errors. As a result, sub-pixel fire characterization (e.g., fire radiative power [FRP] retrieval) is only viable across small and/or low-intensity fires. Systematic FRP retrievals are based on a hybrid approach combining 375 and 750m data. | 375 |  |
| acq_epoch | Acquisation timestamp in seconds | 375 |  |
| acq_time | The time of day in seconds since midnight | 375 |  |
| DayNight | 1= Daytime fire, 0= Nighttime fire | 375 |  |

## What you can use it for

- Near real-time fire monitoring and alerting
- Fire management support
- Fire science research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/LANCE/NOAA20_VIIRS/C2');
```

- Earth Engine ID: `NASA/LANCE/NOAA20_VIIRS/C2`
- Providers: NASA / LANCE / NOAA20_VIIRS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_LANCE_NOAA20_VIIRS_C2

## License and citation

- License: proprietary
- Keywords: eosdis, fire, firms, geophysical, hotspot, lance, modis, nasa, thermal, viirs
- 数据引用：NRT VIIRS 375 m Active Fire product VJ114IMGTDL_NRT distributed from NASA
FIRMS. Available on-line https://earthdata.nasa.gov/firms.
[doi:10.5067/FIRMS/VIIRS/VJ114IMGT_NRT.002](https://doi.org/10.5067/FIRMS/VIIRS/VJ114IMGT_NRT.002)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP14IMGTDL_NRT Daily Raster: VIIRS (S-NPP) Band 375m Active Fire](/pages/7cb75763/)
- [FIRMS: Fire Information for Resource Management System](/en/pages/4ae50fa9/)
- [FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1](/en/pages/2a6e2416/)
- [GlobFire Final Fire Event Detection Based on MCD64A1](/en/pages/16d164e6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
