---
title: "OpenET eeMETRIC Monthly Evapotranspiration v2.0 (1985-1999)"
date: 2026-11-03 12:00:00
---

# OpenET eeMETRIC Monthly Evapotranspiration v2.0 (1985-1999)

Original name: OpenET eeMETRIC Monthly Evapotranspiration v2.0 (1985-1999)

## What this dataset is

Google Earth Engine implementation of the Mapping Evapotranspiration
at high Resolution with Internalized Calibration model (eeMETRIC).

eeMETRIC applies the advanced METRIC algorithms and process of Allen
et al. (2007; 2015) and Allen et al. (2013b), where a singular
relationship between the near surface air temperature difference (dT)
and delapsed land surface temperature (TsDEM) is used to estimate sensible
heat flux (H) and is applied to each Landsat scene. Automated selection of
the hot and cold pixels for an image generally follows a statistical
isolation procedure described by Allen et al. (2013a) and ReVelle, Kilic
and Allen (2019a,b). The calibration of H in eeMETRIC utilizes alfalfa
reference ET calculated from the NLDAS-2 gridded weather dataset using a
fixed 15% reduction in computed reference ET to account for known biases
in the gridded data set. The fixed reduction does not impact the
calibration accuracy of eeMETRIC and mostly reduces impacts of boundary
layer buoyancy correction.

The identification of candidates for pools of hot and cold pixels has
evolved in the eeMETRIC implementation of METRIC. The new automated
calibration process incorporates the combination of methodologies and
approaches that stem from two development branches of EEFlux (Allen
et al., 2015). The first branch focused on improving the automated pixel
selection process using standard lapse rates for land surface temperature
(LST) without any further spatial delapsing (ReVelle et al., 2019b). The
second branch incorporated a secondary spatial delapsing of LST as well as
changes to the pixel selection process (ReVelle et al., 2019a). The final,
combined approach is described by Kilic et al. (2021).

eeMETRIC employs the aerodynamic-related functions in complex terrain
(mountains) developed by Allen et al. (2013b) to improve estimates for
aerodynamic roughness, wind speed and boundary layer stability as related
to estimated terrain roughness, position on a slope and wind direction.
These functions tend to increase estimates for H (and reduce ET) on
windward slopes and may reduce H (and increase ET) on leeward slopes.
Other METRIC functions employed in eeMETRIC that have been added since
the descriptions provided in Allen et al. (2007 and 2011) include
reduction in soil heat flux (G) in the presence of organic mulch on the
ground surface, use of an excess aerodynamic resistance for shrublands,
use of the Perrier function for trees identified as forest (Allen et
al., 2018; Santos et al., 2012) and aerodynamic estimation of evaporation
from open water rather than using energy balance (Jensen and Allen 2016;
Allen et al., 2018). In 2022, the Perrier function was applied to tree
(orchard) crops and a 3-source partitioning of bulk surface temperature
into canopy temperature, shaded soil temperature and sunlit soil
temperature was applied to both orchards and vineyards. These latter
applications were made where orchards and vineyards are identified by
CDL or, in California, by a state-sponsored land use system. These
functions and other enhancements to the original METRIC model are described
in the most current METRIC users manual (Allen et al., 2018). eeMETRIC uses
the atmospherically corrected surface reflectance and LST from Landsat
Collection 2 Level 2, with fallback to Collection 2 Level 1 when needed for
near real-time estimates.

**OpenET Collection v2.0, pre-2000 (1985-1999)**

Note: This collection should not be merged with the main v2.0
collection to compute long-term trends, annual totals, or difference from
average type calculations, unless care is taken to identify and fill gaps
or missing data. This collection was generated using Landsat 5 data only,
and will have more data gaps (both spatially and temporally) than the main
v2.0 collection, which incorporates data from multiple Landsat satellites
(5 & 7, 7 & 8, etc.). This pre-2000 collection may have long periods
without data, especially in the winter months, and large regions without
data whatsoever in the earlier years (1985-1993).

[Additional information](https://etdata.org/methods/)

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 1984 to 1999 (monthly); resolution: 30 m.
- Time range: 1984-10-01 至 1999-10-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| et | Total actual evapotranspiration (ET) | 30 |  |
| count | Number of cloud free observations in the month included in the interpolation | 30 |  |

## What you can use it for

- Monitor field-scale irrigation water use and evapotranspiration.
- Provide monthly ET data for water-resource management and drought assessment.
- Compare multi-model ensemble ET with single-model results.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('projects/openet/assets/eemetric/conus/gridmet/monthly/v2_0_pre2000');
```

- Earth Engine ID: `projects/openet/assets/eemetric/conus/gridmet/monthly/v2_0_pre2000`
- Providers: OpenET, Inc., Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_eemetric_conus_gridmet_monthly_v2_0_pre2000

## License and citation

- License: CC-BY-4.0
- Keywords: evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Kilic, A., Allen, R.G., Blankenau, P., ReVelle, P., Ozturk, D. and
Huntington, J., 2021. Global production and free access to Landsat-scale
Evapotranspiration with EEFlux and eeMETRIC. In 6th Decennial National
Irrigation Symposium, 6-8, December 2021, San Diego, California
(p. 1). American Society of Agricultural and Biological Engineers.
[doi:10.13031/irrig.2020-038](https://doi.org/10.13031/irrig.2020-038)

- DOI：10.13031/irrig.2020-038

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)](/pages/0e0267d6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
