---
title: "Cloud Score+ S2_HARMONIZED V1"
date: 2026-11-03 12:00:00
---

# Cloud Score+ S2_HARMONIZED V1

Original name: Cloud Score+ S2_HARMONIZED V1

## What this dataset is

Cloud Score+ is a quality assessment (QA) processor for medium-to-high
resolution optical satellite imagery. The Cloud Score+ S2_HARMONIZED
dataset is being operationally produced from the
[harmonized Sentinel-2 L1C collection](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED),
and Cloud Score+ outputs can be used to identify relatively clear pixels and
effectively remove clouds and cloud shadows from [L1C (Top-of-Atmosphere)](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED)
or [L2A (Surface Reflectance)](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED)
imagery.

The Cloud Score+ S2_HARMONIZED dataset includes two QA bands, `cs` and
`cs_cdf`, that both grade the usability of individual pixels with respect to
surface visibility on a continuous scale between 0 and 1, where 0 represents
"not clear" (occluded), while 1 represents "clear" (unoccluded) observations.
The `cs` band scores QA based on a spectral distance between the observed
pixel and a (theoretical) clear reference observation, while the `cs_cdf` band
represents the likelihood an observed pixel is clear based on an estimated
cumulative distribution of scores for a given location through time. In
other words, `cs` can be thought of as a more instantaneous atmospheric
similarity score (i.e., how similar is this pixel to what we'd expect to
see in a perfectly a clear reference), while `cs_cdf` captures an expectation
of the estimated score through time (i.e., if we had all the scores for this
pixel through time, how would this score rank?).

Images in the Cloud Score+ S2_HARMONIZED collection have the same id and
`system:index` properties as the individual [Sentinel-2 L1C](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED)
assets from which they were produced such that Cloud Score+ bands can be
linked to source images based on their shared `system:index`.

Cloud Score+ backfill for the entire Sentinel-2 archive is currently in
progress and Dataset Availability dates will be updated periodically as new
results are added to the Cloud Score+ collection.

For more information about the Cloud Score+ dataset and modelling
approach, see
[this Medium post](https://medium.com/google-earth/all-clear-with-cloud-score-bd6ee2e2235e).

## Coverage and time range

- Coverage: Global
- Time range: 2015-06-27 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| cs | Pixel quality score based on spectral distance from a (theoretical) clear reference | 10 |  |
| cs_cdf | Value of the cumulative distribution function of possible `cs` values for the estimated `cs` value | 10 |  |

## What you can use it for

- Sentinel-2 cloud and cloud shadow masking
- Clear pixel screening and compositing
- Image quality assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED');
```

- Earth Engine ID: `GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED`
- Providers: Google Earth Engine, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED

## License and citation

- License: CC-BY-4.0
- Keywords: cloud, google, satellite-imagery, sentinel2-derived
- 数据引用：Pasquarella, V. J., Brown, C. F., Czerwinski, W., & Rucklidge, W. J. (2023)
Comprehensive Quality Assessment of Optical Satellite Imagery Using Weakly
Supervised Video Learning. In Proceedings of the IEEE/CVF Conference on
Computer Vision and Pattern Recognition (pp. 2125-2135).
[doi:10.1109/CVPRW59228.2023.00206](https://doi.org/10.1109/CVPRW59228.2023.00206)
[PDF](https://openaccess.thecvf.com/content/CVPR2023W/EarthVision/html/Pasquarella_Comprehensive_Quality_Assessment_of_Optical_Satellite_Imagery_Using_Weakly_Supervised_CVPRW_2023_paper.html)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [EO-1 Hyperion Hyperspectral Imager](/en/pages/9f815cd7/)
- [Landsat 8 Level 2 Surface Reflectance and Surface Temperature](/en/pages/778e3960/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow](/en/pages/008235d0/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
