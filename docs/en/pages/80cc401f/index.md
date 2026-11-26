---
title: "MCD43A3.061 MODIS Albedo Daily 500m"
date: 2026-11-03 12:00:00
---

# MCD43A3.061 MODIS Albedo Daily 500m

Original name: MCD43A3.061 MODIS Albedo Daily 500m

## What this dataset is

The MCD43A3 V6.1 Albedo Model dataset is a daily 16-day
product. It provides both directional hemispherical reflectance
(black sky albedo) and bihemispherical reflectance (white sky albedo)
for each of the MODIS surface reflectance bands (band 1 through
band 7) as well as 3 broad spectrum bands (visible, near infrared,
and shortwave).  Each 500m/pixel daily image is generated using
16 days of data, centered on the given day.  A quality band is
also provided for each of the 10 albedo bands.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 500 m.
- Time range: 2000-02-24 至 2026-10-25

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Albedo_BSA_Band1 | Black-sky albedo for band 1 | 500 | 620-670nm |
| Albedo_BSA_Band2 | Black-sky albedo for band 2 | 500 | 841-876nm |
| Albedo_BSA_Band3 | Black-sky albedo for band 3 | 500 | 459-479nm |
| Albedo_BSA_Band4 | Black-sky albedo for band 4 | 500 | 545-565nm |
| Albedo_BSA_Band5 | Black-sky albedo for band 5 | 500 | 1230-1250nm |
| Albedo_BSA_Band6 | Black-sky albedo for band 6 | 500 | 1628-1652nm |
| Albedo_BSA_Band7 | Black-sky albedo for band 7 | 500 | 2105-2155nm |
| Albedo_BSA_vis | Black-sky albedo for visible brodband | 500 |  |
| Albedo_BSA_nir | Black-sky albedo for NIR broadband | 500 | 858nm |
| Albedo_BSA_shortwave | Black-sky albedo for shortwave broadband | 500 |  |
| Albedo_WSA_Band1 | White-sky albedo for band 1 | 500 | 620-670nm |
| Albedo_WSA_Band2 | White-sky albedo for band 2 | 500 | 841-876nm |
| Albedo_WSA_Band3 | White-sky albedo for band 3 | 500 | 459-479nm |
| Albedo_WSA_Band4 | White-sky albedo for band 4 | 500 | 545-565nm |
| Albedo_WSA_Band5 | White-sky albedo for band 5 | 500 | 1230-1250nm |
| Albedo_WSA_Band6 | White-sky albedo for band 6 | 500 | 1628-1652nm |
| Albedo_WSA_Band7 | White-sky albedo for band 7 | 500 | 2105-2155nm |
| Albedo_WSA_vis | White-sky albedo for visible broadband | 500 |  |
| Albedo_WSA_nir | White-sky albedo for NIR broadband | 500 | 858nm |
| Albedo_WSA_shortwave | White-sky albedo for shortwave broadband | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band1 | BRDF albedo mandatory quality for band 1 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band2 | BRDF albedo mandatory quality for band 2 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band3 | BRDF albedo mandatory quality for band 3 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band4 | BRDF albedo mandatory quality for band 4 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band5 | BRDF albedo mandatory quality for band 5 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band6 | BRDF albedo mandatory quality for band 6 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band7 | BRDF albedo mandatory quality for band 7 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_vis | BRDF albedo mandatory quality for visible broadband | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_nir | BRDF albedo mandatory quality for NIR broadband | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_shortwave | BRDF albedo mandatory quality for shortwave broadband | 500 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MCD43A3');
```

- Earth Engine ID: `MODIS/061/MCD43A3`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD43A3
* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MCD43A3)

## License and citation

- License: proprietary
- Keywords: albedo, black-sky, daily, global, modis, nasa, satellite-imagery, usgs, white-sky
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A3.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km](/pages/18647d64/)
- [MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m](/pages/568e60e0/)
- [MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m](/pages/cc1794f9/)
- [MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m](/pages/f2dfffb1/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
