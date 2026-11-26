---
title: "VNP46A2：VIIRS 月光间隙填充 BRDF 夜间灯光逐日 L3 全球 500 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/877e12fd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brdf"
  - "daily"
  - "nasa"
  - "nighttime"
  - "noaa"
  - "population"
  - "viirs"
---

# VNP46A2：VIIRS 月光间隙填充 BRDF 夜间灯光逐日 L3 全球 500 米 [已弃用]

英文原名：VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m [deprecated]

## 这是什么数据

Suomi 国家极轨伙伴（SNPP）可见红外成像辐射计套件（VIIRS）搭载日夜波段（DNB）传感器，提供适用于地球系统科学与应用的全球逐日夜间可见光与近红外（NIR）光测量。VIIRS DNB 在弱光条件下的超高灵敏度，使我们能够生成一套新的科学质量夜间产品，与上一代国防气象卫星计划/业务线扫描系统（DMSP/OLS）夜间灯光影像产品相比，传感器分辨率与定标有实质改进。

VNP46A2 数据集是使用双向反射分布函数（BRDF）的逐日月光与大气校正夜间灯光（NTL）产品。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2012 年至 2024 年（逐日）；分辨率：500 米。
- 时间范围：2012-01-19 至 2024-12-26

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DNB_BRDF_Corrected_NTL | BRDF 校正的 DNB 夜间灯光 | 500 |  |
| Gap_Filled_DNB_BRDF_Corrected_NTL | 间隙填充的 BRDF 校正 DNB 夜间灯光 | 500 |  |
| DNB_Lunar_Irradiance | DNB 月球辐照度 | 500 |  |
| Latest_High_Quality_Retrieval | 最近一次高质量 BRDF 校正 DNB 辐射反演 | 500 |  |
| Mandatory_Quality_Flag | 强制质量标志 | 500 |  |
| Snow_Flag | 积雪覆盖标志 | 500 |  |
| QF_Cloud_Mask | 云掩膜质量标志 | 500 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP46A2');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP46A2`
- 提供方：NASA LAADS DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP46A2
* [User's Guide](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/VIIRS_Black_Marble_UG_v1.3_Sep_2022.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/Product%20Generation%20Algorithms/VIIRS_Black_Marble_ATBD_v1.1_July_2020.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A2/)

## 许可与引用

- 许可：proprietary
- 关键词：brdf, daily, nasa, nighttime, noaa, population, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP46A2.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VIIRS 夜间日/夜波段合成第 1 版（月度）](/pages/331f49de/)
- [VIIRS 夜间日/夜波段年度合成 V2.1](/pages/98ca1d9b/)
- [VIIRS 夜间日/夜波段年度合成 V2.2](/pages/57765f1c/)
- [VIIRS 杂散光校正夜间日/夜波段合成第 1 版（月度）](/pages/b0f1292c/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
