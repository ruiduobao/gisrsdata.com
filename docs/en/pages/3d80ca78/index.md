---
title: "Global Forest Cover Change (GFCC) Tree Cover Multi-Year Global 30m"
date: 2026-11-03 12:00:00
---

# Global Forest Cover Change (GFCC) Tree Cover Multi-Year Global 30m

Original name: Global Forest Cover Change (GFCC) Tree Cover Multi-Year Global 30m

## What this dataset is

The Landsat Vegetation Continuous Fields (VCF) tree cover layers contain
estimates of the percentage of horizontal ground in each 30-m pixel covered
by woody vegetation greater than 5 meters in height. The dataset is available
for four epochs centered on the years 2000, 2005, 2010 and 2015. The dataset
is derived from the GFCC Surface Reflectance product (GFCC30SR), which is
based on enhanced Global Land Survey (GLS) datasets. The GLS datasets are
composed of high-resolution Landsat 5 Thematic Mapper (TM) and Landsat 7
Enhanced Thematic Mapper Plus (ETM+) images at 30 meter resolution.

Tree cover, the proportional, vertically projected area of vegetation
(including leaves, stems, branches, etc.) of woody plants above a given
height, affects terrestrial energy and water exchanges, photosynthesis and
transpiration, net primary production, and carbon and nutrient fluxes. Tree
cover also affects habitat quality and movements of wildlife, residential
property value for humans, and other ecosystem services. The continuous
classification scheme of the VCF product enables better depiction of land
cover gradients than traditional discrete classification schemes.
Importantly for detection and monitoring of forest changes (e.g.,
deforestation and degradation), tree cover provides a measurable attribute
upon which to define forest cover and its changes. Changes in tree cover
over time can be used to monitor and retrieve site-specific histories of
forest change.

The dataset has been produced for four year epochs: 2000, 2005, 2010, and
2015 with an image in the collection for each available WRS2 path/row.

Provider's Note: Due to the end of NASA MEaSUREs funding, free versions of this dataset are no
longer being produced. Interested parties can obtain updated and expanded versions at
www.terraPulse.com.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2015; resolution: 30 m.
- Time range: 2000-01-01 至 2015-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| tree_canopy_cover | The percentage of pixel area covered by trees. | 30 |  |
| uncertainty | RMSE for tree-canopy_cover | 30 |  |
| source_index | Identity of source image used for the particular pixel. This is an index into the per image metadata array 'sources'. Only available for 2000, 2005, and 2010. | 30 |  |

## What you can use it for

- Forest cover change monitoring
- Deforestation and degradation assessment
- Ecosystem services research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/MEASURES/GFCC/TC/v3');
```

- Earth Engine ID: `NASA/MEASURES/GFCC/TC/v3`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_MEASURES_GFCC_TC_v3
* [User's guide](https://lpdaac.usgs.gov/documents/1371/GFCC_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1370/GFCC_ATBD.pdf)

## License and citation

- License: proprietary
- Keywords: forest, forest-biomass, glcf, landsat-derived, nasa, umd
- 数据引用：Paper/Methods Citation: Sexton, J. O., Song, X.-P., Feng, M., Noojipady,
P., Anand, A., Huang, C., Kim, D.-H., Collins, K.M., Channan, S.,
DiMiceli, C., Townshend, J.R.G. (2013). Global, 30-m resolution
continuous fields of tree cover: Landsat-based rescaling of MODIS
Vegetation Continuous Fields with lidar-based estimates of error.
International Journal of Digital Earth, 130321031236007.
[doi:10.1080/17538947.2013.786146](https://doi.org/10.1080/17538947.2013.786146).

- DOI：10.5067/MEaSUREs/GFCC/GFCC30TC.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
