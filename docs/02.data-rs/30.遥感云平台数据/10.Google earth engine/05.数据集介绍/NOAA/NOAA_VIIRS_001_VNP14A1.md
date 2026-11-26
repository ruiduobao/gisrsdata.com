---
title: "VNP14A1.001：热异常/火点逐日 L3 全球 1 公里 SIN 网格 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/a3cdde8d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "fire"
  - "land"
  - "nasa"
  - "noaa"
  - "surface"
  - "viirs"
---

# VNP14A1.001：热异常/火点逐日 L3 全球 1 公里 SIN 网格 [已弃用]

英文原名：VNP14A1.001: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid [deprecated]

## 这是什么数据

逐日 Suomi 国家极轨伙伴 NASA 可见红外成像辐射计套件（VIIRS）热异常/火点（VNP14A1）第 1 版数据产品，提供活动火点与其他热异常的逐日信息。VNP14A1 数据产品是由 VIIRS 750 米波段在逐日（24 小时）期内探测的火点像元构成的全球 1 公里格网合成。VNP14 数据产品的设计参照中分辨率成像光谱仪（MODIS）热异常/火点产品套件。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2012 年至 2024 年（逐日）；分辨率：1,000 米。
- 时间范围：2012-01-19 至 2024-06-16

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| FireMask | 火点置信度。 | 1000 |  |
| MaxFRP | 最大火辐射功率 | 1000 |  |
| QA | 全球地表物候质量控制 | 1000 |  |
| sample | 条带内采样编号 | 1000 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP14A1');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP14A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP14A1
* [User's Guide](https://lpdaac.usgs.gov/documents/427/VNP14_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/427/VNP14_User_Guide_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp14a1v001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：fire, land, nasa, noaa, surface, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP14A1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP64A1：火烧迹地逐月 L4 全球 500 米 SIN 网格 [已弃用]](/pages/b6a84ae2/)
- [FIRMS：资源管理火灾信息系统](/pages/4ae50fa9/)
- [FireCCI51：MODIS Fire_cci 过火面积像元产品（5.1 版）](/pages/2a6e2416/)
- [GOES-16 FDCC 系列 ABI 二级火/热点特征 CONUS](/pages/fdfe82fc/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
