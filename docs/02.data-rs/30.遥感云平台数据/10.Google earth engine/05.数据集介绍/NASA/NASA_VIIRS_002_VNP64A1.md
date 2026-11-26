---
title: "VNP64A1.002：火烧迹地月度四级全球 500 米 SIN 格网"
date: 2026-11-03 12:00:00
permalink: /pages/49ac0524/
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
  - "surface"
  - "viirs"
---

# VNP64A1.002：火烧迹地月度四级全球 500 米 SIN 格网

英文原名：VNP64A1.002: Burned Area Monthly L4 Global 500m SIN Grid

## 这是什么数据

逐日 Suomi 国家极轨伙伴（Suomi NPP）NASA 可见光红外成像辐射计套件（VIIRS）火烧迹地（VNP64A1）版本 2 数据产品是一个月度全球格网 500 米产品，包含逐像元火烧面积与质量信息。VNP64 火烧面积制图方法采用 750 米 VIIRS 影像结合 750 米 VIIRS 活火观测。

对生物量燃烧敏感与不敏感的 VIIRS 波段都被用于探测火引起的变化，并将它们与其他类型的变化区分开。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2012 年至 2026 年；分辨率：500 米。
- 时间范围：2012-01-19 至 2026-08-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Burn_Date | 每个 500 米格网单元的火烧序数日（1–366）。 | 500 |  |
| Burn_Date_Uncertainty | 火烧日期的估计不确定性（天）。未烧、未制图与水格网单元被掩膜。 | 500 |  |
| QA | 质量保证指标。 | 500 |  |
| First_Day | 可靠变化探测的年内第一天。 | 500 |  |
| Last_Day | 可靠变化探测的年内最后一天。 | 500 |  |

## 能拿来做什么

- 火烧迹地制图
- 火灾生态与排放估算
- 土地覆盖变化分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP64A1');
```

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP64A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP64A1
* [User's Guide](https://lpdaac.usgs.gov/documents/1330/VNP64A1_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/572/VNP64A1_ATBD_V1.pdf)
* [General Documentation](https://doi.org/10.5067/VIIRS/VNP64A1.002)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：burn, change-detection, fire, land, nasa, surface, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP64A1.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP14A1.002：热异常/火逐日三级全球 1 千米 SIN 格网](/pages/ef413f33/)
- [FIRMS：资源管理火灾信息系统](/pages/4ae50fa9/)
- [FireCCI51：MODIS Fire_cci 过火面积像元产品（5.1 版）](/pages/2a6e2416/)
- [GOES-16 FDCC 系列 ABI 二级火/热点特征 CONUS](/pages/fdfe82fc/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
