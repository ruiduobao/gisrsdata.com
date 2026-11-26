---
title: "MCD43A3.061 MODIS 反照率日产品 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/80cc401f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "black-sky"
  - "daily"
  - "global"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "usgs"
  - "white-sky"
---

# MCD43A3.061 MODIS 反照率日产品 500 米

英文原名：MCD43A3.061 MODIS Albedo Daily 500m

## 这是什么数据

MCD43A3 V6.1 反照率模型数据集是一个日 16 天产品。它为 MODIS 地表反射率波段（波段 1 至波段 7）中的每一个以及 3 个宽谱波段（可见光、近红外与短波）提供方向半球反射率（黑空反照率）与双半球反射率（白空反照率）。每幅 500 米/像元日影像使用以给定日为中心的 16 天数据生成。还为 10 个反照率波段中的每一个提供一个质量波段。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2026 年；分辨率：500 米。
- 时间范围：2000-02-24 至 2026-10-25

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Albedo_BSA_Band1 | 波段 1的黑空反照率。 | 500 | 620-670nm |
| Albedo_BSA_Band2 | 波段 2的黑空反照率。 | 500 | 841-876nm |
| Albedo_BSA_Band3 | 波段 3的黑空反照率。 | 500 | 459-479nm |
| Albedo_BSA_Band4 | 波段 4的黑空反照率。 | 500 | 545-565nm |
| Albedo_BSA_Band5 | 波段 5的黑空反照率。 | 500 | 1230-1250nm |
| Albedo_BSA_Band6 | 波段 6的黑空反照率。 | 500 | 1628-1652nm |
| Albedo_BSA_Band7 | 波段 7的黑空反照率。 | 500 | 2105-2155nm |
| Albedo_BSA_vis | 可见光宽波段的黑空反照率。 | 500 |  |
| Albedo_BSA_nir | 近红外宽波段的黑空反照率。 | 500 | 858nm |
| Albedo_BSA_shortwave | 短波宽波段的黑空反照率。 | 500 |  |
| Albedo_WSA_Band1 | 波段 1的白空反照率。 | 500 | 620-670nm |
| Albedo_WSA_Band2 | 波段 2的白空反照率。 | 500 | 841-876nm |
| Albedo_WSA_Band3 | 波段 3的白空反照率。 | 500 | 459-479nm |
| Albedo_WSA_Band4 | 波段 4的白空反照率。 | 500 | 545-565nm |
| Albedo_WSA_Band5 | 波段 5的白空反照率。 | 500 | 1230-1250nm |
| Albedo_WSA_Band6 | 波段 6的白空反照率。 | 500 | 1628-1652nm |
| Albedo_WSA_Band7 | 波段 7的白空反照率。 | 500 | 2105-2155nm |
| Albedo_WSA_vis | 可见光宽波段的白空反照率。 | 500 |  |
| Albedo_WSA_nir | 近红外宽波段的白空反照率。 | 500 | 858nm |
| Albedo_WSA_shortwave | 短波宽波段的白空反照率。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band1 | 波段 1的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band2 | 波段 2的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band3 | 波段 3的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band4 | 波段 4的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band5 | 波段 5的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band6 | 波段 6的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band7 | 波段 7的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_vis | 可见光宽波段的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_nir | 近红外宽波段的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_shortwave | 短波宽波段的 BRDF 反照率强制质量。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MCD43A3');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD43A3`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD43A3
* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MCD43A3)

## 许可与引用

- 许可：proprietary
- 关键词：albedo, black-sky, daily, global, modis, nasa, satellite-imagery, usgs, white-sky
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A3.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km](/pages/18647d64/)
- [MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m](/pages/568e60e0/)
- [MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m](/pages/cc1794f9/)
- [MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m](/pages/f2dfffb1/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
