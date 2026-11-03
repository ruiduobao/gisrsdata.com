---
title: "USFS Landscape Change Monitoring System  v2024-10 (CONUS and OCONUS) [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/fde64ac6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "change-detection"
  - "forest"
  - "gtac"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "lcms"
  - "redcastle-resources"
  - "usda"
  - "usfs"
---

# USFS Landscape Change Monitoring System  v2024-10 (CONUS and OCONUS) [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This product is part of the Landscape Change Monitoring System (LCMS) data suite.
It shows LCMS-modeled change, land cover, and/or land use classes for each year and
covers the Conterminous United States (CONUS) as well as areas outside the CONUS (OCONUS) 
including Alaska (AK), Puerto Rico-US Virgin Islands (PRUSVI), and Hawaii (HAWAII). 

LCMS is a remote sensing-based system for mapping and monitoring landscape change across the
United States. Its objective is to develop a consistent approach using the latest technology
and advancements in change detection to produce a "best available" map of landscape change.

Outputs include three annual products: change, land cover, and land use. The change model output relates specifically to vegetation cover and includes slow loss, fast loss (which also includes hydrologic changes such as inundation or desiccation), and gain. These values are predicted for each year of the Landsat time series and serve as the foundational products for LCMS. We apply a ruleset based on ancillary datasets to create the final change product, which is a
refinement/reclassification of the modeled change to 15 classes that explicitly provide information on the cause of landscape change (e.g., Tree Removal, Wildfire, Wind damage). Land cover and land use maps depict life-form level land cover and broad-level land use for each year.

Because no algorithm performs best in all situations, LCMS uses an ensemble of models as
predictors, which improves map accuracy across a range of ecosystems and change processes
(Healey et al., 2018). The resulting suite of LCMS change, land cover, and land use maps offer
a holistic depiction of landscape change across the United States since 1985.

Predictor layers for the LCMS model include outputs from the LandTrendr and CCDC change detection 
algorithms, and terrain information. These components are all accessed and processed using Google 
Earth Engine (Gorelick et al., 2017).

To produce annual composites for LandTrendr, USGS Collection 2 Landsat Tier 1 and Sentinel 2A,
2B Level-1C top of atmosphere reflectance data were used. The cFmask cloud masking algorithm
(Foga et al., 2017), which is an implementation of Fmask 2.0 (Zhu and Woodcock, 2012)
(Landsat-only), cloudScore (Chastain et al., 2019) (Landsat-only), s2cloudless
(Sentinel-Hub, 2021) and Cloud Score+ (Pasquarella et al., 2023) (Sentinel 2-only) are 
used to mask clouds, while TDOM (Chastain et al., 2019) is used to mask cloud shadows (Landsat and Sentinel
2). For LandTrendr, the annual medoid is then computed to summarize cloud and cloud shadow-free values 
from each year into a single composite. For CCDC, United States Geological Survey (USGS) Collection 2 
Landsat Tier 1 surface reflectance data were used for the CONUS, and Landsat Tier 1 top of atmosphere 
reflectance data for AK, PRUSVI, and HAWAII. 

The composite time series is temporally segmented using LandTrendr
(Kennedy et al., 2010; Kennedy et al., 2018; Cohen et al., 2018).

All cloud and cloud shadow free values are also temporally segmented using the CCDC algorithm
(Zhu and Woodcock, 2014).

Predictor data include raw composite values, LandTrendr fitted values, pair-wise differences,
segment duration, change magnitude, and slope, and CCDC sine and
cosine coefficients (first 3 harmonics), fitted values, and pairwise
differences, along with elevation, slope, sine of aspect, cosine of aspect,
and topographic position indices (Weiss, 2001) from the 10 m USGS 3D Elevation
Program (3DEP) data (U.S. Geological Survey, 2019).

Reference data are collected using TimeSync, a web-based tool that helps
analysts visualize and interpret the Landsat data record from 1984-present (Cohen et al., 2010).

Random Forest models (Breiman, 2001) were trained using reference data from TimeSync and predictor data 
from LandTrendr, CCDC, and terrain indices to predict annual change, land cover, and land use classes. 
Following modeling, we institute a series of probability thresholds and rulesets using ancillary datasets 
to improve qualitative map outputs and reduce commission and omission. More information can be found in 
the LCMS Methods Brief included in the Description. 

**Additional Resources**

