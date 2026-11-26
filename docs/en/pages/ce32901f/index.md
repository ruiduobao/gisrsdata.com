---
title: "MOD09GA.005 Terra Surface Reflectance Daily L2G Global 1km and 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD09GA.005 Terra Surface Reflectance Daily L2G Global 1km and 500m [deprecated]

Original name: MOD09GA.005 Terra Surface Reflectance Daily L2G Global 1km and 500m [deprecated]

## What this dataset is

The MODIS Surface Reflectance products
provide an estimate of the surface spectral reflectance as it would be
measured at ground level in the absence of atmospheric scattering or
absorption. Low-level data are corrected for atmospheric gases and
aerosols, yielding a level-2 basis for several higher-order gridded
level-2 (L2G) and level-3 products.

MOD09GA provides Bands
1-7 in a daily gridded L2G product in the Sinusoidal projection,
including 500-meter reflectance values and 1-kilometer observation and
geolocation statistics. 500-m Science Data Sets provided for this
product include reflectance for Bands 1-7, a quality rating,
observation coverage, observation number, and 250-m scan
information. 1-kilometer Science Data Sets provided include number of
observations, quality state, sensor angles, solar angles, geolocation
flags, and orbit pointers.

Bands:

- num_observations_1km: Number of observations, 1km
- state_1km: Reflectance Data State QA
   - Bit 0-1: cloud state bits
      - 00 (0):  clear
      - 01 (1):  cloudy
      - 10 (2):  mixed
      - 11 (3):  not set, assumed clear
   - Bit 2: cloud shadow data (1 = yes)
   - Bit 3-5: land/water flag
      - 000 (0):  shallow ocean
      - 001 (1):  land
      - 010 (2):  ocean coastlines and lake shorelines
      - 011 (3):  shallow inland water
      - 100 (4):  ephemeral water
      - 101 (5):  deep inland water
      - 110 (6):  continental/moderate ocean
      - 111 (7):  deep ocean
   - Bit 6-7: aerosol quantity
      - 00 (0):  climatology
      - 01 (1):  low
      - 10 (2):  average
      - 11 (3):  high
   - Bit 8-9: cirrus detected
      - 00 (0):  none
      - 01 (1):  small
      - 10 (2):  average
      - 11 (3):  high
   - Bit 10: internal cloud algorithm flag data (1 = Cloud)
   - Bit 11: internal fire algorithm flag data (1 = Fire)
   - Bit 12: MOD35 snow/ice flag data (1 = yes)
   - Bit 13: Pixel is adjacent to cloud data (1 = yes)
   - Bit 14: BRDF correction performed data (1 = yes)
   - Bit 15: internal snow mask data (1 = Snow)
- SensorZenith (degrees * 100): sensor zenith angle
- SensorAzimuth (degrees * 100): sensor azimuth angle
- Range (scale 25): pixel to sensor
- SolarZenith (degrees * 100): solar zenith angle
- SolarAzimuth (degrees * 100): solar azimuth angle
- gflags: Geolocation flags
   - Bit 0-2: Fill
   - Bit 3: Sensor range validity flag (0 = Valid)
   - Bit 4: Digital elevation model quality flag (0 = Valid, 1 = Missing/inferior)
   - Bit 5: Terrain data validity (0 = Valid)
   - Bit 6: Ellipsoid intersection flag (0 = Valid intersection, 1 = No intersection)
   - Bit 7: Input data flag (0 = Valid)
