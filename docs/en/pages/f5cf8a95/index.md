---
title: "Global Aboveground and Belowground Biomass Carbon Density Maps"
date: 2026-11-03 12:00:00
---

# Global Aboveground and Belowground Biomass Carbon Density Maps

Original name: Global Aboveground and Belowground Biomass Carbon Density Maps

## What this dataset is

This dataset provides temporally consistent and harmonized global maps of aboveground and
belowground biomass carbon density for the year 2010 at a 300-m spatial resolution. The
aboveground biomass map integrates land-cover specific, remotely sensed maps of woody,
grassland, cropland, and tundra biomass. Input maps were amassed from the published literature
and, where necessary, updated to cover the focal extent or time period. The belowground biomass
map similarly integrates matching maps derived from each aboveground biomass map and land-cover
specific empirical models. Aboveground and belowground maps were then integrated separately
using ancillary maps of percent tree cover and landcover and a rule-based decision tree. Maps
reporting the accumulated uncertainty of pixel-level estimates are also provided.

Provider's note: The UN Environment Programme World Conservation Monitoring
Centre (UNEP-WCMC) carbon biomass dataset
represents conditions between 1982 and 2010 depending on land cover type. The relative patterns
of carbon stocks are well represented with this dataset. The [NASA/ORNL carbon biomass dataset](https://daac.ornl.gov/VEGETATION/guides/Global_Maps_C_Density_2010.html)
represents biomass conditions for 2010, with uncertainty estimates at the pixel-level.
Additional biomass of non-dominant land cover types are represented within each pixel. For more
detailed information, please refer to the papers describing each dataset: [WCMC](WCMC_biomass_carbon_density_v1_0)
[(Soto-Navarro et al. 2020)](https://royalsocietypublishing.org/doi/full/10.1098/rstb.2019.0128)
and NASA/ORNL [(Spawn et al. 2020)](https://www.nature.com/articles/s41597-020-0444-4).

## Coverage and time range

- Coverage: Coverage: global; time span: 2010; resolution: 300 m.
- Time range: 2010-01-01 至 2010-12-31

## Resolution and specifications

- Spatial resolution: about 300 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| agb | Aboveground living biomass carbon stock density of combined woody and herbaceous cover in 2010. This includes carbon stored in living plant tissues that are located above the earth's surface (stems, bark, branches, twigs). This does not include leaf litter or coarse woody debris that were once attached to living plants but have since been deposited and are no longer living. | 300 |  |
| agb_uncertainty | Uncertainty of estimated aboveground living biomass carbon density of combined woody and herbaceous cover in 2010. Uncertainty represents the cumulative standard error that has been propagated through the harmonization process using summation in quadrature. | 300 |  |
| bgb | Belowground living biomass carbon stock density of combined woody and herbaceous cover in 2010. This includes carbon stored in living plant tissues that are located below the earth's surface (roots). This does not include dead and/or dislocated root tissue, nor does it include soil organic matter. | 300 |  |
| bgb_uncertainty | Uncertainty of estimated belowground living biomass carbon density of combined woody and herbaceous cover in 2010. Uncertainty represents the cumulative standard error that has been propagated through the harmonization process using summation in quadrature. | 300 |  |

## What you can use it for

- Global carbon stock assessment
- Biomass mapping
- Climate change mitigation research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/ORNL/biomass_carbon_density/v1');
```

- Earth Engine ID: `NASA/ORNL/biomass_carbon_density/v1`
- Providers: NASA ORNL DAAC at Oak Ridge National Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_biomass_carbon_density_v1

## License and citation

- License: proprietary
- Keywords: aboveground, belowground, biomass, carbon, density, forest, forest-biomass, nasa, ornl, vegetation
- 数据引用：Spawn, S.A., Sullivan, C.C., Lark, T.J. et al. Harmonized global maps of above and
belowground biomass carbon density in the year 2010. Sci Data 7, 112 (2020).
[doi:10.1038/s41597-020-0444-4](https://doi.org/10.1038/s41597-020-0444-4)

- DOI：10.3334/ORNLDAAC/1763

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global 2020 Forest Classification for IPCC Aboveground Biomass Tier 1 Estimates, V1](/pages/750f4ec5/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
