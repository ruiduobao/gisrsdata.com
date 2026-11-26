---
title: "MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG"
date: 2026-11-03 12:00:00
---

# MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG

Original name: MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG

## What this dataset is

The MYD09CMG Version 6.1 product provides an estimate of the surface
spectral reflectance of Aqua Moderate Resolution Imaging Spectroradiometer
(MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and
corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh
scattering. The MYD09CMG data product provides 25 layers including MODIS
bands 1 through 7; Brightness Temperature data from thermal bands 20, 21,
31, and 32; along with Quality Assurance (QA) and observation bands.
This product is based on a Climate Modeling Grid (CMG) for use in climate
simulation models.

This dataset has a striping issue originating from Band 5’s dead
detector 20. The MYD09/Band 5 show the dead detector striping in band 5, but
it has been properly flagged in the QA layer. The science team has been
notified and the issue will be addressed in the Collection 7.
More details can be found on
[the known issue page](https://landweb.modaps.eosdis.nasa.gov/displayissue?id=939).

Note that scale factors and offsets described in the MODIS documentation
for MYD09CMG bands are already applied to assets ingested into Earth
Engine.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2026; resolution: 5,600 m.
- Time range: 2002-07-04 至 2026-10-31

## Resolution and specifications

- Spatial resolution: about 5,600 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Coarse_Resolution_Surface_Reflectance_Band_1 | Surface reflectance for band 1 | 5600 | 620-670nm |
| Coarse_Resolution_Surface_Reflectance_Band_2 | Surface reflectance for band 2 | 5600 | 841-876nm |
| Coarse_Resolution_Surface_Reflectance_Band_3 | Surface reflectance for band 3 | 5600 | 459-479nm |
| Coarse_Resolution_Surface_Reflectance_Band_4 | Surface reflectance for band 4 | 5600 | 545-565nm |
| Coarse_Resolution_Surface_Reflectance_Band_5 | Surface reflectance for band 5 | 5600 | 1230-1250nm |
| Coarse_Resolution_Surface_Reflectance_Band_6 | Surface reflectance for band 6 | 5600 | 1628-1652nm |
| Coarse_Resolution_Surface_Reflectance_Band_7 | Surface reflectance for band 7 | 5600 | 2105-2155nm |
| Coarse_Resolution_Solar_Zenith_Angle | Solar Zenith Angle | 5600 |  |
| Coarse_Resolution_View_Zenith_Angle | View Zenith Angle | 5600 |  |
| Coarse_Resolution_Relative_Azimuth_Angle | Relative Azimuth Angle | 5600 |  |
| Coarse_Resolution_Ozone | Ozone Resolution | 5600 |  |
| Coarse_Resolution_Brightness_Temperature_Band_20 | Band 20 Brightness Temperature | 5600 | 3.360-3.840&micro;m |
| Coarse_Resolution_Brightness_Temperature_Band_21 | Band 21 Brightness Temperature | 5600 | 3.929-3.989&micro;m |
| Coarse_Resolution_Brightness_Temperature_Band_31 | Band 31 Brightness Temperature | 5600 | 10.780-11.280&micro;m |
| Coarse_Resolution_Brightness_Temperature_Band_32 | Band 32 Brightness Temperature | 5600 | 11.770-12.270&micro;m |
| Coarse_Resolution_Granule_Time | Granule time of day, as HHMM | 5600 |  |
| Coarse_Resolution_Band_3_Path_Radiance | Band 3 Radiance | 5600 |  |
| Coarse_Resolution_QA | Quality Assurance | 5600 |  |
| Coarse_Resolution_Internal_CM | Internal Cloud Mask | 5600 |  |
| Coarse_Resolution_State_QA | State Quality Assurance | 5600 |  |
| Coarse_Resolution_Number_Mapping | Number Mapping Cloud/Snow | 5600 |  |
| number_of_500m_pixels_averaged_b3 | Number of 500m pixels used in average | 5600 |  |
| number_of_500m_rej_detector | Number of 500m pixels rejected for use | 5600 |  |
| number_of_250m_pixels_averaged_b1-2 | Number of 250m pixels used in b1-2 average | 5600 |  |
| n_pixels_averaged | Number of pixels used in average | 5600 |  |

## What you can use it for

- Surface reflectance and land-cover analysis
- Vegetation and phenology monitoring
- Atmospheric correction research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MYD09CMG');
```

- Earth Engine ID: `MODIS/061/MYD09CMG`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD09CMG
* [User's Guide](https://lpdaac.usgs.gov/documents/925/MOD09_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD09CMG)

## License and citation

- License: proprietary
- Keywords: aqua, brightness-temperature, ozone, satellite-imagery, surface-reflectance
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09CMG.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km](/pages/18647d64/)
- [MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m](/pages/568e60e0/)
- [MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m](/pages/cc1794f9/)
- [MCD43A3.061 MODIS Albedo Daily 500m](/pages/80cc401f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