- orbit_pnt: Orbit pointer
- granule_pnt: Granule pointer (v6 only)
- num_observations_500m: Number of observations, 500m
- sur_refl_b01: 500m Surface Reflectance Band 1 (620-670 nm)
- sur_refl_b02: 500m Surface Reflectance Band 2 (841-876 nm)
- sur_refl_b03: 500m Surface Reflectance Band 3 (459-479 nm)
- sur_refl_b04: 500m Surface Reflectance Band 4 (545-565 nm)
- sur_refl_b05: 500m Surface Reflectance Band 5 (1230-1250 nm)
- sur_refl_b06: 500m Surface Reflectance Band 6 (1628-1652 nm)
- sur_refl_b07: 500m Surface Reflectance Band 7 (2105-2155 nm)
- QC_500m: 500m Reflectance Band Quality
   - Bit 0-1: MODLAND QA bits
      - 00 (0):  corrected product produced at ideal quality all bands
      - 01 (1):  corrected product produced at less than ideal quality some or all bands
      - 10 (2):  corrected product not produced due to cloud effects all bands
      - 11 (3):  corrected product not produced due to other reasons some or all bands may be fill value [Note that a value of (11) overrides a value of (01)].
   - Bit 2-5: band 1 data quality four bit range
      - 0000 (0): highest quality
      - 1000 (8): dead detector; data interpolated in L1B
      - 1001 (9): solar zenith &ge; 86 degrees
      - 1010 (10): solar zenith &ge; 85 and &lt; 86 degrees
      - 1011 (11): missing input
      - 1100 (12): internal constant used in place of climatological data for at least one atmospheric constant
      - 1101 (13): correction out of bounds pixel constrained to extreme allowable value
      - 1110 (14): L1B data faulty
      - 1111 (15): not processed due to deep ocean or clouds
   - Bit 6-9: band 2 data quality four bit range
   - Bit 10-13: band 3 data quality four bit range
   - Bit 14-17: band 4 data quality four bit range
   - Bit 18-21: band 5 data quality four bit range
   - Bit 22-25: band 6 data quality four bit range
   - Bit 26-29: band 7 data quality four bit range
   - Bit 30: atmospheric correction performed data (1 = yes)
   - Bit 31: adjacency correction performed data (1 = yes)
- obscov_500m (%): Observation coverage, 500m
- iobs_res: Observation number in coarser grid
- q_scan: 250m scan value information
   - Bit 0: missing observation in quadrant 4 [+0.5 row, +0.5 column] data (1 = yes)
   - Bit 1: missing observation in quadrant 3 [+0.5 row, -0.5 column] data (1 = yes)
   - Bit 2: missing observation in quadrant 2 [-0.5 row, +0.5 column]data (1 = yes)
   - Bit 3: missing observation in quadrant 1 [-0.5 row, -0.5 column] data (1 = yes)
   - Bit 4: scan of observation in quadrant 4 [+0.5 row, +0.5 column] data (0 = different, 1 = same)
   - Bit 5: scan of observation in quadrant 3 [+0.5 row, -0.5 column] data (0 = different, 1 = same)
   - Bit 6: scan of observation in quadrant 2 [-0.5 row, +0.5 column] data (0 = different, 1 = same)
   - Bit 7: scan of observation in quadrant 1 [-0.5 row, -0.5 column] data (0 = different, 1 = same)

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2017; resolution: mixed (reflectance 500 m; observation and geolocation statistics 1 km).
- Time range: 2000-02-24 至 2017-03-30

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| num_observations_1km | Number of observations per 1K pixel | 1000 |  |
| state_1km | Reflectance data state QA | 1000 |  |
| SensorZenith | Sensor zenith angle | 1000 |  |
| SensorAzimuth | Sensor azimuth angle | 1000 |  |
| Range | Distance to sensor | 1000 |  |
| SolarZenith | Solar zenith angle | 1000 |  |
| SolarAzimuth | Solar azimuth angle | 1000 |  |
| gflags | Geolocation flags | 1000 |  |
| orbit_pnt | Orbit pointer | 1000 |  |
| num_observations_500m | Number of observations | 500 |  |
| sur_refl_b01 | Surface reflectance for band 1 | 500 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 500 | 841-876nm |
| sur_refl_b03 | Surface reflectance for band 3 | 500 | 459-479nm |
| sur_refl_b04 | Surface reflectance for band 4 | 500 | 545-565nm |
| sur_refl_b05 | Surface reflectance for band 5 | 500 | 1230-1250nm |
| sur_refl_b06 | Surface reflectance for band 6 | 500 | 1628-1652nm |
| sur_refl_b07 | Surface reflectance for band 7 | 500 | 2105-2155nm |
| QC_500m | Surface reflectance quality assurance | 500 |  |
| obscov_500m | Observation coverage percent | 500 |  |
| iobs_res | Observation number in coarser grid | 500 |  |
| q_scan | 250m scan value information | 500 |  |

## What you can use it for

- Surface reflectance and land-cover analysis
- Vegetation and phenology monitoring
- Atmospheric correction research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MOD09GA');
```

- Earth Engine ID: `MODIS/MOD09GA`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA

## License and citation

- License: proprietary
- Keywords: daily, global, mod09ga, modis, satellite-imagery, surface-reflectance, terra, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
