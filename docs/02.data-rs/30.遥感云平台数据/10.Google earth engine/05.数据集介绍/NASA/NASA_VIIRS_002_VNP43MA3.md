---
title: "VNP43MA3：BRDF/反照率逐日三级全球 1 千米 SIN 格网"
date: 2026-11-03 12:00:00
permalink: /pages/86f9040c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "brdf"
  - "land"
  - "nasa"
  - "noaa"
  - "satellite-imagery"
  - "surface"
  - "viirs"
---

# VNP43MA3：BRDF/反照率逐日三级全球 1 千米 SIN 格网

英文原名：VNP43MA3: BRDF/Albedo Daily L3 Global 1km SIN Grid

## 这是什么数据

NASA/NOAA Suomi 国家极轨伙伴（Suomi NPP）可见光红外成像辐射计套件（VIIRS）双向反射分布函数（BRDF）与反照率（BRDF/反照率）版本 2 产品以 1000 米（1 千米）分辨率提供反照率估计。VNP43MA3 产品逐日使用 16 天 VIIRS 数据生产，在时间上加权到第九天。它为九个 VIIRS 中等分辨率波段（M1–M5、M7–M8、M10–M11）与三个宽波段（vis、nir 与 shortwave）提供当地太阳正午的方向半球反射率（黑空反照率）与双半球反射率（白空反照率）。VNP43 数据产品旨在促进 NASA 中分辨率成像光谱仪（MODIS）BRDF/反照率数据产品套件的连续性。

VNP43 算法使用 RossThick/Li-Sparse-Reciprocal（RTLSR）半经验核驱动 BRDF 模型重构地表各向异性效应，计算当地太阳正午的积分黑空反照率（BSA）与白空反照率（WSA）（VNP43MA3）。研究者可将 BRDF 模型参数与简单多项式一起使用，获得任何太阳照明角度下的黑空反照率。同样，BSA 与 WSA 科学数据集（SDS）层都可与简单多项式一起使用，手动估计瞬时实际反照率（蓝空反照率）。方法细节见算法理论基础文档（ATBD）。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2012 年至 2026 年；分辨率：1,000 米。
- 时间范围：2012-01-17 至 2026-10-21

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Band_Mandatory_Quality_M1 | 波段 M1 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M2 | 波段 M2 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M3 | 波段 M3 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M4 | 波段 M4 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M5 | 波段 M5 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M7 | 波段 M7 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M8 | 波段 M8 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M10 | 波段 M10 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M11 | 波段 M11 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_vis | 波段 vis 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_nir | 波段 nir 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_shortwave | 波段 shortwave 的 BRDF/反照率强制质量：* 0：完整 BRDF 反演 * 1：量级 BRDF 反演。 | 1000 |  |
| Albedo_BSA_M1 | 波段 M1 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_M2 | 波段 M2 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_M3 | 波段 M3 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_M4 | 波段 M4 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_M5 | 波段 M5 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_M7 | 波段 M7 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_M8 | 波段 M8 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_M10 | 波段 M10 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_M11 | 波段 M11 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_vis | 波段 vis 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_nir | 波段 nir 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_BSA_shortwave | 波段 shortwave 在当地太阳正午的黑空反照率。 | 1000 |  |
| Albedo_WSA_M1 | 波段 M1 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_M2 | 波段 M2 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_M3 | 波段 M3 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_M4 | 波段 M4 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_M5 | 波段 M5 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_M7 | 波段 M7 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_M8 | 波段 M8 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_M10 | 波段 M10 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_M11 | 波段 M11 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_vis | 波段 vis 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_nir | 波段 nir 在当地太阳正午的白空反照率。 | 1000 |  |
| Albedo_WSA_shortwave | 波段 shortwave 在当地太阳正午的白空反照率。 | 1000 |  |

## 能拿来做什么

- 地表参数监测
- 植被与土地覆盖研究
- VIIRS 数据应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP43MA3');
```

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP43MA3`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP43MA3
* [User's Guide](https://www.umb.edu/spectralmass/viirs-user-guides-c1-and-c2/vnp43ia3-and-vnp43ma3-albedo-products/)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/194/VNP43_ATBD_V1.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/VIIRS/1/VNP43MA3)

## 许可与引用

- 许可：proprietary
- 关键词：albedo, brdf, land, nasa, noaa, satellite-imagery, surface, viirs
- 数据引用：Schaaf, C., Z. Wang, A. Erb, I. Paynter. VIIRS/NPP BRDF/Albedo Albedo Daily L3
Global 1km SIN Grid V002. 2024, distributed by NASA EOSDIS Land Processes
Distributed Active Archive Center,
[10.5067/VIIRS/VNP43MA3.002](https://doi.org/10.5067/VIIRS/VNP43MA3.002).

- DOI：10.5067/VIIRS/VNP43MA3.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP09GA：VIIRS 地表反射率逐日 500 米与 1 千米](/pages/f3f78834/)
- [VNP09H1：VIIRS 地表反射率 8 天三级全球 500 米](/pages/862913cc/)
- [VNP43IA3：BRDF/反照率逐日三级全球 500 米 SIN 格网](/pages/217dd9b2/)
- [VNP43IA4：BRDF/反照率质量逐日三级全球 500 米 SIN 格网](/pages/00b89222/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
