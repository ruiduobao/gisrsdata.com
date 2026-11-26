---
title: "VIIRS Aerosol Optical Depth and Aerosol Particle Size EDRs V3"
date: 2026-11-03 12:00:00
---

# VIIRS Aerosol Optical Depth and Aerosol Particle Size EDRs V3

Original name: VIIRS Aerosol Optical Depth and Aerosol Particle Size EDRs V3

## What this dataset is

The VIIRS Aerosol Optical Depth (AOD) and Aerosol Particle Size (APS)
Environmental Data Records (EDRs) product provides aerosol properties
retrieved from the Visible Infrared Imaging Radiometer Suite (VIIRS) sensor.
The primary product is the AOD at 550 nm, with additional retrievals at
other sensor channels and Angstrom Exponent over oceans. The spatial
resolution is 750 meters.

We project the source rasters into a north-up lat-lon (EPSG:4326) grid using
[GDAL libraries](https://github.com/google/earthengine-catalog/blob/main/pipelines/viirs_aod.py).
Data beyond 85°S and 85°N are excluded to avoid geometric complications
when generating asset footprints for bounds filtering.

For more details and access to raw data, see:

## Coverage and time range

- Coverage: Spatial: global (85°S to 85°N); temporal: 2022 to present; resolution: 750 m.
- Time range: 2022-10-29 至 2026-10-30

## Resolution and specifications

- Spatial resolution: about 750 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| AOD550 | Retrieved aerosol optical depth at 550 nm | 750 |  |
| AOD_channel_M1 | Retrieved aerosol optical depth in sensor channel M1 | 750 | 0.412 &mu;m |
| AOD_channel_M2 | Retrieved aerosol optical depth in sensor channel M2 | 750 | 0.445 &mu;m |
| AOD_channel_M3 | Retrieved aerosol optical depth in sensor channel M3 | 750 | 0.488 &mu;m |
| AOD_channel_M4 | Retrieved aerosol optical depth in sensor channel M4 | 750 | 0.555 &mu;m |
| AOD_channel_M5 | Retrieved aerosol optical depth in sensor channel M5 | 750 | 0.672 &mu;m |
| AOD_channel_M6 | Retrieved aerosol optical depth in sensor channel M6 | 750 | 0.746 &mu;m |
| AOD_channel_M7 | Retrieved aerosol optical depth in sensor channel M7 | 750 | 0.865 &mu;m |
| AOD_channel_M8 | Retrieved aerosol optical depth in sensor channel M8 | 750 | 1.24 &mu;m |
| AOD_channel_M9 | Retrieved aerosol optical depth in sensor channel M9 | 750 | 1.378 &mu;m |
| AOD_channel_M10 | Retrieved aerosol optical depth in sensor channel M10 | 750 | 1.61 &mu;m |
| AOD_channel_M11 | Retrieved aerosol optical depth in sensor channel M11 | 750 | 2.25 &mu;m |
| AngsExp1 | Angstrom Exponent calculated from AOD at M4 and M7 over ocean (M3 and M7 for ABI) | 750 |  |
| AngsExp2 | Angstrom Exponent calculated from AOD at M7 and M10 over ocean | 750 |  |
| SfcRefl_M1 | Surface reflectance of land and ocean for sensor channel M1 | 750 | 0.412 &mu;m |
| SfcRefl_M2 | Surface reflectance of land and ocean for sensor channel M2 | 750 | 0.445 &mu;m |
| SfcRefl_M3 | Surface reflectance of land and ocean for sensor channel M3 | 750 | 0.488 &mu;m |
| SfcRefl_M4 | Surface reflectance of land and ocean for sensor channel M4 | 750 | 0.555 &mu;m |
| SfcRefl_M5 | Surface reflectance of land and ocean for sensor channel M5 | 750 | 0.672 &mu;m |
| SfcRefl_M6 | Surface reflectance of land and ocean for sensor channel M6 | 750 | 0.746 &mu;m |
| SfcRefl_M7 | Surface reflectance of land and ocean for sensor channel M7 | 750 | 0.865 &mu;m |
| SfcRefl_M8 | Surface reflectance of land and ocean for sensor channel M8 | 750 | 1.24 &mu;m |
| SfcRefl_M9 | Surface reflectance of land and ocean for sensor channel M9 | 750 | 1.378 &mu;m |
| SfcRefl_M10 | Surface reflectance of land and ocean for sensor channel M10 | 750 | 1.61 &mu;m |
| SfcRefl_M11 | Surface reflectance of land and ocean for sensor channel M11 | 750 | 2.25 &mu;m |
| SpaStddev | 3 by 3 standard deviation of TOAreflectance at M1/M11 (land/ocean) | 750 |  |
| Residual | Retrieval residual of best solution | 750 |  |
| AOD550LndMdl_Dust | Retrieved AOD at 550nm for the dust land aerosol model | 750 |  |
| AOD550LndMdl_Generic | Retrieved AOD at 550nm for the generic land aerosol model' | 750 |  |
| AOD550LndMdl_Urban | Retrieved AOD at 550nm for the urban land aerosol model | 750 |  |
| AOD550LndMdl_Smoke | Retrieved AOD at 550nm for the smoke land aerosol model | 750 |  |
| ResLndMdl_Dust | Retrieval residual for the dust land aerosol model | 750 |  |
| ResLndMdl_Generic | Retrieval residual for the generic land aerosol model | 750 |  |
| ResLndMdl_Urban | Retrieval residual for the urban land aerosol model | 750 |  |
| ResLndMdl_Smoke | Retrieval residual for the smoke land aerosol model | 750 |  |
| FineMdlIdx | Index of fine mode aerosol model over ocean | 750 |  |
| CoarseMdlIdx | Index of coarse mode aerosol model over ocean | 750 |  |
| FineModWgt | Fine mode weight over ocean | 750 |  |
| AerMdl | Aerosol model selected from prescribed models during the retrieval:  * 0: oceanic aerosol * 1: dust over land * 2: generic aerosol over land * 3: urban aerosol over land * 4: smoke over land | 750 |  |
| QCAll | Overall quality flag for aerosol optical depth retrieval:  * 0: high quality * 1: medium quality * 2: low quality * 3: no retrieval | 750 |  |
| QCAE | Overall quality flag for Angstrom Exponent retrieval over ocean:  * 0: high quality * 1: medium quality * 2: low quality * 3: no retrieval | 750 |  |
| QCExtn | Quality flag describing the external (or input) masks. For each "yes/no" bit, a "yes" value indicates the presence of that mask. | 750 |  |
| QCTest | Quality flag describing internal tests for specific conditions that may impact or hinder AOD computation. For each "yes/no" bit, a "yes" value indicates presence of the feature being tested. | 750 |  |
| QCInput | Quality flag describing the types of bad inputs that impact or hinder AOD computation.. For each "yes/no" bit, a "yes" value indicates that the input has the specified problem. | 750 |  |
| QCPath | Quality flag describing the retrieval paths/schemes. For each "yes/no" bit, a "yes" value indicates the presence of that feature. | 750 |  |
| QCRet | Quality flag describing problems arising from data retrieval that may impact or hinder AOD computation. For each "yes/no" bit, a "yes" value indicates that retrieval failed for that reason. | 750 |  |

## What you can use it for

- Monitor regional and global aerosol optical depth for air-quality and climate studies.
- Analyse transport of dust, smoke and other aerosol events.
- Validate aerosol simulations in chemical transport models.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/AOD_EDR/V3');
```

- Earth Engine ID: `NOAA/VIIRS/AOD_EDR/V3`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_AOD_EDR_V3
* [JPSS Aerosols page](https://www.star.nesdis.noaa.gov/jpss/aerosols.php)
* [Algorithm Theoretical Basis Document](https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Aerosol_AOD_v3.4.pdf)
* [Google Cloud JPSS main page](https://console.cloud.google.com/marketplace/product/noaa-public/noaa-jpss)

## License and citation

- License: proprietary
- Keywords: aerosol, aod, atmosphere, noaa, viirs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AERDB_D3_VIIRS_NOAA20.002: VIIRS/NOAA-20 Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002: VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/64c851e2/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
