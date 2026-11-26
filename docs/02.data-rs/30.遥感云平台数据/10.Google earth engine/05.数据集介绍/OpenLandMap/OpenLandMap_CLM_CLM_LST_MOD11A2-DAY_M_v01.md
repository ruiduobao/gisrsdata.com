---
title: "OpenLandMap 长期地表温度白天逐月中位数"
date: 2026-11-03 12:00:00
permalink: /pages/014c6b8e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "envirometrix"
  - "lst"
  - "mod11a2"
  - "modis"
  - "monthly"
  - "opengeohub"
  - "openlandmap"
  - "weather-and-climate"
---

# OpenLandMap 长期地表温度白天逐月中位数

英文原名：OpenLandMap Long-term Land Surface Temperature Daytime Monthly Median

## 这是什么数据

地表温度白天逐月平均值 2000–2017（标题作中位数，正文作平均值，原文如此）。

使用 R 中的 [data.table 包与分位数函数](https://gitlab.com/openlandmap/global-layers/tree/master/input_layers/MOD11A2) 派生。MODIS LST 产品的更多信息见 [此页面](https://lpdaac.usgs.gov/products/mod11a2v006/)。不包括南极洲。

要在 Earth Engine 之外访问与可视化地图，使用 [此页面](https://opengeohub.org/about-openlandmap)。

如果您发现 LandGIS 地图中的错误、伪影或不一致，或有问题，请使用以下渠道：

## 覆盖范围与时间

- 覆盖范围：空间：全球（不含南极洲）；时间：2000 年至 2017 年长期统计（逐月）；分辨率：1,000 米。
- 时间范围：2000-01-01 至 2018-01-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| jan | 长期地表温度白天逐月平均，1 月 | 1000 |  |
| feb | 长期地表温度白天逐月平均，2 月 | 1000 |  |
| mar | 长期地表温度白天逐月平均，3 月 | 1000 |  |
| apr | 长期地表温度白天逐月平均，4 月 | 1000 |  |
| may | 长期地表温度白天逐月平均，5 月 | 1000 |  |
| jun | 长期地表温度白天逐月平均，6 月 | 1000 |  |
| jul | 长期地表温度白天逐月平均，7 月 | 1000 |  |
| aug | 长期地表温度白天逐月平均，8 月 | 1000 |  |
| sep | 长期地表温度白天逐月平均，9 月 | 1000 |  |
| oct | 长期地表温度白天逐月平均，10 月 | 1000 |  |
| nov | 长期地表温度白天逐月平均，11 月 | 1000 |  |
| dec | 长期地表温度白天逐月平均，12 月 | 1000 |  |

## 能拿来做什么

- 作为全球气候与土地系统分析的基础图层。
- 为生态、水文与土壤建模提供环境变量。
- 与其他全球格网产品做对比与融合。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_M/v01');
```

- 数据集编号（Earth Engine ID）：`OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_M/v01`
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_CLM_CLM_LST_MOD11A2-DAY_M_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 许可与引用

- 许可：CC-BY-SA-4.0
- 关键词：climate, envirometrix, lst, mod11a2, modis, monthly, opengeohub, openlandmap, weather-and-climate
- 数据引用：Long-term MODIS LST day-time and night-time temperatures, sd and differences
at 1 km based on the 2000-2017 time series
[10.5281/zenodo.1420114](https://doi.org/10.5281/zenodo.1420114)

- DOI：10.5281/zenodo.1420114

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OpenLandMap Long-term Land Surface Temperature Monthly Day-Night Difference](/pages/a6fac662/)
- [OpenLandMap Precipitation Monthly](/pages/13ce8975/)
- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
