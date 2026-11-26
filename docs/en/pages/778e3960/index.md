---
title: "Landsat 8 Level 2 Surface Reflectance and Surface Temperature"
date: 2026-11-03 12:00:00
---

# Landsat 8 Level 2 Surface Reflectance and Surface Temperature

Original name: USGS Landsat 8 Level 2, Collection 2, Tier 1

## What this dataset is

This is the analysis-ready version of Landsat 8 imagery. Raw satellite images are hazed by the atmosphere; this Level 2 product has been atmospherically corrected and gives you two products you can use directly:

- **Surface reflectance** — how much sunlight the ground actually reflects, the right starting point for studying vegetation, water and cities;
- **Surface temperature** — how hot the ground is, used for urban heat islands, drought and similar work.

The data come from the OLI and TIRS sensors aboard Landsat 8. Each scene covers about 170 km × 183 km on a standardized reference grid (WRS-2). Surface reflectance is produced with the LaSRC algorithm; surface temperature uses a single-channel algorithm developed jointly by the Rochester Institute of Technology (RIT) and NASA's Jet Propulsion Laboratory (JPL).

Limitations noted by the data provider:

- Surface temperature requires both optical and thermal data, so **night-time scenes cannot be processed to surface temperature**;
- Some assets contain only surface reflectance — the temperature bands are then present but empty (`PROCESSING_LEVEL` is `L2SR`; assets with both are `L2SP`);
- Surface temperature relies on ASTER GED emissivity data, which is missing in some persistently cloudy regions — those areas have permanent gaps in the temperature bands;
- A known error exists in surface temperature retrievals near clouds and possibly cloud shadows (Cook et al., 2014).

## Coverage and time range

- Coverage: global land, tiled by WRS-2 scenes (about 170 km × 183 km each)
- Time range: 2013-03-18 to 2026-10-26

## Resolution and specifications

- Spatial resolution: 30 m (one pixel is about the size of a basketball court)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| SR_B1 | Band 1 (ultra blue, coastal aerosol) surface reflectance | 30 | 0.435-0.451 &mu;m |
| SR_B2 | Band 2 (blue) surface reflectance | 30 | 0.452-0.512 &mu;m |
| SR_B3 | Band 3 (green) surface reflectance | 30 | 0.533-0.590 &mu;m |
| SR_B4 | Band 4 (red) surface reflectance | 30 | 0.636-0.673 &mu;m |
| SR_B5 | Band 5 (near infrared) surface reflectance | 30 | 0.851-0.879 &mu;m |
| SR_B6 | Band 6 (shortwave infrared 1) surface reflectance | 30 | 1.566-1.651 &mu;m |
| SR_B7 | Band 7 (shortwave infrared 2) surface reflectance | 30 | 2.107-2.294 &mu;m |
| SR_QA_AEROSOL | Aerosol attributes | 30 |  |
| ST_B10 | Band 10 surface temperature. If `PROCESSING_LEVEL` is `L2SR`, this band is fully masked out | 30 | 10.60-11.19 &mu;m |
| ST_ATRAN | Atmospheric Transmittance. If `PROCESSING_LEVEL` is `L2SR`, this band is fully masked out | 30 |  |
| ST_CDIST | Pixel distance to cloud. If `PROCESSING_LEVEL` is `L2SR`, this band is fully masked out | 30 |  |
| ST_DRAD | Downwelled Radiance. If `PROCESSING_LEVEL` is `L2SR`, this band is fully masked out | 30 |  |
| ST_EMIS | Emissivity of Band 10 estimated from ASTER GED. If `PROCESSING_LEVEL` is `L2SR`, this band is fully masked out | 30 |  |
| ST_EMSD | Emissivity standard deviation. If `PROCESSING_LEVEL` is `L2SR`, this band is fully masked out | 30 |  |
| ST_QA | Uncertainty of the Surface Temperature band. If `PROCESSING_LEVEL` is `L2SR`, this band is fully masked out | 30 |  |
| ST_TRAD | Thermal band converted to radiance. If `PROCESSING_LEVEL` is `L2SR`, this band is fully masked out | 30 |  |
| ST_URAD | Upwelled Radiance. If `PROCESSING_LEVEL` is `L2SR`, this band is fully masked out | 30 |  |
| QA_PIXEL | Pixel quality attributes generated from the CFMASK algorithm | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |

## What you can use it for

- Vegetation monitoring, forest change and cropland mapping (the reflectance bands are the basis for indices such as NDVI)
- Tracking lakes, rivers and flood extent
- Monitoring urban expansion and land-use change
- Urban heat island, drought and irrigation studies with the surface temperature band

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2');
```

- Earth Engine ID: `LANDSAT/LC08/C02/T1_L2`
- Providers: USGS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_L2
- The underlying files are also available from a public Google Cloud Storage bucket on a requester-pays basis: [gee-public-data-landsat](https://console.cloud.google.com/storage/browser/gee-public-data-landsat), indexed in BigQuery as `earth-engine-public-data.geo_index.landsat_c2_index`

## License and citation

- License: proprietary
- Keywords: cfmask, cloud, fmask, global, l8sr, landsat, lasrc, lc08, lst, reflectance, satellite-imagery, sr, usgs

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