* [A more detailed code example of using LCMS data](https://github.com/google/earthengine-community/blob/master/datasets/scripts/LCMS_Visualization.js).

* The [LCMS Data Explorer](https://apps.fs.usda.gov/lcms-viewer) is a web-based application that
  provides users the ability to view, analyze, summarize and download LCMS data.

* Please see the [LCMS Methods Brief](https://data.fs.usda.gov/geodata/rastergateway/LCMS/LCMS_v2024-10_Methods.pdf)
  for more detailed information regarding methods and accuracy assessment, or the
  [LCMS Geodata Clearinghouse](https://data.fs.usda.gov/geodata/rastergateway/LCMS/index.php)
  for data downloads, metadata, and support documents.

* The string HAWAII will be updated to HI in the upcoming v2025.11 data release.

Contact [sm.fs.lcms@usda.gov](mailto:sm.fs.lcms@usda.gov) with any
questions or specific data requests.

## 基本信息

- 数据集编号（Earth Engine ID）：`USFS/GTAC/LCMS/v2024-10`
- 数据类型：影像集合（ImageCollection）
- 提供方：USDA Forest Service (USFS) Field Services and Innovation Center Geospatial Office (FSIC-GO)、Google Earth Engine
- 时间范围：1985-01-01 至 2024-12-31
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：change-detection, forest, gtac, landcover, landuse, landuse-landcover, lcms, redcastle-resources, usda, usfs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Change | Final thematic LCMS change product. A total of fifteen change classes are mapped for each year. Foundationally, change is modeled with three separate binary Random Forest models for each study area: slow loss, fast loss, and gain. Each pixel is assigned to the modeled change class with the highest probability that is also above a specified threshold. Any pixel that does not have any value above each class's respective threshold is assigned to the Stable class. Following a ruleset using the modeled change class, ancillary datasets (such as TCC, MTBS, and IDS), and LCMS Land Cover data, one of the 15 refined, cause of change classes is assigned to each pixel. See the LCMS Methods Brief linked to in the Description for full details on the ruleset and the ancillary datasets used.   | 30 |  |
| Land_Cover | Final thematic LCMS land cover product. A total of 14 land cover classes are mapped on an annual basis using TimeSync reference data and spectral information derived from Landsat imagery. Land cover is predicted using a single multiclass Random Forest model, which outputs an array of the probabilities of each class (proportion of the trees within the Random Forest model that 'chose' each class). Final classes are assigned to the land use with the highest probability. Prior to assigning the land cover class with the highest probability, depending on the study area, one to several probability thresholds and rulesets using ancillary datasets were applied. More information on the probability thresholds and rulesets can be found in the LCMS Methods Brief linked to in the Description. Seven land cover classes indicate a single land cover, where that land cover type covers most of the pixel's area and no other class covers more than 10% of the pixel. There are also seven mixed classes. These represent pixels in which an additional land cover class covers at least 10% of the pixel.  | 30 |  |
| Land_Use | Final thematic LCMS land use product. A total of 5 land use classes are mapped on an annual basis using TimeSync reference data and spectral information derived from Landsat imagery. Land use is predicted using a single multiclass Random Forest model, which outputs an array of the probabilities of each class (proportion of the trees within the Random Forest model that 'chose' each class). Final classes are assigned to the land use with the highest probability. Prior to assigning the land use class with the highest probability, a series of probability thresholds and rulesets using ancillary datasets were applied. More information on the probability thresholds and rulesets can be found in the LCMS Methods Brief linked to in the Description.  | 30 |  |
| Change_Raw_Probability_Slow_Loss | Raw LCMS modeled probability of Slow Loss. Slow Loss includes the following classes from the TimeSync change process interpretation:    * Structural Decline - Land where trees or other woody vegetation is physically altered by   unfavorable growing conditions brought on by non-anthropogenic or non-mechanical factors.   This type of loss should generally create a trend in the spectral signal(s) (e.g. NDVI   decreasing, Wetness decreasing; SWIR increasing; etc.) however the trend can be subtle.   Structural decline occurs in woody vegetation environments, most likely from insects,   disease, drought, acid rain, etc. Structural decline can include defoliation events that do   not result in mortality such as in Gypsy moth and spruce budworm infestations which may   recover within 1 or 2 years.    * Spectral Decline - A plot where the spectral signal shows a   trend in one or more of the spectral bands or indices (e.g. NDVI decreasing, Wetness   decreasing; SWIR increasing; etc.). Examples include cases where: a) non-forest/non-woody   vegetation shows a trend suggestive of decline (e.g. NDVI decreasing, Wetness decreasing;   SWIR increasing; etc.), or b) where woody vegetation shows a decline trend which is not   related to the loss of woody vegetation, such as when mature tree canopies close resulting   in increased shadowing, when species composition changes from conifer to hardwood, or when   a dry period (as opposed to stronger, more acute drought) causes an apparent decline in   vigor, but no loss of woody material or leaf area.  | 30 |  |
| Change_Raw_Probability_Fast_Loss | Raw LCMS modeled probability of Fast Loss. Fast Loss includes the following classes from the TimeSync change process interpretation:  * Fire - Land altered by fire, regardless of the cause of the ignition (natural or anthropogenic), severity, or land use.  * Harvest - Forest land where trees, shrubs or other vegetation have been severed or removed by anthropogenic means. Examples include clearcutting, salvage logging after fire or insect outbreaks, thinning and other forest management prescriptions (e.g. shelterwood/seedtree harvest).  * Mechanical - Non-forest land where trees, shrubs or other vegetation has been mechanically severed or removed by chaining, scraping, brush sawing, bulldozing, or any other methods of non-forest vegetation removal.  * Wind/ice - Land (regardless of use) where vegetation is altered by wind from hurricanes, tornados, storms and other severe weather events including freezing rain from ice storms.  * Hydrology - Land where flooding has significantly altered woody cover or other Land cover elements regardless of land use (e.g. new mixtures of gravel and vegetation in and around streambeds after a flood).  * Debris - Land (regardless of use) altered by natural material movement associated with landslides, avalanches, volcanos, debris flows, etc.  * Other - Land (regardless of use) where the spectral trend or other supporting evidence suggests a disturbance or change event has occurred but the definitive cause cannot be determined or the type of change fails to meet any of the change process categories defined above.  | 30 |  |
| Change_Raw_Probability_Gain | Raw LCMS modeled probability of Gain. Defined as: Land exhibiting an increase in vegetation cover due to growth and succession over one or more years. Applicable to any areas that may express spectral change associated with vegetation regrowth. In developed areas, growth can result from maturing vegetation and/or newly installed lawns and landscaping. In forests, growth includes vegetation growth from bare ground, as well as the over topping of intermediate and co-dominate trees and/or lower-lying grasses and shrubs. Growth/Recovery segments recorded following forest harvest will likely transition through different land cover classes as the forest regenerates. For these changes to be considered growth/recovery, spectral values should closely adhere to an increasing trend line (e.g. a positive slope that would, if extended to ~20 years, be on the order of .10 units of NDVI) which persists for several years.  | 30 |  |
| Land_Cover_Raw_Probability_Trees | Raw LCMS modeled probability of Trees. Defined as: The majority of the pixel is comprised of live or standing dead trees.  | 30 |  |
| Land_Cover_Raw_Probability_Tall-Shrubs-and-Trees-Mix | Raw LCMS modeled probability of Tall Shrubs and Trees Mix (AK Only). Defined as: The majority of the pixel is comprised of shrubs greater than 1m in height and is also comprised of at least 10% live or standing dead trees.  | 30 |  |
| Land_Cover_Raw_Probability_Shrubs-and-Trees-Mix | Raw LCMS modeled probability of Shrubs and Trees Mix. Defined as: The majority of the pixel is comprised of shrubs and is also comprised of at least 10% live or standing dead trees.  | 30 |  |
| Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Trees-Mix | Raw LCMS modeled probability of Grass/Forb/Herb and Trees Mix. Defined as: The majority of the pixel is comprised of perennial grasses, forbs, or other forms of herbaceous vegetation and is also comprised of at least 10% live or standing dead trees.  | 30 |  |
| Land_Cover_Raw_Probability_Barren-and-Trees-Mix | Raw LCMS modeled probability of Barren and Trees Mix. Defined as: The majority of the pixel is comprised of bare soil exposed by disturbance (e.g., soil uncovered by mechanical clearing or forest harvest), as well as perennially barren areas such as deserts, playas, rock outcroppings (including minerals and other geologic materials exposed by surface mining activities), sand dunes, salt flats, and beaches. Roads made of dirt and gravel are also considered barren and is also comprised of at least 10% live or standing dead trees.  | 30 |  |
| Land_Cover_Raw_Probability_Tall-Shrubs | Raw LCMS modeled probability of Tall Shrubs (AK Only). Defined as: The majority of the pixel is comprised of shrubs greater than 1m in height.  | 30 |  |
| Land_Cover_Raw_Probability_Shrubs | Raw LCMS modeled probability of Shrubs. Defined as: The majority of the pixel is comprised of shrubs.  | 30 |  |
| Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Shrubs-Mix | Raw LCMS modeled probability of Grass/Forb/Herb and Shrubs Mix. Defined as: The majority of the pixel is comprised of perennial grasses, forbs, or other forms of herbaceous vegetation and is also comprised of at least 10% shrubs.  | 30 |  |
| Land_Cover_Raw_Probability_Barren-and-Shrubs-Mix | Raw LCMS modeled probability of Barren and Shrubs Mix. Defined as: The majority of the pixel is comprised of bare soil exposed by disturbance (e.g., soil uncovered by mechanical clearing or forest harvest), as well as perennially barren areas such as deserts, playas, rock outcroppings (including minerals and other geologic materials exposed by surface mining activities), sand dunes, salt flats, and beaches. Roads made of dirt and gravel are also considered barren and is also comprised of at least 10% shrubs.  | 30 |  |
| Land_Cover_Raw_Probability_Grass-Forb-Herb | Raw LCMS modeled probability of Grass/Forb/Herb. Defined as: The majority of the pixel is comprised of perennial grasses, forbs, or other forms of herbaceous vegetation.  | 30 |  |
| Land_Cover_Raw_Probability_Barren-and-Grass-Forb-Herb-Mix | Raw LCMS modeled probability of Barren and Grass/Forb/Herb Mix. Defined as: The majority of the pixel is comprised of bare soil exposed by disturbance (e.g., soil uncovered by mechanical clearing or forest harvest), as well as perennially barren areas such as deserts, playas, rock outcroppings (including minerals and other geologic materials exposed by surface mining activities), sand dunes, salt flats, and beaches. Roads made of dirt and gravel are also considered barren and is also comprised of at least 10% perennial grasses, forbs, or other forms of herbaceous vegetation.  | 30 |  |
| Land_Cover_Raw_Probability_Barren-or-Impervious | Raw LCMS modeled probability of Barren or Impervious. Defined as: The majority of the pixel is comprised of 1.) bare soil exposed by disturbance (e.g., soil uncovered by mechanical clearing or forest harvest), as well as perennially barren areas such as deserts, playas, rock outcroppings (including minerals and other geologic materials exposed by surface mining activities), sand dunes, salt flats, and beaches. Roads made of dirt and gravel are also considered barren or 2.) man-made materials that water cannot penetrate, such as paved roads, rooftops, and parking lots.  | 30 |  |
| Land_Cover_Raw_Probability_Snow-or-Ice | Raw LCMS modeled probability of Snow or Ice. Defined as: The majority of the pixel is comprised of snow or ice.  | 30 |  |
| Land_Cover_Raw_Probability_Water | Raw LCMS modeled probability of Water. Defined as: The majority of the pixel is comprised of water.  | 30 |  |
| Land_Use_Raw_Probability_Agriculture | Raw LCMS modeled probability of Agriculture. Defined as: Land used for the production of food, fiber and fuels which is in either a vegetated or non-vegetated state. This includes but is not limited to cultivated and uncultivated croplands, hay lands, orchards, vineyards, confined livestock operations, and areas planted for production of fruits, nuts or berries. Roads used primarily for agricultural use (i.e. not used for public transport from town to town) are considered agriculture land use.  | 30 |  |
| Land_Use_Raw_Probability_Developed | Raw LCMS modeled probability of Developed. Defined as: Land covered by man-made structures (e.g. high density residential, commercial, industrial, mining or transportation), or a mixture of both vegetation (including trees) and structures (e.g., low density residential, lawns, recreational facilities, cemeteries, transportation and utility corridors, etc.), including any land functionally altered by human activity.  | 30 |  |
| Land_Use_Raw_Probability_Forest | Raw LCMS modeled probability of Forest. Defined as: Land that is planted or naturally vegetated and which contains (or is likely to contain) 10% or greater tree cover at some time during a near-term successional sequence. This may include deciduous, evergreen and/or mixed categories of natural forest, forest plantations, and woody wetlands.  | 30 |  |
| Land_Use_Raw_Probability_Other | Raw LCMS modeled probability of Other. Defined as: Land (regardless of use) where the spectral trend or other supporting evidence suggests a disturbance or change event has occurred but the definitive cause cannot be determined or the type of change fails to meet any of the change process categories defined above.  | 30 |  |
| Land_Use_Raw_Probability_Rangeland-or-Pasture | Raw LCMS modeled probability of Rangeland or Pasture. Defined as: This class includes any area that is either a.) Rangeland, where vegetation is a mix of native grasses, shrubs, forbs and grass-like plants largely arising from natural factors and processes such as rainfall, temperature, elevation and fire, although limited management may include prescribed burning as well as grazing by domestic and wild herbivores; or b.) Pasture, where vegetation may range from mixed, largely natural grasses, forbs and herbs to more managed vegetation dominated by grass species that have been seeded and managed to maintain near monoculture.  | 30 |  |
| QA_Bits | Ancillary information on the origin of the annual LCMS product output values.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USFS/GTAC/LCMS/v2024-10');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USFS_GTAC_LCMS_v2024-10
- 数据引用：USDA Forest Service. 2025. USFS Landscape Change Monitoring System
v2024.10 (Conterminous United States and  Outer Conterminous United States).
Salt Lake City, Utah.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
