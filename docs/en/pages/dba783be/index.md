---
title: "MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]

Original name: MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]

## What this dataset is

The MCD43A1 V6 Bidirectional Reflectance Distribution
Function and Albedo (BRDF/Albedo) Model Parameters dataset is
a 500 meter daily 16-day product. The Julian date represents
the 9th day of the 16-day retrieval period, and consequently
the observations are weighted to estimate the BRDF/Albedo for
that day. The MCD43A1 algorithm, as is with all combined products,
chooses the best representative pixel from a pool that includes
all the acquisitions from both the Terra and Aqua sensors from
the retrieval period.

The MCD43A1 provides the three model
weighting parameters (isotropic, volumetric, and geometric) for
each of the MODIS bands 1 through 7 and the visible (vis), near
infrared (nir), and shortwave bands used to derive the Albedo
and BRDF products (MCD43A3 and MCD43A4). The Mandatory Quality
layers for each of the 10 bands are supplied as well.

See
[dataset user guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006/mcd43a1_brdif_albedo_model_parameters_product)
for more information.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: 500 m.
- Time range: 2000-02-24 至 2023-02-10

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| BRDF_Albedo_Parameters_Band1_iso | BDRF/Albedo isotropic parameter for band 1 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_vol | BDRF/Albedo volumetric parameter for band 1 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_geo | BDRF/Albedo geometric parameter for band 1 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band2_iso | BDRF/Albedo isotropic parameter for band 2 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_vol | BDRF/Albedo volumetric parameter for band 2 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_geo | BDRF/Albedo geometric parameter for band 2 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band3_iso | BDRF/Albedo isotropic parameter for band 3 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_vol | BDRF/Albedo volumetric parameter for band 3 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_geo | BDRF/Albedo geometric parameter for band 3 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band4_iso | BDRF/Albedo isotropic parameter for band 4 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_vol | BDRF/Albedo volumetric parameter for band 4 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_geo | BDRF/Albedo geometric parameter for band 4 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band5_iso | BDRF/Albedo isotropic parameter for band 5 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_vol | BDRF/Albedo volumetric parameter for band 5 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_geo | BDRF/Albedo geometric parameter for band 5 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band6_iso | BDRF/Albedo isotropic parameter for band 6 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_vol | BDRF/Albedo volumetric parameter for band 6 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_geo | BDRF/Albedo geometric parameter for band 6 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band7_iso | BDRF/Albedo isotropic parameter for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_vol | BDRF/Albedo volumetric parameter for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_geo | BDRF/Albedo geometric parameter for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_vis_iso | BDRF/Albedo isotropic parameter for the visible band | 500 |  |
| BRDF_Albedo_Parameters_vis_vol | BDRF/Albedo volumetric parameter for the visible band | 500 |  |
| BRDF_Albedo_Parameters_vis_geo | BDRF/Albedo geometric parameter for the visible band | 500 |  |
| BRDF_Albedo_Parameters_nir_iso | BDRF/Albedo isotropic parameter for the NIR band | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_vol | BDRF/Albedo volumetric parameter for the NIR band | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_geo | BDRF/Albedo geometric parameter for the NIR band | 500 | 858nm |
| BRDF_Albedo_Parameters_shortwave_iso | BDRF/Albedo isotropic parameter for the shortwave band | 500 |  |
| BRDF_Albedo_Parameters_shortwave_vol | BDRF/Albedo volumetric parameter for the shortwave band | 500 |  |
| BRDF_Albedo_Parameters_shortwave_geo | BDRF/Albedo geometric parameter for the shortwave band | 500 |  |
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
var dataset = ee.ImageCollection('MODIS/006/MCD43A1');
```

- Earth Engine ID: `MODIS/006/MCD43A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A1
* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD43A1)

## License and citation

- License: proprietary
- Keywords: albedo, brdf, daily, global, mcd43a1, modis, nasa, reflectance, satellite-imagery, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)
- [MCD43C3.006 BRDF/Albedo Daily L3 0.05 Deg CMG [deprecated]](/pages/95ebbb0d/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
