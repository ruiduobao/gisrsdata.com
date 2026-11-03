---
title: "USFS Tree Canopy Cover v2025-6 (CONUS and OCONUS)"
date: 2026-11-03 12:00:00
permalink: /pages/cc82fb8c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "forest"
  - "fsic-go"
  - "gtac"
  - "landuse-landcover"
  - "redcastle-resources"
  - "tree-cover"
  - "usda"
  - "usfs"
  - "usgs"
---

# USFS Tree Canopy Cover v2025-6 (CONUS and OCONUS)

## 数据集简介

The Tree Canopy Cover (TCC) data suite, produced by the United States Department of Agriculture, Forest Service (USFS), are annual remote sensing-based map outputs spanning from 1985-2025. These data support the National Land Cover Database (NLCD) project, which is managed by the US Geological Survey (USGS) as part of the Multi-Resolution Land Characteristics (MRLC) consortium. The project aims to use the latest technology to create a consistent, "best available" map of tree canopy cover. Methodology is detailed in Heyer et al. (2025). The geographic scope includes the Conterminous United States (CONUS) and OCONUS regions (Southeast Alaska (SEAK), Hawaii (HI), Puerto Rico, and the US Virgin Islands (PRUSVI)).

**Products**

The TCC data suite includes three products:

* **Science TCC:** The raw, direct outputs from the model.

* **Science standard error (SE):** The model standard deviation of the predicted values from all regression trees. 

* **NLCD TCC:** A refined product derived from the annual Science TCC images. It undergoes post-processing to 
reduce interannual noise, highlight long-term trends, and mask specific features (such as water and non-tree agriculture).  

Each image includes a data mask band that has three values representing areas of no data (0), mapped tree canopy cover (1), and non-processing area (2). The non-processing areas are pixels in the study area with no cloud or cloud shadow-free data. Pixels with no data and non-processing area are masked in TCC and SE images.

**Data and Methods**

We developed training data and random forest models for CONUS, SEAK, PRUSVI and HI using the USFS Forest Inventory and Analysis (FIA) photo-interpreted TCC as reference data. We leveraged Google Earth Engine (GEE) (Gorelick et al., 2017) to process LandTrendr and terrain predictors. Terrain data from the 3D Elevation Program (3DEP) (U.S. Geological Survey, 2019) include elevation, slope, sine of aspect, and cosine of aspect. For CONUS, we also included the Crop Data Layer (CDL) as a predictor (Lin et al., 2022). 

We utilized USGS Collection 2 Landsat Tier 1 and Sentinel 2A/2B Level-1C top of atmosphere reflectance imagery to produce annual medoid composites. To ensure data quality, we applied various algorithms to mask clouds and shadows, 
including cFmask (Foga et al., 2017; Zhu and Woodcock, 2012), cloudScore (Chastain et al., 2019), s2cloudless (Sentinel-Hub, 2021), Cloud Score+ (Pasquarella et al., 2023), and TDOM (Chastain et al., 2019). Once masked, we computed annual medoids to create a single cloud-free composite for each year. Finally, the composite time series was temporally segmented using LandTrendr (Kennedy et al., 2010, 2018; Cohen et al., 2018). 

For CONUS, we used 70% of the reference data for calibration and 30% for independent error assessment. Given the ecological diversity of CONUS, we divided the modeling area into 54 tiles (480 km × 480 km). On local computers, we built a unique random forest model for each tile (Breiman, 2001), training it on reference data intersecting a 5×5 window around the center tile. The models were then deployed in GEE to predict wall-to-wall TCC. For OCONUS regions, we used an 80/20 split, and developed a single random forest model for each region. 

For the full TCC methodology, see Heyer et al. (2025).

**Additional Resources**

* Please see the [TCC Methods Brief](https://data.fs.usda.gov/geodata/rastergateway/treecanopycover/docs/TCC_v2025-6_Methods.pdf) or 
[Science of Remote Sensing journal article](https://www.sciencedirect.com/science/article/pii/S2666017225001075)
for detailed information regarding methods and accuracy assessment. 

* Please see the [TCC Geodata Clearinghouse](https://data.fs.usda.gov/geodata/rastergateway/treecanopycover/)
for data downloads, metadata, and support documents.

Contact [SM.FS.TCC@usda.gov] (mailto:SM.FS.TCC@usda.gov) with any
questions or specific data requests.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/gtac-data-publish/assets/TCC/Product_Version/2025-6`
- 数据类型：影像集合（ImageCollection）
- 提供方：USDA Forest Service (USFS) Field Services and Innovation Center Geospatial Office (FSIC-GO)、Google Earth Engine
- 时间范围：1985-06-01 至 2025-12-31
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：forest, fsic-go, gtac, landuse-landcover, redcastle-resources, tree-cover, usda, usfs, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Science_Percent_Tree_Canopy_Cover | The raw direct model outputs. Each pixel has a mean predicted tree canopy  cover value for each year.  | 30 |  |
| Science_Percent_Tree_Canopy_Cover_Standard_Error | The standard deviation of the predicted values from all regression trees we refer  to as standard error. Each pixel has a standard error for each year.  | 30 |  |
| NLCD_Percent_Tree_Canopy_Cover | To produce NLCD tree canopy cover, a post-processing workflow is applied to the direct  model output that identifies and sets non-treed pixel values to zero percent  tree canopy cover.   | 30 |  |
| data_mask | Three values representing areas of no data, mapped tree canopy cover, and non-processing area.  The non-processing area is where pixels within the study area have no cloud or cloud shadow-free  data available to produce an output.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/gtac-data-publish/assets/TCC/Product_Version/2025-6');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_gtac-data-publish_assets_TCC_Product_Version_2025-6
- 数据引用：USDA Forest Service. 2025. USFS Tree Canopy Cover v2025.6
(Conterminous United States and Outer Conterminous United States).
Salt Lake City, Utah.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
