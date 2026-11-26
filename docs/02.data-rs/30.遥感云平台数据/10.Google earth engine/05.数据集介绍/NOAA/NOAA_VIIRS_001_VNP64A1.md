---
title: "VNP64A1：火烧迹地逐月 L4 全球 500 米 SIN 网格 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/b6a84ae2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "burn"
  - "change-detection"
  - "fire"
  - "land"
  - "nasa"
  - "noaa"
  - "surface"
  - "viirs"
---

# VNP64A1：火烧迹地逐月 L4 全球 500 米 SIN 网格 [已弃用]

英文原名：VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid [deprecated]

## 这是什么数据

逐日 Suomi 国家极轨伙伴（Suomi NPP）NASA 可见红外成像辐射计套件（VIIRS）火烧迹地（VNP64A1）第 1 版数据产品，是逐月、全球格网 500 米产品，包含逐像元火烧面积与质量信息。VNP64 火烧迹地制图方法使用 750 米 VIIRS 影像结合 750 米 VIIRS 活动火点观测。

同时使用对生物量燃烧敏感与不敏感的 VIIRS 波段，探测火灾引起的变化，并将其与其他类型的变化区分开来。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2014 年至 2019 年（逐月）；分辨率：500 米。
- 时间范围：2014-01-01 至 2019-01-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Burn_Date | 每个 500 米格网像元的火烧儒略日（1–366）。 | 500 |  |
| Burn_Date_Uncertainty | 火烧日期的估算不确定性（天）。未烧、未制图与水体格网像元被掩膜。 | 500 |  |
| QA | 质量保证指标 | 500 |  |
| First_Day | 一年中可靠变化探测的第一天 | 500 |  |
| Last_Day | 一年中可靠变化探测的最后一天 | 500 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP64A1');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP64A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP64A1
* [User's Guide](https://lpdaac.usgs.gov/documents/1330/VNP64A1_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/572/VNP64A1_ATBD_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp64a1v001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：burn, change-detection, fire, land, nasa, noaa, surface, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP64A1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP14A1.001：热异常/火点逐日 L3 全球 1 公里 SIN 网格 [已弃用]](/pages/a3cdde8d/)
- [FIRMS：资源管理火灾信息系统](/pages/4ae50fa9/)
- [FireCCI51：MODIS Fire_cci 过火面积像元产品（5.1 版）](/pages/2a6e2416/)
- [GOES-16 FDCC 系列 ABI 二级火/热点特征 CONUS](/pages/fdfe82fc/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
