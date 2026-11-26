---
title: "OpenLandMap 33kPa 土壤含水量（田间持水量）"
date: 2026-11-03 12:00:00
permalink: /pages/cf9a4017/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "envirometrix"
  - "opengeohub"
  - "openlandmap"
  - "soil"
  - "watercontent"
---

# OpenLandMap 33kPa 土壤含水量（田间持水量）

英文原名：OpenLandMap Soil Water Content at 33kPa (Field Capacity)

## 这是什么数据

250 米分辨率、6 个标准深度（0、10、30、60、100 与 200 厘米）预测的 33kPa 与 1500kPa 吸力下土壤含水量（体积 %）

训练点基于全球土壤剖面汇编：

数据导入步骤见 [此处](https://gitlab.com/openlandmap/compiled-ess-point-data-sets)。空间预测步骤在 [此处](https://gitlab.com/openlandmap/global-layers/tree/master/soil/soil_water) 详细说明。注：这些是实测并制图的土壤含量值；未使用土壤传递函数（除填补缺失的 NCSS 容重外）。逐层有效持水量（毫米，由田间持水量与凋萎点之差乘以层厚派生）见 [此处](https://doi.org/10.5281/zenodo.2629148)。不包括南极洲。

要在 Earth Engine 之外访问与可视化地图，使用 [此页面](https://opengeohub.org/about-openlandmap)。

如果您发现 LandGIS 地图中的错误、伪影或不一致，或有问题，请使用以下渠道：

## 覆盖范围与时间

- 覆盖范围：空间：全球（不含南极洲）；时间：1950 年至 2018 年；分辨率：250 米。
- 时间范围：1950-01-01 至 2018-01-01

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b0 | 0 厘米深度 33kPa（田间持水量）土壤含水量 | 250 |  |
| b10 | 10 厘米深度 33kPa（田间持水量）土壤含水量 | 250 |  |
| b30 | 30 厘米深度 33kPa（田间持水量）土壤含水量 | 250 |  |
| b60 | 60 厘米深度 33kPa（田间持水量）土壤含水量 | 250 |  |
| b100 | 100 厘米深度 33kPa（田间持水量）土壤含水量 | 250 |  |
| b200 | 200 厘米深度 33kPa（田间持水量）土壤含水量 | 250 |  |

## 能拿来做什么

- 作为全球气候与土地系统分析的基础图层。
- 为生态、水文与土壤建模提供环境变量。
- 与其他全球格网产品做对比与融合。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('OpenLandMap/SOL/SOL_WATERCONTENT-33KPA_USDA-4B1C_M/v01');
```

- 数据集编号（Earth Engine ID）：`OpenLandMap/SOL/SOL_WATERCONTENT-33KPA_USDA-4B1C_M/v01`
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_SOL_SOL_WATERCONTENT-33KPA_USDA-4B1C_M_v01
* [USDA NCSS](https://ncsslabdatamart.sc.egov.usda.gov/)
* [AfSPDB](https://www.isric.org/projects/africa-soil-profiles-database-afsp)
* [ISRIC WISE](https://data.isric.org/geonetwork/srv/eng/catalog.search#/metadata/a351682c-330a-4995-a5a1-57ad160e621c)
* [EGRPR](http://egrpr.esoil.ru/)
* [SPADE](https://esdac.jrc.ec.europa.eu/content/soil-profile-analytical-database-2)
* [CanNPDB](https://open.canada.ca/data/en/dataset/6457fad6-b6f5-47a3-9bd1-ad14aea4b9e0)
* [UNSODA](https://data.nal.usda.gov/dataset/unsoda-20-unsaturated-soil-hydraulic-database-database-and-program-indirect-methods-estimating-unsaturated-hydraulic-properties)
* [SWIG](https://doi.pangaea.de/10.1594/PANGAEA.885492)
* [HYBRAS](https://www.cprm.gov.br/en/Hydrology/Research-and-Innovation/HYBRAS-4208.html)
* [HydroS](https://doi.org/10.4228/ZALF.2003.273)
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 许可与引用

- 许可：CC-BY-SA-4.0
- 关键词：envirometrix, opengeohub, openlandmap, soil, watercontent
- 数据引用：Tomislav Hengl, & Surya Gupta. (2019). Soil water content (volumetric %) for 33kPa and 1500kPa suctions predicted at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution (Version v01) [Data set]. Zenodo.
[10.5281/zenodo.2629589](https://doi.org/10.5281/zenodo.2629589)

- DOI：10.5281/zenodo.2629589

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OpenLandMap Clay Content](/pages/f45c0586/)
- [OpenLandMap Predicted Hapludalfs Probability](/pages/ef97e31c/)
- [OpenLandMap Sand Content](/pages/9cc6623a/)
- [OpenLandMap Soil Bulk Density](/pages/df36abab/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
