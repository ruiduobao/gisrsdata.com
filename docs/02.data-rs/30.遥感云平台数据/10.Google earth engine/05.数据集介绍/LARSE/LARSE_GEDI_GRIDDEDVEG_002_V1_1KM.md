---
title: "格网 GEDI 植被结构指标与生物量密度，1KM 像元）"
date: 2026-11-03 12:00:00
permalink: /pages/d7e2374e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biomass"
  - "canopy"
  - "forest"
  - "forest-biomass"
  - "gedi"
  - "larse"
  - "lidar"
  - "nasa"
  - "vegetation"
---

# 格网 GEDI 植被结构指标与生物量密度，1KM 像元）

英文原名：Gridded GEDI Vegetation Structure Metrics and Biomass Density, 1KM pixel size

## 这是什么数据

本数据集由近全球、分析就绪的多分辨率格网植被结构指标组成，源自与 25 米直径激光雷达足印关联的 NASA 全球生态系统动力学调查（GEDI）二级与 4A 产品。本数据集提供近全球植被结构的全面表征，包括整个垂直剖面，完全基于 GEDI 激光雷达，并用独立数据验证。

GEDI 传感器安装在国际空间站（ISS）上，使用八束激光（沿轨间隔 60 米、地表横轨间隔 600 米）测量约南北纬 52 度之间的地面高程与植被结构。在 2019 年 4 月 17 日至 2023 年 3 月 16 日之间，GEDI 分别获取了 110 亿与 77 亿个适用于测量地面高程与植被结构的高质量波形。

除许多标准 L2 与 L4A 足印指标外，还推导了几个额外指标，可能对地球系统模型中碳与水循环过程的应用以及森林管理、生物多样性建模与生境评估特别有用。变量包括冠层高度、冠层覆盖、植物面积指数、叶层高度多样性与 5 米层级的植物面积体积密度。更多信息参考[格网 GEDI 植被结构指标与生物量密度](https://daac.ornl.gov/VEGETATION/guides/GEDI_HighQuality_Shots_Rasters.html)。

每个 GEDI 足印指标包括八种统计量：平均值、自助法平均值标准误、中位数、标准差、四分位距、第 95 百分位、香农多样性指数与足印计数。使用的质量足印过滤方法与 GEDI L4B 格网地上生物量密度版本 2.1 一致。与对应的 GEDI L3 数据集相比，本数据集在多个空间分辨率与多个时间段（年度与整个任务期）提供额外的格网指标。

本数据集提供聚合到三种空间分辨率栅格的 GEDI 足印指标：1 公里、6 公里与 12 公里。本数据集使用 1KM 像元大小。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球约南北纬 52° 之间；时间范围：2019 年至 2023 年；分辨率：1 公里。
- 时间范围：2019-04-17 至 2023-03-16

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| mean | 像元内 GEDI 足印指标值的平均值。 | 1000 |  |
| meanbse | 用自助重采样计算的平均值标准误。创建了 100 个自助样本；每个样本包括随机选取的 70% 足印。用自助样本的平均值计算标准误。（仅当格网单元内至少有 10 个 GEDI 足印时计算。） | 1000 |  |
| median | 像元内 GEDI 足印指标值的中位数（第 50 百分位）。 | 1000 |  |
| sd | 像元内 GEDI 足印指标值的标准差。 | 1000 |  |
| iqr | 像元内 GEDI 足印指标值的四分位距（第 75 百分位减第 25 百分位）。 | 1000 |  |
| p95 | 像元内 GEDI 足印指标值的第 95 百分位值。 | 1000 |  |
| shan | 像元内 GEDI 足印指标值的香农多样性指数（H）。计算为：-1*(sum(p*log(p)))，其中 p 是每个分箱的 GEDI 足印值比例。 | 1000 |  |
| countf | 像元内 GEDI 足印指标值的计数。使用 30 米子格网选取每个 30 米子格网单元内（时间上）最早获取的 GEDI 足印。 | 1000 |  |

## 能拿来做什么

- 格网植被结构制图
- 碳循环与水循环建模
- 森林管理与生境评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GRIDDEDVEG_002/V1/1KM');
```

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GRIDDEDVEG_002/V1/1KM`
- 提供方：Rasterization: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、Gridded GEDI Vegetation Structure Metrics and Biomass Density、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GRIDDEDVEG_002_V1_1KM

## 许可与引用

- 许可：proprietary
- 关键词：biomass, canopy, forest, forest-biomass, gedi, larse, lidar, nasa, vegetation
- 数据引用：Burns, P., Hakkenberg, C.R. & Goetz, S.J. Multi-resolution gridded maps of
vegetation structure from GEDI. Sci Data 11, 881 (2024).
[doi:10.1038/s41597-024-03668-4](https://doi.org/10.1038/s41597-024-03668-4)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GEDI L2A Raster Canopy Top Height (Version 2)](/pages/6e0348e1/)
- [GEDI L2A Vector Canopy Top Height (Version 2)](/pages/4874e1f7/)
- [GEDI L2A table index](/pages/81e014ca/)
- [GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)](/pages/359e6f68/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
