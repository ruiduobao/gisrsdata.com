---
title: "ASTER L1T Radiance"
date: 2026-11-03 12:00:00
---

# ASTER L1T Radiance

Original name: ASTER L1T Radiance

## What this dataset is

Note: there is a gap in data collection between November 28, 2024 and January 16, 2025 due to technical issues with the ASTER instrument. See the USGS [announcement](https://lpdaac.usgs.gov/news/aster-resumes-limited-operations/) for more information.

ASTER (Advanced Spaceborne Thermal Emission and Reflection Radiometer) is a multispectral imager launched on NASA's Terra spacecraft in December 1999. It collects data in 14 spectral bands from the visible to the thermal infrared; each scene covers 60 × 60 km. The scenes in this collection, produced by the USGS, contain calibrated at-sensor radiance, ortho-rectified and terrain corrected.

Not all 14 bands were collected in every scene — the asset property ORIGINAL_BANDS_PRESENT lists the bands present in each scene. To convert digital numbers (DN) to at-sensor radiance, use the unit conversion coefficients in the metadata; see the [ASTER L1T Product Users' Guide](https://lpdaac.usgs.gov/documents/647/AST__L1T_User_Guide_V3.pdf) and the [ASTER L1T Product Specification](https://lpdaac.usgs.gov/documents/300/ASTER_L1T_Product_Specification.pdf) for details.

## Coverage and time range

- Coverage: Global (scenes of 60 × 60 km)
- Time range: 2000-03-04 至 2025-12-08

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| B01 | VNIR_Band1 (visible green/yellow) | 15 | 0.520-0.600&mu;m |
| B02 | VNIR_Band2 (visible red) | 15 | 0.630-0.690&mu;m |
| B3N | VNIR_Band3N (near infrared, nadir pointing) | 15 | 0.780-0.860&mu;m |
| B04 | SWIR_Band4 (short-wave infrared) | 30 | 1.600-1.700&mu;m |
| B05 | SWIR_Band5 (short-wave infrared) | 30 | 2.145-2.185&mu;m |
| B06 | SWIR_Band6 (short-wave infrared) | 30 | 2.185-2.225&mu;m |
| B07 | SWIR_Band7 (short-wave infrared) | 30 | 2.235-2.285&mu;m |
| B08 | SWIR_Band8 (short-wave infrared) | 30 | 2.295-2.365&mu;m |
| B09 | SWIR_Band9 (short-wave infrared) | 30 | 2.360-2.430&mu;m |
| B10 | TIR_Band10 (thermal infrared) | 90 | 8.125-8.475&mu;m |
| B11 | TIR_Band11 (thermal infrared) | 90 | 8.475-8.825&mu;m |
| B12 | TIR_Band12 (thermal infrared) | 90 | 8.925-9.275&mu;m |
| B13 | TIR_Band13 (thermal infrared) | 90 | 10.250-10.950&mu;m |
| B14 | TIR_Band14 (thermal infrared) | 90 | 10.950-11.650&mu;m |

## What you can use it for

- Multispectral analysis across visible, near-infrared, shortwave and thermal infrared
- Surface temperature and thermal anomaly studies with the TIR bands
- Geology and mineral mapping with the SWIR bands

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('ASTER/AST_L1T_003');
```

- Earth Engine ID: `ASTER/AST_L1T_003`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ASTER_AST_L1T_003
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/72/AST_L1T_ATBD.pdf)
* [User's Guide](https://lpdaac.usgs.gov/documents/647/AST__L1T_User_Guide_V3.pdf)
* [ASTER Level-1T Product Specification](https://lpdaac.usgs.gov/documents/300/ASTER_L1T_Product_Specification.pdf)
* [ASTER L1T Quick Reference Guide](https://lpdaac.usgs.gov/documents/174/AST_L1T_Quick_Reference_Guide.pdf)

## License and citation

- License: proprietary
- Keywords: aster, eos, imagery, nasa, nir, radiance, satellite-imagery, swir, terra, thermal, tir, toa, usgs, vnir
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/ASTER/AST_L1T.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Landsat 8 Level 2 Surface Reflectance and Surface Temperature](/en/pages/778e3960/)
- [Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA)](/en/pages/07bc7cbd/)
- [Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR)](/en/pages/0620c27d/)
- [Sentinel-1 SAR GRD: C-band Ground Range Detected (log scaling)](/en/pages/5986ee6b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
